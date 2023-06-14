<template>
    <div>
        <div class="up">
            <div class="title">课程信息</div>
            <el-input v-model="name" placeholder="请输入课程名称" />
            <el-button plain type="primary" @click="buName()">
                <el-icon size="15px">
                    <Search />
                </el-icon>
                按照课程名称查询</el-button>

            <div class="title">课程信息</div>
            <!-- <el-input v-model="schoolId"  placeholder="请输入学校"/> -->
            <el-select v-model="schoolId" placeholder="请选择学校" @change="changeSchool">
                <el-option v-for="item in schoolArr" :key="item.id" :label="item.schoolName" :value="item.schoolName" />
            </el-select>

            <el-select v-model="departId" placeholder="请选择学院" @change="changeDepart">
                <el-option v-for="item in departArr" :key="item.id" :label="item.departName" :value="item.departName" />
            </el-select>

            <el-select v-model="majorId" placeholder="请选择专业">
                <el-option v-for="item in majorArr" :key="item.id" :label="item.majorName" :value="item.majorName" />
            </el-select>

            <el-button plain type="primary" @click="query()">
                <el-icon size="15px">
                    <Search />
                </el-icon>
                查询</el-button>

            <el-button plain type="primary" @click="clear()">
                <el-icon size="15px">
                    <RefreshRight />
                </el-icon>
                清空</el-button>
        </div>

        <div class="down">
            <div>
                <ListView :data="data" :column="column" title="">
                  
                </ListView>
            </div>
        </div>

        <el-dialog v-model="visible" v-if="visible" width="30%" title="课程信息">
            <courseEdit :id="choiceId" @doCancel="doCancel"></courseEdit>
        </el-dialog>
    </div>
</template>
<script>
import ListView from '../../../components/list-view/list-view.vue';
import {
    al, del,
    getCoursesBySchoolAndDepartAndMajorForSelect,
    allDepart,
    allMajor,
    allSchool,
    getDepartsForSelectBySchoolId,
    getMajorForSelectByDepartId,
    getCoursesByName
} from "@/http/courseApi/courseApi"
import { success, fail } from "@/utils/msg/msg";
import courseEdit from '../../../components/courseEdit/courseEdit.vue';
export default {
    mounted() {
        this.column = this.buildColumn()
        this.all()
    },
    data() {
        return {
            data: [],
            column: [],
            visible: false,
            choiceId: 0,

            departArr: [],
            schoolArr: [],
            majorArr: [],
            schoolId: 0,
            departId: 0,
            majorId: 0,
            name: ''
        };
    },
    methods: {
        buName(){
            getCoursesByName({name:this.name}).then(resp=>{
                console.log('名称查询:' + JSON.stringify(resp))
                this.data = resp.data.courses

                this.data.forEach(item => {
                    item.updateTime = item.updateTime.split('T')[0]
                    item.createTime = item.createTime.split('T')[0]
                })
            })
        },
        query() {
            let params = {
                school: this.schoolId,
                depart: this.departId,
                major: this.majorId
            }
            console.log('查询:' + JSON.stringify(params))
            getCoursesBySchoolAndDepartAndMajorForSelect(params).then(resp => {
                console.log('收到的：' + JSON.stringify(resp))
                this.data = resp.data.courses
                this.column = [
                    { prop: "id", label: "编号", width: 70 },
                    { prop: "name", label: "名称", width: 150 },
                ]


            })
        },
        //选中学校时获取该学校的学院，发现都是查到所有学院
        changeSchool(school) {
            let id
            this.schoolArr.forEach(item => {
                if (item.schoolName == school) {
                    id = item.id
                }
            })
            console.log('学校id:' + school)
            getDepartsForSelectBySchoolId({ schoolId: id }).then(resp => {
                console.log('收到的学院:' + JSON.stringify(resp))
                this.departArr = resp.msg == '成功' ? resp.data.departments : []
            })
        },
        //选中学院时获取该学院下的专业，major-controller里面根据学院id查询的接口报错
        changeDepart(depart) {
            let id
            this.departArr.forEach(item => {
                if (item.departName == depart) {
                    id = item.id
                }
            })
            console.log('学院id:' + depart)
            getMajorForSelectByDepartId({ departId: id }).then(resp => {
                console.log('收到的专业:' + JSON.stringify(resp))
                this.majorArr = resp.msg == '成功' ? resp.data.majors : []
            })
        },
        clear() {
            this.schoolId = 0
            this.departId = 0
            this.major = 0
            this.all()
        },
        doEdit(id) {
            this.choiceId = id
            this.visible = true
            console.log('编辑的id:' + this.choiceId + '  visible:' + this.visible)
        },
        doAdd() {
            console.log('触发了添加方法')
            this.choiceId = 0
            this.visible = true
        },
        doCancel() {
            this.visible = false
            this.all()
        },
        doDelete(id) {
            console.log('删除的id:' + id)
            del({ id: id }).then(resp => {
                success('删除成功')
                this.all()
            })
        },
        all() {
            this.column = this.buildColumn()

            al().then(resp => {
                console.log('收到回复：' + JSON.stringify(resp.data))
                this.data = resp.data.courses

                this.data.forEach(item => {
                    item.updateTime = item.updateTime.split('T')[0]
                    item.createTime = item.createTime.split('T')[0]
                })
            })

            allSchool().then(resp => {
                console.log('收到回复：' + JSON.stringify(resp.data))
                this.schoolArr = resp.data.schools
            })

            allDepart().then(resp => {
                console.log('收到回复：' + JSON.stringify(resp.data))
                this.departArr = resp.data.departments
            })

            allMajor().then(resp => {
                console.log('收到回复：' + JSON.stringify(resp.data))
                this.majorArr = resp.data.majors
            })
        },
        //规定列表每列名称和显示的属性
        buildColumn() {
            return [
                { prop: "id", label: "编号", width: 70 },
                { prop: "courseNo", label: "课程编号", width: 100 },
                { prop: "courseType", label: "课程类型", width: 80 },
                { prop: "createTime", label: "创建时间", width: 120 },
                { prop: "depart", label: "学院", width: 130 },
                { prop: "description", label: "课程描述", width: 200 },
                { prop: "major", label: "专业", width: 80 },

                { prop: "name", label: "名称", width: 180 },
                { prop: "nameEn", label: "英文名称", width: 200 },
                { prop: "school", label: "学校", width: 100 },
                { prop: "state", label: "状态", width: 80 },
                { prop: "updateTime", label: "更新时间", width: 120 },
            ];
        }
    },
    components: { ListView, courseEdit }
}
</script>
<style  scoped>
.el-input{
    width: 180px;
}
.up {
    display: flex;
    padding: 20px;
    justify-content: center;
}

.title {
    font-size: large;
    font-weight: 600;
    padding-right: 20px;
    margin-left: 20px;
}

.down {
    display: flex;
    justify-content: center;
    width: 100;
}
</style>
