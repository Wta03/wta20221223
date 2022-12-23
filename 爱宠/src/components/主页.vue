<template>
    <div >
        <div class="firstpage-zmd">
  <el-carousel :interval="2000" type="card" height="35vh">
    <el-carousel-item v-for="item in 4" :key="item">
    </el-carousel-item>
  </el-carousel>
    <br>
<el-divider></el-divider>
<br>
<h6><b>功能展示</b></h6>
</div>
<div class="firstpage-button">
    <br>
    <br>
  <i class="el-icon-menu" style="font-size:3.5vh;"></i>
   <el-link type="info" style="font-size:2vh;margin-left:5vw"  @click="a1()">我要寄养</el-link>
    <el-link type="info" style="font-size:2vh;margin-left:5vw" @click="a2()">寄养管理</el-link>
     <el-link type="info" style="font-size:2vh;margin-left:5vw" @click="a3()">我要领养</el-link>
      <el-link type="info" style="font-size:2vh;margin-left:5vw" @click="a4()">领养管理</el-link>
      <br>
      <br>
      <br>
      <br>
      <i class="el-icon-location" style="font-size:3.5vh;margin-left:0vw"></i>
   <el-link type="info" style="font-size:2vh;margin-left:5vw" @click="a5()">线下活动</el-link>

   <i class="el-icon-s-custom" style="font-size:3.5vh;margin-left:10vw"></i>
   <el-link type="info" style="font-size:2vh;margin-left:6vw" @click="a6()">个人中心</el-link>
      <br>
        <br>
      <br>
      <br>
      <i class="el-icon-s-flag" style="font-size:3.5vh;margin-left:0vw;"></i>
   <el-link type="info" style="font-size:2vh;margin-left:5vw" @click="a7()">爱心求救</el-link>

   <i class="el-icon-s-goods" style="font-size:3.5vh;margin-left:9vw;"></i>  
   <el-link type="info" style="font-size:2vh;margin-left:6vw" @click="a8()">爱助活动</el-link>
        <br>
      <br>
      <br>
      <br>  
      <i class="el-icon-s-comment" style="font-size:3.5vh;margin-left:0vw;"></i>
   <el-link type="info" style="font-size:2vh;margin-left:5vw" @click="a9()">评论区</el-link>
        <br>
      <br>
      <br>  
</div>

    </div>
</template>
<script>
  export default {
    data() {
      return {
        t1:"user1",
        isCollapse: true
      };
    },
    methods: {
      a1(){
        this.$router.push({name:'我要寄养',params: {id:this.$route.params.id}});
      },
      a2(){
        this.$router.push({name:'寄养管理',params: {id:this.$route.params.id}});
      },
      a3(){
        this.$router.push({name:'我要领养',params: {id:this.$route.params.id}}); 
      },
      a4(){
       this.$router.push({name:'领养管理',params: {id:this.$route.params.id}});
      },
      a5(){
         this.$router.push({name:'线下活动',params: {id:this.$route.params.id}});
      },
      a6(){
        this.$router.push({name:'个人中心',params: {id:this.$route.params.id}});
      },
      a7(){
       this.$router.push({name:'爱心求救',params: {id:this.$route.params.id}});
      },
      a8(){
       this.$router.push({name:'爱助活动',params: {id:this.$route.params.id}});
      },
      a9(){
       this.$router.push({name:'评论区',params: {id:this.$route.params.id}});
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    beforeCreate() {
        document.querySelector('body').setAttribute('style', 'background-color:rgb(245, 242, 242)');
    },
  }
</script>
<style>
.el-carousel__item:nth-last-child(3) {
     background-image: url("../assets/5.jpg");
      background-clip: content-box;
      background-size: cover;
  }
  
  .el-carousel__item:nth-last-child(4) {
     background-image: url("../assets/6.jpg");
      background-clip: content-box;
    background-size: cover;
    }
  .el-carousel__item:nth-last-child(1) {
     background-image: url("../assets/7.jpg");
      background-clip: content-box;
    background-size: cover;
  }
  .el-carousel__item:nth-last-child(2) {
     background-image: url("../assets/8.jpg");
    background-size: cover;
      background-clip: content-box;
  }
  .firstpage-zmd{
    position: absolute;
    top: 10vh;
    left: 10vw;
    width: 60vw;
    margin-left:10vw;
  }
  .firstpage-button{
    position: absolute;
    top: 70vh;
    left: 20vw;
    width: 40vw;
    margin-left:10vw;
    
  }
  .firstpage-butt{
    display: inline-block;
    height: 10vh;
    width: 10vh;
    margin: 0vw 10vw 10vw 10vw;
  }
</style>