<template>

  <el-row class="cards">

  </div>
    <el-col :span=12 v-for="(project, index) in userprojects" :offset="index%2 > 0 ? 3 : 2">
      <el-card :body-style="{ padding: '0px' }">
      <img v-bind:src="project.image" class="image">
      <div style="padding: 14px;">
        <span>{{project.id}}</span>
        <div class="bottom clearfix">
          <time class="time">{{project.updated_at}}</time>
          <el-button type="text" class="button">Enter</el-button>
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
      userprojects:[
        {
          id:1,
          project_id:1,
          created_at:'2017-09-22',
          updated_at:'2017-09-24',
        },
        {
          id:2,
          project_id:3,
          created_at:'2017-09-22',
          updated_at:'2017-09-24',
        },
      ],

    };
  }
}
</script>
