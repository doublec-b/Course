<template>
    <div>
        <el-form :model="entity" label-width="120px">
            <el-form-item label="创办时间">
                <el-date-picker v-model="entity.createTime" type="datetime" placeholder="Select date and time" />
            </el-form-item>

            <el-form-item label="更新时间">
                <el-date-picker v-model="entity.updateTime" type="datetime" placeholder="Select date and time" />
            </el-form-item>

            <el-form-item label="课程描述">
                <el-input v-model="entity.description" type="textarea" :rows="3" />
            </el-form-item>

            <el-form-item label="课程名称">
                <el-input v-model="entity.name" />
            </el-form-item>

            <el-form-item label="课程英文名称">
                <el-input v-model="entity.nameEn" />
            </el-form-item>

            <el-form-item label="课程类型">
                <el-input v-model="entity.courseType" />
            </el-form-item>

            <el-form-item label="课程编号">
                <el-input v-model="entity.courseNo" />
            </el-form-item>

            <el-form-item label="专业名称">
                <el-input v-model="entity.major" />
            </el-form-item>

            <el-form-item label="学校">
                <el-select v-model="entity.school" placeholder="请选择">
                    <el-option v-for="item in schoolArr" :key="item.id" :label="item.schoolName" :value="item.schoolName" />
                </el-select>
            </el-form-item>

            <el-form-item label="学院">
                <el-select v-model="entity.depart" placeholder="请选择">
                    <el-option v-for="item in departArr" :key="item.id" :label="item.departName" :value="item.departName" />
                </el-select>
            </el-form-item>

            <el-form-item label="状态">
                <el-select v-model="entity.state" placeholder="请选择">
                    <el-option v-for="item in enableArr" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
        </el-form>

        <div class="btnDiv">
            <el-button type="primary" @click="sure">确定</el-button>
            <el-button @click="doCancel">取消</el-button>
        </div>
    </div>
</template>
<script>
import {
    one, add, edit, checkCourseName, checkCourseNo
} from "@/http/courseApi/courseApi"
import { allSchool, getBySchoolId, al } from "@/http/departmentApi/departmentApi"
import { success, fail } from "@/utils/msg/msg";
import { getDate } from "@/utils/getDate/getDate";
import { useUserStore } from "@/store/user";
export default {
    props: { id: Number },
    mounted() {
        const userStore = useUserStore();
        const { token } = userStore;
        console.log('token：' + token)
        console.log('弹窗收到的id' + this.id)
        this.getAllSchool()
        this.get()
    },
    data() {
        return {
            entity: {
                id: 0,
                courseNo: '',
                courseType: '',
                createTime: '',
                deleted: 0,
                depart: '',
                description: '',
                major: '',

                name: '',
                nameEn: '',
                school: 0,
                state: '',
                updateTime: '',
            },
            enableArr: [
                { value: 0, label: '激活' },
                { value: 1, label: '未激活' }
            ],
            departArr: [],
            schoolArr: []
        }
    },
    methods: {
        sure() {
            this.id == 0 ? this.checkNo() : this.edit()
        },
        checkNo(){
            checkCourseNo({courseNo:this.entity.courseNo}).then(resp=>{
                console.log('checkNo收到的:' + JSON.stringify(resp))
                resp.msg == '课程编号重复' ? fail('课程编号重复') :this.checkName()
            })
        },
        checkName(){
            checkCourseName({courseName:this.entity.name}).then(resp=>{
                console.log('checkName收到：' + JSON.stringify(resp))
                resp.msg == '课程重复' ? fail('课程重复') : this.doCreate()
            })
        },
        doCreate() {
            console.log('新建的:' + JSON.stringify(this.entity))
            add(this.entity).then(resp => {
                success('新建成功')
                this.doCancel()
            })
        },
        edit() {
            edit(this.entity).then(resp => {
                success('已保存')
                this.doCancel()
            })
        },
        doCancel() {
            this.$emit('doCancel')
        },
        get() {
            console.log('触发了get方法')
            if (this.id != 0) {
                one({ id: this.id }).then(resp => {
                    console.log('编辑收到的:' + JSON.stringify(resp))
                    this.entity = resp.data.course
                })
            }
        },
        getAllSchool() {
            allSchool().then(resp => {
                this.schoolArr = resp.data.schools
            })

            al().then(resp => {
                this.departArr = resp.data.departments
            })
        }
    },
}
</script>
<style  scoped>
.btnDiv {
    margin-top: 10px;
    display: flex;
    justify-content: center;
}
</style>
