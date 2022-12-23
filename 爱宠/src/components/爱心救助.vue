<template>
    <div class="axjz-all">
      <br>
        <el-page-header @back="goBack" content="爱心救助">
        </el-page-header>
        <br>
    <br>
        <div class="axjz-kj">
        <div v-for="(us, index) in u" :key="index">
            <div id="flexx">
                <div style="">
                    <img v-bind:src="`${us.img}`" style="border-radius: 10px;height:18vh;width:auto;">
                </div>
                <div class="ff">
                    <div style="font-size:16px"><span><b>地址:</b></span>{{ us.user_address }}</div>
                    <div style="font-size:16px"><span><b>流浪动物:</b></span>{{ us.user_type }}</div>
                    <div style="font-size:16px"><span><b>发表日期:</b></span>{{ us.user_time }}</div>
                    <div style="font-size:16px"><span><b>流浪动物发现日期:</b></span>{{ us.user_time1 }}</div>
                    <div style="font-size:16px"><span><b>描述信息:</b></span>{{ us.user_text }}</div>
                    <el-button style="padding: 10px;" type="primary" @click="cl(us.user_id)">领养</el-button>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
  export default {
    data() {
      return {
        activeName: '1',
        usn:[],
        u:[],
        pas:[],
        ut:{
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
        showStu1() {
            axios.post('http://localhost:3000/api/Stu/showStu2', { user_name: this.$route.params.id }, {}).then((response) => {
                this.pas = response.data;
                this.ut.user_callnub = this.pas[0].user_callnub;
                this.ut.user_address = this.pas[0].user_address;
                this.ut.user_byQQ = this.pas[0].user_byQQ;
                this.ut.user_city = this.pas[0].user_city;
                this.ut.name = this.pas[0].name;
            })
        },
      open1() {
        this.$alert('领养成功', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'success',
              message: `领养成功`
            });
          }
        });   
      },
      goBack() {
        this.$router.push({name:'主页',params: {id:this.$route.params.id}}); 
      },
        showStu2() {
            axios.post('http://localhost:3000/api/Stu/showStu3_3', { user_result:"yellow",user_day:0 }, {}).then((response) => {
                this.u = response.data;
                for (let a = 0; a < this.u.length; a++) {
                    var d1 = new Date(this.u[a].user_time);
                    this.u[a].user_time = d1.getFullYear() + '-' + (d1.getMonth() + 1) + '-' + d1.getDate();
                    var d = new Date(this.u[a].user_time1);
                    this.u[a].user_time1 = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes();
                }
            })
        },
        cl(a) {
            axios.post('http://localhost:3000/api/Stu/updateStu3', { user_result: "blue", user_id: a }).then((response) => {
                console.log(response);
            })
            axios.post('http://localhost:3000/api/Stu/updateStu4', { user_other: this.$route.params.id, user_id: a }).then((response) => {
                console.log(response);
            })
            axios.post('http://localhost:3000/api/Stu/updateStu5', { userB_byQQ: this.ut.user_byQQ, user_id: a }).then((response) => {
                console.log(response);
            })
            axios.post('http://localhost:3000/api/Stu/updateStu6', { userB_callnub: this.ut.user_callnub, user_id: a }).then((response) => {
                console.log(response);
            })
            axios.post('http://localhost:3000/api/Stu/updateStu7', { user_time2: getFormatDate(), user_id: a }).then((response) => {
                console.log(response);
            })
            alert('领养成功')
            this.$router.go(0);
        },
    },
    mounted(){
      this.showStu1();
          this.showStu2();
        }
  }
</script>
<style scoped>
.el-carousel__item:nth-last-child(3) {
     background-image: url("../assets/9.jpg");
      background-clip: content-box;
      background-size: cover;
  }
  
  .el-carousel__item:nth-last-child(4) {
     background-image: url("../assets/10.jpg");
      background-clip: content-box;
    background-size: cover;
  }
  .el-carousel__item:nth-last-child(1) {
     background-image: url("../assets/11.jpg");
      background-clip: content-box;
    background-size: cover;
  }
  .el-carousel__item:nth-last-child(2) {
     background-image: url("../assets/12.jpg");
      background-clip: content-box;
    background-size: cover;
  }
.axjz-all{
    position: absolute;
    top: 10vh;
    left: 10vw;
    width: 60vw;
    margin-left:10vw;
}
.axjz-kj{
    position: absolute;
    top: 20vh;
    left: -5vw;
    width: 50vw;
    margin-left:10vw;
}
#flexx {
    width: 50vw;
    height: 20vh;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    background-color: rgb(218, 218, 218);
    border-radius: 20px;
    padding: 0px 20px;
    margin: 10px;
    border: 3px solid rgb(31, 30, 30);
}

.ff {
    margin: 10px;
    padding: 0px 20px;
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
}
</style>