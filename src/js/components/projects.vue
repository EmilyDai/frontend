<template>

  <el-row class="cards">

  </div>
    <el-col :span=8 v-for="(project, index) in projects" :offset="index%2 > 0 ? 3 : 2">
      <el-card :body-style="{ padding: '0px' }">
      <a href="javascript:;" @click="learnProjectDetail(project.id)">
      <img v-bind:src="project.image" class="image">
      </a>
      <div style="padding: 14px;">
        <span>{{project.name}}</span>
        <div class="bottom clearfix">
          <time class="time">{{project.notice}}</time>
          <el-button type="text" class="button" @click="joinProject(project.id)">現在加入</el-button>
        </div>
      </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style>
  .cards {
    margin-top:30px;
    margin-left:30px
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
</style>

<script>
export default {
  data() {
    return {
      curTag:0,
      projects:[
        {
          id:1,
          name:"InMyLife",
          notice:"記錄自己的一天",
          tag_id:0,
          image:require("./../../assets/image_project1.jpg")
        },
        {
          id:2,
          name:"日本語練習",
          notice:"每日一分鐘口語練習",
          tag:1,
          image:require("./../../assets/image_project2.jpg")
        },
        {
          id:3,
          name:"KeepFit",
          notice:"運動打卡，遇見更好的自己",
          tag:2,
          image:require("./../../assets/image_project3.jpg")
        }
      ],
      tags:[
        {
          id:1,
          name:"語言"
        },
        {
          id:2,
          name:"日記"
        },
        {
          id:3,
          name:"運動"
        }
      ]
    };
  },
  methods: {
    joinProject(project_id){
      var self = this;
      console.log(project_id);
      this.$http.post('/userprojects/', {
            'project_id': project_id,
        }).then(function (response) {
              self.$message('成功加入了，請努力打卡喲！')
        }).catch(e => {
              self.$message('啊嗚，好像出錯了')
        })
    },
    learnProjectDetail(project_id){
      this.$router.push({
        'path': '/projects/'+project_id.toString(),
      })
    }
  }
}
</script>
