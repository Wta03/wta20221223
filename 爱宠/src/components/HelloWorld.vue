<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>

     <h1>{{ msg }}</h1>
    <input v-model="nmp.user_name" placeholder="请输入姓名" autocomplete>
    <input v-model="nmp.user_password" placeholder="请输入姓名" autocomplete>
    
    <button v-on:click="addUser">提交</button>

    <p>这是查询按钮</p>
        <p>
          <button @click="addUser()">点击</button>
            <button @click="changeMsg">点击</button>
            <button @click="update1">点击</button>
             <button @click="showStu1">点击</button>
        </p>

    <router-view/>
    {{data}}
  </div>
</template>

<script>
import axios from 'axios';
export default{
    name: 'Hello',
    data() {
      return {
        data:[],
        msg: 'Welcome to Your Vue.js App',
        nmp:{
          user_name:"阿松大",user_password:"",
        }
      }
    },
    methods: {
      addUser() {
        axios.post('http://localhost:3000/api/Stu/addStu3',{user_name:"wta123321",user_text:"伟大",user_time:"2020-02-21",user_type:"阿松大",user_day:5,user_address:"阿萨",userA_byQQ:"315",userA_callnub:"32132323"}
        , {}).then((response) => { console.log(response); })
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
      changeMsg () {
        axios.post('http://localhost:3000/api/Stu/delStu1',{user_name:"wad"}).then((response) => {
           console.log(response);
        })
      },
      update1(){
          axios.post('http://localhost:3000/api/Stu/updateStu3',{user_result:"red",user_id:1}).then((response) => {
           console.log(response);
        })
      },
      showStu1(){
        axios.get('http://localhost:3000/api/Stu/showStu1',).then((response) => {
          this.data=response.data.length;
          this.$router.push('/Firstpage'); 
        })
      },
      zh(){
          if(changeMsg()){
              this.open2()
          }
      },
      
    },
}
</script>

<style>

</style>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {    
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
