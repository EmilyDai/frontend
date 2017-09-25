<template>

    <div class="navbar">


        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-row :gutter="20" type="flex" align="middle" justify="space-between">
          <el-col :span="4">
            <a href="#" style="float: right;" class="demo-typo-box typo-Microsoft" @click="showContent('/index')">小打卡</a>
          </el-col>

        <el-col :span="12">
          <el-menu-item index="1" @click="showContent('/projects')">小組</el-menu-item>
          <el-submenu index="2">
          <template slot="title">我的</template>
          <el-menu-item index="2-1" @click="showContent('/userprojects')">我的小組</el-menu-item>
          <el-menu-item index="2-2">我的記錄</el-menu-item>
          <el-menu-item index="2-3">我的資料</el-menu-item>
          </el-submenu>
        </el-col>
        <el-col :span="8">
        <el-menu-item index="3"  style="float: right;">
          <el-button class="fr mr30 mt15" type="primary" size="small" @click="loginOut">退出登錄</el-button>
        </el-menu-item>
        </el-col>

        </el-row>
        </el-menu>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                name: 'navbar'
            }
        },
        methods: {
            loginOut(){
            },
            showContent(url){
            console.log(url);
            this.$router.push({
              'path': url,
            })
        },
        },
        mounted(){

        }
    }
</script>
<style lang="scss" scoped>
    .navbar {
        width: 100%;
        height: 60px;
    }
</style>
