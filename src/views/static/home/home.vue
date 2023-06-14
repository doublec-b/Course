<template>
    <div class="big">
        <div class="header">
            课程信息
        </div>
        <div class="up">
            <div class="center">
                <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" mode="horizontal" :router="true">
                    <el-menu-item index="/home2/schoolManage2">校园信息</el-menu-item>
                    <el-menu-item index="/home2/departmentManage2">学院信息</el-menu-item>
                    <el-menu-item index="/home2/major2">专业信息</el-menu-item>
                    <el-menu-item index="/home2/courseManage2">课程信息</el-menu-item>
                    <el-menu-item index="/home2/userCourseManage2">用户课程信息</el-menu-item>
                </el-menu>
            </div>
        </div>

        <div class="down">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeIndex: '/home/schoolManage'
        }
    },
    methods: {
    },
}
</script>
<style  scoped>
.center{
    width: 800px;
    background-color:#6989BA ;
}
.el-menu {
    background-color:#6989BA ;
    padding-left: 80px;
}
.el-menu-item{
    letter-spacing: 2px;
    font-size: large;
}
.up {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    background-color:#6989BA ;
}

.down {
    width: 100%;
    height: 800%;
    overflow-y: auto;
}

.big {
    width: 100%;
    height: 100%;
    padding: 0px;
    color: #6989BA;
}
.header{
    height: 90px;
    line-height: 80px;
    text-align: center;
    font-size: xx-large;
    font-weight: 800;
    letter-spacing: 10px;
}
</style>
