<template>
    <div class="xxhd-all">
      <br>
        <el-page-header @back="goBack" content="线下活动管理">
        </el-page-header>
        <br>
        <el-divider></el-divider>
        <div style="margin-left:25vw">
  <el-tooltip class="item" effect="dark" content="<<添加活动>>" placement="bottom">
    <el-button type="text" @click="dialog = true" style="font-size:2.5vh">添加活动</el-button>
  </el-tooltip>
    <el-drawer
  title="活动添加"
  :before-close="handleClose"
  :visible.sync="dialog"
  direction="ltr"
  custom-class="demo-drawer"
  ref="drawer"
  >
  <div class="demo-drawer__content">
    <el-form :model="form">
      <div style="padding:5vh">
    <br>
          <span>联系方式:</span>
          <br>
          <el-input v-model="mn.callnub" placeholder="请输入内容"></el-input>
          <br>
          <br>
          <span class="demonstration">开始时间:</span>
    <br>
    <el-date-picker
      v-model="mn.time1"
      type="datetime"
      value-format="yyyy-MM-dd HH:DD:MM"
      placeholder="选择日期时间">
    </el-date-picker>
    <br>
    <span class="demonstration">结束时间:</span>
    <br>
    <el-date-picker
      v-model="mn.time2"
      value-format="yyyy-MM-dd HH:DD:MM"
      type="datetime"
      placeholder="选择日期时间">
    </el-date-picker>
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
            <br>
      <span>活动需求:</span>
      <el-input
  type="textarea"
  autosize
  
  placeholder="请输入内容"
  v-model="mn.need">
</el-input>
<span>活动目的:</span>
      <el-input
  type="textarea"
  autosize
  placeholder="请输入内容"
  v-model="mn.text">
</el-input>
<span>活动地点:</span>
      <el-input
  type="textarea"
  autosize
  placeholder="请输入内容"
  v-model="mn.address">
</el-input>
      </div>
    </el-form>
    <div class="demo-drawer__footer"  style="padding:5vh">
      <el-button @click="cancelForm">取 消</el-button>
      <el-button type="primary" @click="addUser();" :loading="loading">{{ loading ? '提交中 ...' : '确 定' }}</el-button>
    </div>
  </div>
</el-drawer>

</div>
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
                dialog: false,
      loading: false,
        mn:{
            text:"",
            callnub:"",
            time1:"",
            time2:"",
            need:"",
            address:"",
        },
      formLabelWidth: '80px',
      timer: null,
        value:""
           }
        },
        methods:{

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
        addUser() {
        axios.post('http://localhost:3000/api/Stu/addStu5',{name:this.$route.params.id,text:this.mn.text,time1:this.mn.time1,time2:this.mn.time2,address:this.mn.address,callnub:this.mn.callnub,need:this.mn.need,}
        , {}).then((response) => { console.log(response); });
        this.$refs.drawer.closeDrawer();
      },
      goBack() {
        console.log('go back');
        this.$router.push({name:'管理员主页',params: {id:this.$route.params.id}}); 
      },
      handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm('确定要提交表单吗？')
        .then(_ => {
          this.loading = true;
          this.timer = setTimeout(() => {
            done();
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading = false;
            }, 400);
          }, 500);
        })
        .catch(_ => {});
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    },
},
mounted(){
      this.showStu1();
        },
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
