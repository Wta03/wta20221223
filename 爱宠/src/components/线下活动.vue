<template>
    <div class="xxhd-all">
      <br>
        <el-page-header @back="goBack" content="线下活动">
        </el-page-header>
        <br>
        <el-divider></el-divider>
        <div v-for="(us,index) in dat" :key="index">
            <div>
                <el-card class="box-card">
                <div slot="header" class="clearfix">
                <span>{{us.address}}</span>
                </div>
                <div>
                    <span> 联系方式: {{us.callnub}}</span>
                   <br>
                   <br>
                   <span> 开始时间: {{us.time1}}</span>
                   <br>
                   <br>
                   <span> 结束时间: {{us.time2}}</span>
                   <br>
                   <br>
                   <span> 活动需求: {{us.need}}</span>
                   <br>
                   <br>
                   <span> 活动目的: {{us.text}}</span>
                   <br>
                   <br>
                </div>
                </el-card>
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
           }
        },
        methods:{
             goBack() {
        this.$router.push({name:'主页',params: {id:this.$route.params.id}}); 
      },
      showStu1(){
        axios.get('http://localhost:3000/api/Stu/showStu4',).then((response) => {
          this.dat=response.data;
            for (let a = 0; a < this.dat.length; a++) {
                var d1 = new Date(this.dat[a].time1);
                this.dat[a].time1 = d1.getFullYear() + '-' + (d1.getMonth() + 1) + '-' + d1.getDate() + ' ' + d1.getHours() + ':' + d1.getMinutes();
                var d = new Date(this.dat[a].time2);
                this.dat[a].time2 = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes();
            } 
        })
      },
        },
        mounted(){
      this.showStu1();
        }
}
</script>
<style scoped>
.xxhd-all{
    position: absolute;
    top: 10vh;
    left: 10vw;
    width: 60vw;
    margin-left:10vw;
}
</style>
