<template>
<div class="all">
    <div class="top-box">
        <img  src='..\assets\图标.png'>
    </div>
    <div id="login-box">
        <h1>欢迎进入</h1>
        <form action="" id="form1" name="form1">
            <div class="input-box input-box1">
                <i>用户名 :</i>
                <input type="text" placeholder="请输入用户名"  v-model="name" form="form1" required="required">
            </div>
            <div class="input-box input-box2">
                <i>密 码 :</i>
                <input class="password" type="password" placeholder="请输入密码" v-model="pass1"  form="form1" required="required">
            </div>
            <div class="input-box input-box3">
                <i>确认密码:</i>
                <input class="password" type="password" placeholder="请输入密码" v-model="pass2"  form="form1" required="required">
            </div>
            <button @click='zc()' form="form1">注册</button>
        </form>
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
                pass1: "",
                pass2: "",
              name:"",
              b:0,
              pas:[],
              getuser:{
                user_name:"",
                user_password:""
              }
            }
        },
        methods:{
          addUser() {
            this.getuser.user_name=this.name;
            this.getuser.user_password=this.pass1;
        axios.post('http://localhost:3000/api/Stu/addStu1',this.getuser
        , {}).then((response) => { console.log(response); })
      },
            showStu1() {
                axios.post('http://localhost:3000/api/Stu/showStu1', { user_name: this.name, user_password: this.pass1 ,pav:'普通用户'}
                    , {}).then((response) => {
                        this.pas = response.data;
                        console.log(this.pas.length)
                        if (this.pas.length == 1) {
                            this.b = 0;
                        }
                        else {
                            this.b = 1;
                        }
                        if (this.b == 1) {   
                            this.open2();
                            this.addUser();
                            this.$router.push('/');
                        }
                        else {
                            this.open3()
                        }
                    })
            },

            zc() {
                if (this.pass1.length > 0 && this.pass2.length > 0) {
                    if (this.pass1.length >= 6 && this.pass1 == this.pass2) {
                        this.showStu1();
                    }
                    else {
                        this.open1()
                    }
                }
            },
            open1() {
        this.$alert('两次密码不一致或密码长度小于6位', '警告', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `输入错误`
            });
          }
        });
      },
      open2() {
        this.$alert('注册成功', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'success',
              message: `注册成功`
            });
          }
        });
      },
       open3() {
        this.$alert('用户名重复', '警告', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `用户名重复`
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
}
.top-box{
  height: 30vh;
  width: 100vw;
  background-image: linear-gradient(to bottom,rgb(137, 83, 45),wheat);
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
  top: 13vh;
  left: 4vw;
}
#login-box .input-box2{
  top: 19vh;
  left: 4vw;
}
#login-box .input-box3{
  top: 25vh;
  left: 4vw;
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
#login-box button:hover{
    background-color: rgb(242, 215, 164);
}
#login-box .input-box{
  color:saddlebrown;
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
  background-color: #ffffffff;
  width: 35vw;
  border:saddlebrown 0.7vh solid;
  color: saddlebrown;
  border-top-right-radius:4.5vh;
  border-bottom-right-radius:4.5vh;
  background-image: url("../assets/1.jpg");
  background-clip: content-box;
}.el-carousel__item:nth-last-child(3) {
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