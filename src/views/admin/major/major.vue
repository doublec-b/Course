<template>
    <div>
        <div class="up">
            <div class="title">专业信息</div>
            <el-button type="primary" plain @click="doAdd()">
                <el-icon size="15px" :color="color">
                    <Plus />
                </el-icon>新建</el-button>

            <el-select v-model="schoolId" placeholder="请选择学校">
                <el-option v-for="item in schoolArr" :key="item.id" :label="item.schoolName" :value="item.id" />
            </el-select>
            <el-button plain  type="primary" @click="query()">
                <el-icon size="15px" ><Search /></el-icon>
                根据学校Id查询</el-button>

            <el-select v-model="departId" placeholder="请选择学院">
                <el-option v-for="item in departArr" :key="item.id" :label="item.departName" :value="item.id" />
            </el-select>
            <el-button plain  type="primary" @click="queryByDepartId()">
                <el-icon size="15px" ><Search /></el-icon>
                根据学院Id查询</el-button>

            <el-button plain  type="primary" @click="clear()">
                <el-icon size="15px" ><RefreshRight /></el-icon>
                清空</el-button>
        </div>

        <div class="down">
            <div>
                <ListView :data="data" :column="column" title="">
                    <slot>
                        <el-table-column label="操作" width="200">
                            <template #default="scope">
                                <el-button  plain  type="primary" @click="doEdit(scope.row.id)">
                                    <el-icon size="18px" :color="color">
                                        <Edit />
                                    </el-icon>
                                    编辑</el-button>
                                <el-button  plain type="danger" @click="doDelete(scope.row.id)">
                                    <el-icon size="18px" :color="color">
                                        <Delete />
                                    </el-icon>
                                    删除</el-button>
                            </template>
                        </el-table-column>
                    </slot>
                </ListView>
            </div>
        </div>

        <el-dialog v-model="visible" v-if="visible" width="30%" title="">
            <MajorEdit :id="choiceId" @doCancel="doCancel"></MajorEdit>
        </el-dialog>
    </div>
</template>
<script>
import ListView from '../../../components/list-view/list-view.vue';
import { allSchool, al } from "@/http/departmentApi/departmentApi";
import { allMajor, del, getMajorsForSelectBySchoolId,getMajorForSelectByDepartId } from "@/http/major/major"
import { success, fail } from "@/utils/msg/msg";
import MajorEdit from '../../../components/majorEdit/majorEdit.vue';
export default {
    mounted() {
        this.column = this.buildColumn()
        this.all()
        this.getAllSchool()
        this.getAllDepart()
    },
    data() {
        return {
            data: [],
            column: [],
            visible: false,
            choiceId: 0,

            departArr: [],
            schoolArr: [],
            schoolId: '',
            departId: ''
        };
    },
    methods: {
        getAllDepart(){
            al().then(resp=>{
                this.departArr = resp.data.departments
            })
        },
        query() {
            console.log('学校id' + this.schoolId)
            getMajorsForSelectBySchoolId({ schoolId	: this.schoolId	 }).then(resp => {
                console.log('query到的：' + JSON.stringify(resp))
                this.data = resp.msg != '没有数据' ? resp.data.majors : []
            })
        },
        queryByDepartId() {
            console.log('按照学院id查询:' + this.departId)
            getMajorForSelectByDepartId({departId:this.departId}).then(resp => {
                console.log('queryByDepartId' + JSON.stringify(resp))
                this.data = resp.msg != '没有数据' ? resp.data.majors : []
            })
        },
        clear() {
            this.schoolId = ''
            this.departId = ''
            this.all()
        },
        getAllSchool() {
            allSchool().then(resp => {
                this.schoolArr = resp.data.schools
            })
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
            allMajor().then(resp => {
                console.log('收到回复：' + JSON.stringify(resp.data))
                this.data = resp.data.majors

                this.data.forEach(item=>{
                    item.updateTime = item.updateTime.split('T')[0]
                    item.createTime = item.createTime.split('T')[0]
                })
            })
        },
        //规定列表每列名称和显示的属性
        buildColumn() {
            return [
                { prop: "id", label: "编号", width: 70 },
                { prop: "createTime", label: "创建时间", width: 260 },
                { prop: "departId", label: "学院id", width: 80 },
                { prop: "majorDesc", label: "专业描述", width: 200 },
                { prop: "majorName", label: "专业名称", width: 200 },
                { prop: "schoolId", label: "学校id", width: 80 },
                { prop: "updateTime", label: "更新时间", width: 260 },
            ];
        }
    },
    components: { ListView, MajorEdit }
}
</script>
<style  scoped>
.up {
    display: flex;
    padding: 20px;
    justify-content: center;
}
.title{
    font-size: large;
    font-weight: 600;
    padding-right: 20px;
}
.down {
    display: flex;
    justify-content: center;
    width: 100;
}
</style>
