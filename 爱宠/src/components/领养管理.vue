<template>
    <div class="lygl-all">
        <br>
        <el-page-header @back="goBack" content="领养管理">
</el-page-header>
<br>
<el-divider></el-divider>
<br>
          <el-descriptions class="margin-top" title="个人信息" :column="3" :size="size" border>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        用户名
      </template>
      {{us.name}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-mobile-phone"></i>
        手机号
      </template>
       {{us.user_callnub}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-location-outline"></i>
        居住地
      </template>
      {{us.user_address}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-tickets"></i>
        QQ
      </template>
      {{us.user_byQQ}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-office-building"></i>
      详细地址
      </template>
      {{us.user_city}}
    </el-descriptions-item>
  </el-descriptions>
  <el-divider></el-divider>
  <h6 > <b> 领养记录</b></h6>
<el-button type="primary" circle>已领养</el-button>
<el-button type="success" circle>已完成</el-button>
<br>
<br>
    <div class="block jygl-sjc">
       
  <el-timeline>
   <div v-for="(us,index) in u" :key="index">
      <el-timeline-item :color="us.user_result" :timestamp="us.user_time2" placement="top">
      <el-card>
        <el-collapse v-model="activeNames" @change="handleChange"> 
  <el-collapse-item title="领养信息" name="1" >
    <el-divider></el-divider>
    <div style="font-size:16px"><span><b>寄养人账号:</b></span>{{us.user_name}}</div>
    <div style="font-size:16px"><span><b>寄养人手机号:</b></span>{{us.userA_callnub}}</div>
    <div style="font-size:16px"><span><b>寄养人QQ:</b></span>{{us.userA_byQQ}}</div>
    <div style="font-size:16px"><span><b>寄养人居住地</b></span>{{us.user_address}}</div>
    <el-divider></el-divider>
    <div style="font-size:16px"><span><b>宠物类型:</b></span>{{us.user_type}}</div>
    <div style="font-size:16px"><span><b>寄养开始时间:</b></span>{{us.user_time}}</div>
    <div style="font-size:16px"><span><b>寄养发布时间:</b></span>{{us.user_time1}}</div>
    <div style="font-size:16px"><span><b>寄养天数:</b></span>{{us.user_day}}</div>
    <el-divider style="font-size:16px"></el-divider>
    <div style="font-size:16px">
        <span><b>宠物图片</b></span>
        <br><img v-bind:src="`${us.img}`" style="border-radius: 10px;height: 200px;width:auto;">
    </div>
    <div style="font-size:16px"><span><b>寄养原因:</b></span>{{us.user_text}}</div>
    <el-divider></el-divider>
    <el-button @click="qvxiao(us.user_id)">取消领养</el-button>
  </el-collapse-item>
</el-collapse>
      </el-card>
    </el-timeline-item>
   </div>
  </el-timeline>
</div>
    </div>
</template>
<script>
 import axios from 'axios';

  export default {
    data() {
      return {
        size:'',
        ut:"",
        u:[],
        usn:[],
        pas:[],
        us:{
            name:'',
          user_name:this.$route.params.id, 
          user_password:"",
          user_callnub:"",
          user_address:"",
          user_byQQ:"",
          user_city:"", 
        },
      };
    },

    methods: {
      goBack() {
        console.log('go back');
        this.$router.push({name:'主页',params: {id:this.$route.params.id}}); 
      },
      qvxiao(a){
          axios.post('http://localhost:3000/api/Stu/updateStu3', { user_result: "yellow", user_id: a }).then((response) => {
              console.log(response);
          })
          axios.post('http://localhost:3000/api/Stu/updateStu4', { user_other: null, user_id: a }).then((response) => {
              console.log(response);
          })
          axios.post('http://localhost:3000/api/Stu/updateStu5', { userB_byQQ: null, user_id: a }).then((response) => {
              console.log(response);
          })
          axios.post('http://localhost:3000/api/Stu/updateStu6', { userB_callnub: null, user_id: a }).then((response) => {
              console.log(response);
          })
          axios.post('http://localhost:3000/api/Stu/updateStu7', { user_time2:null, user_id: a }).then((response) => {
              console.log(response);
          })
          alert('取消成功')
          this.$router.go(0);
      },
        showStu1() {
            axios.post('http://localhost:3000/api/Stu/showStu2', { user_name: this.$route.params.id }, {}).then((response) => {
                this.pas = response.data;
                this.us.user_password = this.pas[0].user_password;
                this.us.user_callnub = this.pas[0].user_callnub;
                this.us.user_address = this.pas[0].user_address;
                this.us.user_byQQ = this.pas[0].user_byQQ;
                this.us.user_city = this.pas[0].user_city;
                this.us.name = this.pas[0].name;
                
            })
        },
      showStu2(){
          axios.post('http://localhost:3000/api/Stu/showStu3_2', { user_other: this.$route.params.id },{}).then((response) => {
          this.u=response.data;
              for (let a = 0; a < this.u.length; a++) {
                  var d1 = new Date(this.u[a].user_time);
                  this.u[a].user_time = d1.getFullYear() + '-' + (d1.getMonth() + 1) + '-' + d1.getDate();
                  var d = new Date(this.u[a].user_time1);
                  this.u[a].user_time1 = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes();
                  var d2 = new Date(this.u[a].user_time2);
                  this.u[a].user_time2 = d2.getFullYear() + '-' + (d2.getMonth() + 1) + '-' + d2.getDate() + ' ' + d2.getHours() + ':' + d2.getMinutes();
              } 
        })
      },
    },
    mounted(){
          this.showStu1();
          this.showStu2();
        }
  }
</script>
<style scoped>
.lygl-all{
    position: absolute;
    top: 10vh;
    left: 10vw;
    width: 60vw;
    margin-left:10vw;
}
.lygl-sjc{
    position: absolute;
    top: 50vh;
    left: 0vw;
    width: 30vw;
    margin-left:10vw;
}
</style>