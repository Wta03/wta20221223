<template>
    <div class="plq-all">
      <br>
        <el-page-header @back="goBack" content="评论区">
        </el-page-header>
        <br>
        <el-divider></el-divider>
        <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
发言
</el-button>

<el-drawer
  title="内容"
  :visible.sync="drawer"
  :with-header="false" style="padding:10vh;">
  <div style="padding:10vh">
    <el-input v-model="text" placeholder="请输入内容"></el-input>
    <br>
    <br>
    <el-button type="primary" plain @click="on()">提交</el-button>
  </div>
</el-drawer>
 <br>
        <el-divider></el-divider>
        <div v-for="(us,index) in dat" :key="index">
            <div class="plq-div">
                <i class="el-icon-user-solid" ></i>
                <span >{{us.name}}:</span>
                <el-divider direction="vertical"></el-divider>
                <br>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <p>{{us.text}}</p>
                <br>
                <div style="font-size:1.5vh;text-align:right;">{{us.time}}</div>
            </div>
            <br>
            <br>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
        data(){
           return{
                dat:[],
                drawer: false,
                tim:"",
                text:"",
           }
        },
        methods:{
          open() {
        this.$message({
          message: '发言成功',
          type: 'success'
        });
      },
          on(){
            this.getCurrentTime();
            
            this.addUser();
            this.$refs.navDrawer.doClose();
            this.open();
          },
          addUser() {
        axios.post('http://localhost:3000/api/Stu/addStu4',{name:this.$route.params.id,time:this.tim,text:this.text}
        , {}).then((response) => { console.log(response); })
      },
             goBack() {
        this.$router.push({name:'主页',params: {id:this.$route.params.id}}); 
      },
      showStu1(){
        axios.get('http://localhost:3000/api/Stu/showStu5',).then((response) => {
          this.dat=response.data;
        })
      },
      getCurrentTime() {
        //获取当前时间并打印
        var _this = this;
        let yy = new Date().getFullYear();
      let mm = new Date().getMonth()+1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
        let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
          let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
         this.tim= yy+'/'+mm+'/'+dd+' '+hh+':'+mf+':'+ss; 
    }
        },
        mounted(){
      this.showStu1();
        },
    
}
</script>
<style scoped>
.plq-all{
    position: absolute;
    top: 10vh;
    left: 10vw;
    width: 60vw;
    margin-left:10vw;
}
.plq-div{
    font-size:2.3vh;
    border: 1vh;
    background-color:white;
    padding:1vh;
    border-radius: 2vh;
}
p{
  font-size:2vh;
  display: inline-block;
}
</style>