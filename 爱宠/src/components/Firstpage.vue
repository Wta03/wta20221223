<template>
<div class="all">
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="c1()">个人中心</el-dropdown-item>
          <el-dropdown-item  @click.native="c2()">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>{{id1}}</span>
    </el-header>
    <el-main>
    </el-main>
  </el-container>
<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">展开</el-radio-button>
  <el-radio-button :label="true">收起</el-radio-button>
</el-radio-group>
<el-menu router :default-active="$route.path" class="el-menu-vertical-demo cleafix" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-menu"></i>
      <span slot="title">宠物中心</span>
    </template>
    <el-menu-item-group>
      <span slot="title">宠物领养</span>
      <el-menu-item @click="on1()" index="">我要领养</el-menu-item>
      <el-menu-item  @click="on2()" index="">领养管理</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="宠物寄养">
      <el-menu-item  @click="on3()" index="">我要寄养</el-menu-item>
      <el-menu-item  @click="on4()" index="">寄养管理</el-menu-item>
    </el-menu-item-group>
    <el-submenu index="1-4">
      <span slot="title">爱助活动</span>
      <el-menu-item  @click="on5()" index="">捐献爱心物品</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item  @click="on6()" index="">
      <i class="el-icon-location"></i>
    <span slot="title">线下活动</span>
  </el-menu-item>
  <el-submenu index="2">
    <template slot="title">
      <i class="el-icon-menu"></i>
      

    </template>
  <el-menu-item-group>
    <span slot="title">流浪救助</span>
      <el-menu-item @click="on7()" index="">爱心救助</el-menu-item>
      <el-menu-item  @click="on71()" index="">爱心求救</el-menu-item>
  </el-menu-item-group>
   </el-submenu>
  <el-menu-item  @click="on8()" index="">
    <i class="el-icon-s-comment"></i>
    <span slot="title">评论区</span>
  </el-menu-item>
</el-menu>
<router-view></router-view>
<div></div>
</div>

</template>


<script>
  export default {
    data() {
      return {
        id1:this.$route.params.id,
        num:"",
        isCollapse: true
      };
    },
    methods: {
      on1(){
        this.$router.push({name:'我要领养',params: {id:this.id1}});
      },
      on2(){
        this.$router.push({name:'领养管理',params: {id:this.id1}});
      },
      on3(){
        this.$router.push({name:'我要寄养',params: {id:this.id1}});
      },
      on4(){
        this.$router.push({name:'寄养管理',params: {id:this.id1}});
      },
      on5(){
        this.$router.push({name:'捐献爱心物品',params: {id:this.id1}});
      },
      on6(){
        this.$router.push({name:'线下活动',params: {id:this.id1}});
      },
      on7(){
        this.$router.push({name:'爱心救助',params: {id:this.id1}});
      },
      on71(){
        this.$router.push({name:'爱心求救',params: {id:this.id1}});
      },
      on8(){
        this.$router.push({name:'评论区',params: {id:this.id1}});
      },
      c1(){
        this.$router.push({name:'个人中心',params: {id:this.id1}});
      },
      c2(){
        this.$router.push('/'); 
        this.open1();
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      open1() {
        this.$alert('登出成功', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'success',
              message: `登出成功`
            });
          }
        });
      },
    },
    beforeCreate() {
        document.querySelector('body').setAttribute('style', 'background-color:rgb(245, 242, 242)');
    },
    
  }
</script>
<style>
  
 .el-header {
    background-color: rgb(153, 144, 144);
    color: white;
    line-height: 60px;
  }
  
  .el-aside {
    color: rgb(255, 255, 255);
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    border-radius: 20px;
  }
.all{
    min-height: 150vh;
    background: rgb(245, 242, 242);
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-last-child(3) {
     background-image: url("../assets/1.jpg");
      background-clip: content-box;
  }
  
  .el-carousel__item:nth-last-child(4) {
     background-image: url("../assets/2.jpg");
      background-clip: content-box;
  }
  .el-carousel__item:nth-last-child(1) {
     background-image: url("../assets/3.jpg");
      background-clip: content-box;
  }
  .el-carousel__item:nth-last-child(2) {
     background-image: url("../assets/4.jpg");
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
  .cleafix:after{
			content:'.';
			display: block;
			clear: both;
			overflow: hidden;
			height: 0;
		}

</style>