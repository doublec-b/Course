<template>
    <div>
        <el-form :model="entity" label-width="120px">
            <el-form-item label="创办时间">
                <el-date-picker v-model="entity.createTime" type="datetime" placeholder="Select date and time" />
            </el-form-item>

            <el-form-item label="更新时间">
                <el-date-picker v-model="entity.updateTime" type="datetime" placeholder="Select date and time" />
            </el-form-item>

            <el-form-item label="专业描述">
                <el-input v-model="entity.majorDesc" type="textarea" :rows="3"/>
            </el-form-item>

            <el-form-item label="专业名称">
                <el-input v-model="entity.majorName" />
            </el-form-item>

            <el-form-item label="学校" >
                <el-select v-model="entity.schoolId" placeholder="请选择">
                    <el-option v-for="item in schoolArr" :key="item.id" :label="item.schoolName" :value="item.id" />
                </el-select>
            </el-form-item>

            <el-form-item label="学院">
                <el-select v-model="entity.departId" placeholder="请选择">
                    <el-option v-for="item in departArr" :key="item.id" :label="item.departName" :value="item.id" />
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
import { one, add, edit } from "@/http/major/major"
import { allSchool,getBySchoolId,al } from "@/http/departmentApi/departmentApi"
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
                createTime: '',
                deleted: 0,
                departId: '',
                majorDesc: '',
                majorName: '',
                schoolId: '',
                updateTime: 0,
            },
            enableArr: [
                { value: 0, label: '未启用' },
                { value: 1, label: '已启用' }
            ],
            departArr:[],
            schoolArr:[]
        }
    },
    methods: {
        sure() {
            this.id == 0 ? this.doCreate() : this.edit()
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
                    console.log('编辑学校收到的:' + JSON.stringify(resp))
                    this.entity = resp.data.major
                })
            }
        },
        getAllSchool(){
            allSchool().then(resp => {
                this.schoolArr = resp.data.schools
            })

            al().then(resp=>{
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
