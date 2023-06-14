<template>
    <div>
        <el-form :model="entity" label-width="120px">
            <el-form-item label="创办时间">
                <el-date-picker v-model="entity.createTime" type="datetime" placeholder="Select date and time" />
            </el-form-item>

            <el-form-item label="更新时间">
                <el-date-picker v-model="entity.updateTime" type="datetime" placeholder="Select date and time" />
            </el-form-item>

            <el-form-item label="课程">
                <el-input v-model="entity.courseIds" />
            </el-form-item>

            <el-form-item label="用户信息id">
                <el-input v-model="entity.userinfoId" />
            </el-form-item>
        </el-form>

        <div class="btnDiv">
            <el-button type="primary" @click="doSaveOrUpdata">确定</el-button>
            <el-button @click="doCancel">取消</el-button>
        </div>
    </div>
</template>
<script>
import { one, saveOrUpdate } from "@/http/userCourseApi/userCourseApi"
import { success, fail } from "@/utils/msg/msg";
import { useUserStore } from "@/store/user";
export default {
    props: { id: Number },
    mounted() {
        const userStore = useUserStore();
        const { token } = userStore;
        console.log('token：' + token)
        console.log('弹窗收到的id' + this.id)
        this.get()
    },
    data() {
        return {
            entity: {
                id: 0,
                courseIds: '',
                createTime: '',
                deleted: 0,
                userinfoId: '',
                updateTime: '',
            },
            courseArr:[]
        }
    },
    methods: {
        doSaveOrUpdata() {
            console.log('---- ' + JSON.stringify(this.entity))
            saveOrUpdate(this.entity).then(resp => {
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
                    this.entity = resp.data.userCourse
                })
            }
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
