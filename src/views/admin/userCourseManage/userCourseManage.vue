<template>
    <div>
        <div class="up">
            <div class="title">用户课程信息</div>
            <!-- <el-button type="primary" plain @click="doAdd()" style="margin-right: 40px;">
                <el-icon size="15px" :color="color">
                    <Plus />
                </el-icon>
                新建</el-button> -->

            <div style="width: 360px;display: flex;justify-content: space-between;">
                <!-- <span>用户id</span> -->
                <el-input v-model="userId" />
                <el-button plain  type="primary" @click="queryByDepartId()">
                    <el-icon size="15px" ><Search /></el-icon>
                    根据用户Id查询</el-button>
            </div>


            <!-- <el-button type="primary" @click="clear()">清空</el-button> -->
        </div>

        <div class="down">
            <div>
                <ListView :data="data" :column="column" title="">
                    <slot>
                        <el-table-column label="操作" width="200">
                            <template #default="scope">
                                <el-button plain  type="primary" @click="doEdit(scope.row.id)">编辑</el-button>
                                <el-button plain  type="danger" @click="doDelete(scope.row.id)">删除</el-button>
                            </template>
                        </el-table-column>
                    </slot>
                </ListView>
            </div>
        </div>

        <el-dialog v-model="visible" v-if="visible" width="30%" title="用户课程信息">
            <UserCourseEdit :id="choiceId" @doCancel="doCancel"></UserCourseEdit>
        </el-dialog>
    </div>
</template>
<script>
import ListView from '../../../components/list-view/list-view.vue';
import { del, getCourseForSelectByUserId } from "@/http/userCourseApi/userCourseApi"
import { success, fail } from "@/utils/msg/msg";
import UserCourseEdit from '../../../components/userCourseEdit/userCourseEdit.vue';
export default {
    mounted() {
        this.column = this.buildColumn()
    },
    data() {
        return {
            data: [],
            column: [],
            visible: false,
            choiceId: 0,
            userId: ''
        };
    },
    methods: {
        queryByDepartId() {
            getCourseForSelectByUserId({ userId: this.userId }).then(resp => {
                console.log('query到的：' + JSON.stringify(resp))
                this.data = resp.msg != '没有数据' ? resp.data.myCourseVos : []

                this.data.forEach(item=>{
                    item.updateTime = item.updateTime.split('T')[0]
                    item.createTime = item.createTime.split('T')[0]
                })
            })
        },
        clear() {
            this.schoolId = ''
            this.departId = ''
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
            this.queryByDepartId()
        },
        doDelete(id) {
            console.log('删除的id:' + id)
            del({ id: id }).then(resp => {
                success('删除成功')
                this.all()
            })
        },
        all() {
        },
        //规定列表每列名称和显示的属性
        buildColumn() {
            return [
                { prop: "id", label: "编号", width: 70 },
                { prop: "createTime", label: "创建时间", width: 260 },
                { prop: "courseIds", label: "课程ids", width: 150 },
                { prop: "userinfoId", label: "用户信息id", width: 200 },
                { prop: "updateTime", label: "更新时间", width: 260 },
            ];
        }
    },
    components: { ListView, UserCourseEdit }
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
