<template>
<div class="all">
    <div class="top-box">
        <img  src='../assets/图标.png'>
    </div>
    <div id="login-box">
        <h1>欢迎进入</h1>
        <form action=""  id="form2" name="form2">
        <div class="input-box input-box1">
            <i>用户名:</i>
            <input type="text" placeholder="请输入用户名" v-model="name1" required="required" form="from2">
        </div>
        <div class="input-box input-box2">
            <i>密 码:</i>
            <input class="password" type="password" placeholder="请输入密码" v-model="pas1" required="required" form="from2" >
        </div>
        <button @click='showStu1()' form="from2" style="color: saddlebrown;background:wheat;text-decoration: none;">登录</button>
        </form>
        <div class="register">
          <router-link to="/about" style="color: saddlebrown;">注册</router-link>
        </div>
    </div>
  <div class="block images">
    <el-carousel trigger="click" height="48.6vh" style="border-top-right-radius:4.5vh;border-bottom-right-radius:4.5vh;border:0;">
      <el-carousel-item v-for="item in 4" :key="item">
      </el-carousel-item>
    </el-carousel>
  </div>
</div>
</template>
<script>
import axios from 'axios';
      export default {
      data(){
       return{
           name1: "",
           pas1: "",
         c:0,
         b:0,
         pas:[],
       }
      },
      methods:{
        showStu1(){
              axios.post('http://localhost:3000/api/Stu/showStu1', { user_name:this.name1,user_password: this.pas1}
                  , {}).then((response) => {
          this.pas=response.data;
          console.log(this.pas.length)
                      if (this.pas.length == 1 && this.pas[0].user_pav == '管理员') {
                          this.$router.push({ name: 'gly', params: { id:this.pas[0].user_name } });
                          this.open3();
                      } else if (this.pas.length == 1 && this.pas.user_pav!="管理员"){
                          this.$router.push({ name: '主页', params: { id: this.pas[0].user_name } });
                          this.open3();
                      }
                      else {
                          this.open4();
                      }
        })
      },
      open3() {
        this.$alert('登录成功', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'success',
              message: `登录成功`
            });
          }
        });
      },
      open4() {
        this.$alert('登录失败', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `登录失败`
            });
          }
        });
      }, 
    },
    
     
}
</script>
<style scoped>
*{
    font-family: cursive;
    background: white;

}
.all{
    height: 100vh;
    background: wheat;
    width: 100vw;
}
.top-box{
  height: 30vh;
  width: 100vw;
  background-image: linear-gradient(to bottom,#89532d,hsl(39, 77%, 83%));
  opacity: 1;
}
.top-box img{
    display: inline-block;
    border-radius:100%;
    height: 15vh;
    opacity: 0.85;
    background: wheat;
}
#login-box{
  position: absolute;
  background-color: #ffffffff;
  top: 15vh;
  margin:10vh;
  left: 10vw;
  width: 30vw;
  height: 50vh;
  border:saddlebrown 0.7vh solid;
  color: saddlebrown;
  border-top-left-radius:4.5vh;
  border-bottom-left-radius:4.5vh;
}


#login-box h1{
    display: inline-block;
    position: absolute;
    top: 4.5vh;
    left: 10vw;
    padding-right: 10vw;
    font-size: 4.5vh;
    background: white;

}
#login-box .input-box1{
  top: 18vh;
  left: 7vw;
}
#login-box .input-box2{
  top: 25vh;
  left: 7vw;
}

#login-box .input-box{
  position: absolute;
}

#login-box .input-box input{
  border: none;
  border-bottom: saddlebrown 0.1vh solid;
  padding: 0.5vw 0.5vh;
  outline: none;
}


#login-box button{
  position: absolute;
  margin-top: 3vh;
  width: 8vw;
  height: 5vh;
  border-radius: 2vh;
  outline: none;
  border: 0.2vh saddlebrown solid;
  background-color: wheat;
  color: saddlebrown;
}

button{
  position: absolute;
  top: 30vh;
  left: 10vw;
  cursor:pointer;
}


.register{
  position: absolute;
  top: 40vh;
  left: 13vw;
  font-size: 1vh;
}
.images{
  position: absolute;
  top: 25vh;
  margin-left:40vw;
  height: 50vh;
  width: 35vw;
  border:saddlebrown 0.7vh solid;
  border-top-right-radius:4.5vh;
  border-bottom-right-radius:4.5vh;
  background: #89532d;
}

  .el-carousel__item:nth-last-child(3) {
     background-image: url("../assets/1.jpg");
      background-clip: content-box;
      background-size: cover;
  }
  
  .el-carousel__item:nth-last-child(4) {
     background-image: url("../assets/2.jpg");
      background-clip: content-box;
    background-size: cover;
  }
  .el-carousel__item:nth-last-child(1) {
     background-image: url("../assets/3.jpg");
      background-clip: content-box;
    background-size: cover;
  }
  .el-carousel__item:nth-last-child(2) {
     background-image: url("../assets/4.jpg");
      background-clip: content-box;
    background-size: cover;
}
</style>