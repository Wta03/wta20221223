<template>
    <div class="jygl-all">
        <br>
        <el-page-header @back="goBack" content="寄养管理">
</el-page-header>
<br>
<el-divider></el-divider>
<br>
        <el-descriptions class="margin-top" title="个人信息" :column="3" :size="size" border>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        账号
      </template>
      {{us.user_name}}
    </el-descriptions-item>
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
  <h6 > <b> 寄养记录</b></h6>
<el-button type="danger" circle>待审核</el-button>
<br>
<br>
<el-button type="warning"  circle>待领养</el-button>
<br>
<br>
<el-button type="primary"  circle>已领养</el-button>
<br>
<br>
<el-button type="success" circle>已完成</el-button>
    <div class="block jygl-sjc">
        
  <el-timeline>
   <div v-for="(us,index) in u" :key="index">
      <el-timeline-item :color="us.user_result" :timestamp="us.user_time1" placement="top">
      <el-card>
        <el-collapse v-model="activeNames" @change="handleChange"> 
  <el-collapse-item title="寄养信息" name="1">
    <div style="font-size:16px"><span><b>领养人账号:</b></span><span>{{us.user_other}}</span></div>
    <div style="font-size:16px"><span><b>领养时间:</b></span><span>{{us.user_time2}}</span></div>
    <div style="font-size:16px"><span><b>领养人手机号:</b></span><span>{{us.userB_callnub}}</span></div>
    <div style="font-size:16px"><span ><b>领养人QQ:</b></span>{{us.userB_byQQ}}</div>
    <el-divider></el-divider>
    <div style="font-size:16px"><span ><b>宠物类型:</b></span>{{us.user_type}}</div>
    <div style="font-size:16px"><span ><b>寄养天数:</b></span>{{us.user_day}}</div>
    <div style="font-size:16px"><span ><b>寄养开始时间:</b></span>{{us.user_time}}</div>
    <el-divider></el-divider>
    <div style="font-size:16px">
        <span><b>宠物图片</b></span>
        <br><img v-bind:src="`${us.img}`" style="border-radius: 10px;height: 200px;width:auto;">
    </div>
    <div style="font-size:16px"><span ><b>寄养原因:</b></span>{{us.user_text}}</div>
    <el-divider></el-divider>
    <el-button @click="shanc(us.user_id)">删除</el-button>
    <el-button type="primary" @click="wanc(us.user_result,us.user_id)">完成</el-button>
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
        ut:"",
        u:[],
        usn:[],
        pas:[],
        us:{
          user_name:this.$route.params.id, 
          user_callnub:"",
          user_address:"",
          user_byQQ:"",
          user_city:"", 
          name:'',
        },
      };
    },

    methods: {
        open1() {
            this.$alert('该寄养已完成', '提示', {
                confirmButtonText: '确定',
                callback: action => {
                    this.$message({
                        type: 'info',
                        message: `该寄养已完成,无需再次完成`
                    });
                }
            });
        },
        open2() {
            this.$alert('该寄养未被领养,不可完成', '提示', {
                confirmButtonText: '确定',
                callback: action => {
                    this.$message({
                        type: 'info',
                        message: `该寄养未被领养,不可完成`
                    });
                }
            });
        },
        shanc(a){
            axios.post('http://localhost:3000/api/Stu/delStu2', { user_id:a }).then((response) => {
                console.log(response);
                alert("删除成功")
                this.$router.go(0)
            })
        },
        wanc(a,b){
            if(a == 'blue'){
                axios.post('http://localhost:3000/api/Stu/updateStu3', { user_result: "green", user_id: b }).then((response) => {
                    console.log(response);
                    alert("成功完成寄养")
                    this.$router.go(0);
                    
                })
            }else if(a == 'green'){
                this.open1();
            }else{
                this.open2();
            }
        },
      goBack() {
        console.log('go back');
        this.$router.push({name:'主页',params: {id:this.$route.params.id}}); 
      },
        showStu1() {
            axios.post('http://localhost:3000/api/Stu/showStu2', { user_name: this.$route.params.id }, {}).then((response) => {
                this.pas = response.data;
                this.us.user_callnub = this.pas[0].user_callnub;
                this.us.user_address = this.pas[0].user_address;
                this.us.user_byQQ = this.pas[0].user_byQQ;
                this.us.user_city = this.pas[0].user_city;
                this.us.name = this.pas[0].name;

            })
        },
        showStu2() {
            axios.post('http://localhost:3000/api/Stu/showStu3', { user_name: this.$route.params.id }, {}).then((response) => {
                this.u = response.data;
                for (let a = 0; a < this.u.length; a++) {
                    if(this.u[a].user_other==null){
                        this.u[a].user_other='无人领养'
                        this.u[a].userB_callnub = '无人领养'
                        this.u[a].userB_byQQ= '无人领养'
                        this.u[a].user_time2 = '无人领养'
                    }
                    var d1 = new Date(this.u[a].user_time);
                    this.u[a].user_time = d1.getFullYear() + '-' + (d1.getMonth() + 1) + '-' + d1.getDate();
                    var d = new Date(this.u[a].user_time1);
                    this.u[a].user_time1 = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes();
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
.jygl-all{
    position: absolute;
    top: 10vh;
    left: 10vw;
    width: 60vw;
    margin-left:10vw;
    background: write;
    
}
.jygl-sjc{
    position: absolute;
    top: 50vh;
    left: 0vw;
    width: 30vw;
    margin-left:10vw;
   
}
</style>