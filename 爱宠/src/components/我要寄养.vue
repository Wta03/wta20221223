<template>
<div class="wyjy-all">
    <br>
    <el-page-header @back="goBack" content="我要寄养">
</el-page-header>
<br>
<el-divider></el-divider>
<div class="wyjy-div1">
    <el-steps :active="active" finish-status="success" class="wyjy-jdt">
  <el-step title="步骤 1"></el-step>
  <el-step title="步骤 2"></el-step>
  <el-step title="步骤 3"></el-step>
</el-steps>
<el-form ref="form" :model="form" label-width="80px">
<div  v-if="active==0" class="wyjy-div">
    <br>
<div class="block">
    <span class="demonstration">寄养开始时间:</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期"
      format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd">
    </el-date-picker>
    <br>
    <br>
  </div>
  <el-input
  placeholder="注释:开始时间最早从今天开始"
  v-model="input2"
  :disabled="true">
</el-input>
<br>
<br>
 <div class="block">
    <span class="demonstration">寄养天数:</span>
    <el-slider
      v-model="value_day"
      show-input>
    </el-slider>
  </div>
  <br>
<br>宠物类型:
<el-input v-model="input1" placeholder="宠物类型" style="width:10vw">
</el-input>

</div>
<div  v-if="active==1" class="wyjy-div">
    <el-descriptions title="确认个人信息" direction="vertical" :column="4" border>
  <el-descriptions-item label="用户名">{{us.name}}</el-descriptions-item>
<el-descriptions-item label="账号">{{us.user_name}}</el-descriptions-item>
  <el-descriptions-item label="手机号">{{us.user_callnub}}</el-descriptions-item>
  <el-descriptions-item label="居住地" :span="2">{{us.user_address}}</el-descriptions-item>
  <el-descriptions-item label="QQ">
    <el-tag size="small">{{us.user_byQQ}}</el-tag>
  </el-descriptions-item>
  <el-descriptions-item label="详细地址">{{us.user_city}}</el-descriptions-item>
</el-descriptions>
<span class="wyjy-span"><b>确定</b></span>
<el-switch
  v-model="value"
  active-color="#13ce66"
  inactive-color="#ff4949"
  class="wyjy-kg">
</el-switch>
<br>
<br>
<el-link type="warning" class="wyjy-link" @click="on()">信息错误</el-link>
</div>
 <div v-if="active==2" class="wyjy-div">
    <br>
    <div>
        <el-upload class="upload-demo" action="http://localhost:3000/upload" :on-remove="handleRemove"
            :before-remove="beforeRemove" multiple :limit="5" :on-exceed="handleExceed" :file-list="fileList"
            :on-success="uploadSuccess">
            <el-button size="small" type="primary" class="button_tp">上传图片</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
    </div>
    <br>
     <br>
      <span class="demonstration">寄养信息描述:</span>
      <el-input
  type="textarea"
   :autosize="{ minRows: 5, maxRows: 6}"
  placeholder="例:因工作原因,需要将家中宠物寄养10天,十分感谢!!!"
  v-model="textarea"
  maxlength="60"
  show-word-limit
>
</el-input>
<div class="wyjy_an">*确定寄养</div>
<el-switch
  v-model="value2"
  active-color="#13ce66"
  inactive-color="#ff4949"
  class="wyjy-kg">
</el-switch>
  </div>
</el-form>
<el-button style="margin-top: 12px;" @click="before()" class="wyjy-button1">上一步</el-button>
<el-button style="margin-top: 12px;" @click="next()" class="wyjy-button2">下一步</el-button>
</div>
</div>
</template>
<script>
import axios from 'axios';
import { getFormatDate } from '../js/alluse';
  export default {
    data() {
      return {
          a:0,
        active: 0,
        value1:'',
        textarea:'',
        value: false,
        input:' ',
        value2:false,
        input1: ' ',
        input2:'',
        value_day:1,
        pas:[],
        form:' ',
        us:{
          user_name:this.$route.params.id, 
          user_password:"",
          user_callnub:"",
          user_address:"",
          user_byQQ:"",
          user_city:"", 
          name:'',
          user_time1:'',
        },
          fileList: [],//图片列表
          src: ' ',
          form: {
              num: 0,
              title: '',
              city: '',
              exhibitionType: '',
              extension: '',
              businessHours: '',
              location: '',
              name: '',
              number: '',
              imgBanner: '',
              img: [],
              content: ''
          },
      };
    },

    methods: {
        button_click() {
            var file = document.getElementById("file");
            file.click();
        },
        fileChange(el) {
            const file = el.target.files[0];
            console.log(file);
            this.fileName = file.name;
        },
        uploadSuccess(res, file) {
            console.log(file);
            this.form.img.push(res.data.path)
            this.fileName = file.name;
            this.src = file.response.data.path;
        },
        handleRemove(file, fileList) {
            console.log(file, fileList, '1111111');
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${file.name}`);
        },
      addUser() {
          if (this.src != " ") {
              this.src = 'http://localhost:3000/' + this.src
          }
        axios.post('http://localhost:3000/api/Stu/addStu3',{user_name:this.$route.params.id,user_text:this.textarea,user_time:this.value1,user_type:this.input1,user_day:this.value_day,user_address:this.us.user_address,userA_byQQ:this.us.user_byQQ,userA_callnub:this.us.user_callnub,user_time1:this.us.user_time1,img:this.src}
        , {}).then((response) => { console.log(response); })
      },
        showStu1() {
            axios.post('http://localhost:3000/api/Stu/showStu2', { user_name: this.$route.params.id }, {}).then((response) => {
                this.pas = response.data;
                this.us.user_password = this.pas[0].user_password;
                this.us.user_callnub = this.pas[0].user_callnub;
                this.us.user_address = this.pas[0].user_address;
                this.us.user_byQQ = this.pas[0].user_byQQ;
                this.us.user_city = this.pas[0].user_city;
                this.us.name = this.pas[0].name;
                this.us.user_time1 = getFormatDate();
            })
        },
      on(){
        this.$router.push({name:'个人中心',params: {id:this.$route.params.id}});
      },
      goBack() {
        this.$router.push({name:'主页',params: {id:this.$route.params.id}}); 
      },
      next() {
          if (this.active==0){
              if (this.active==0 && this.value1!==""&&this.input1!==""&&this.value_day!==0)
        {
            this.active++;
        }
        else{
            this.wyjy_open1();
        }
          }
        if (this.active==1){
            if(this.active==1 && this.value==true)
            {
                this.active++;
            }
            else{
                this.wyjy_open2();
            }
        }
        if (this.active==2){
            if(this.active==2 && this.textarea!==""&& this.value2==true)
            {
                this.addUser();
                this.$router.push({name:'寄养管理',params: {id:this.$route.params.id}}); 
                this.wyjy_open4();
            }
            else{
                this.wyjy_open3();
            }
        }
      },
      before(){
          if(this.active!=0)
          {
              if(this.active==1){
                  this.value=false;
              }
              if(this.active==2){
                  this.value2=false;
              }
                  this.active--;
          }
      },
      wyjy_open1() {
        this.$alert('请设置寄养时间并填写宠物类型与寄养天数', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `未设置寄养时间或未填写宠物类型或寄养天数`
            });
          }
        });
      },
      wyjy_open2() {
        this.$alert('请确认信息', '提示', {
          confirmButtonText: '确定',
        });
      },
      wyjy_open3() {
        this.$alert('请输入寄养信息并同意寄养', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `未输入寄养信息或未同意寄养`
            });
          },
        });
      },
      wyjy_open4() {
        this.$alert('寄养成功', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'success',
              message: `寄养成功`
            });
          }
        });
      },
    },
     mounted(){
          this.showStu1();
        }
  }
</script>
<style scoped>
.wyjy-all{
    position: absolute;
    top: 10vh;
    left: 10vw;
    width: 60vw;
    margin-left:10vw;
}
.wyjy-jdt{
     position: absolute;
    top: 20vh;
    left: 2vw;
    width: 25vw;
    margin-left:10vw;
}
.wyjy-div{
     position: absolute;
    top: 30vh;
    left: 0vw;
    width: 30vw;
    margin-left:10vw;
}
.wyjy-div1{
    width: 50vw;
    height: 70vh;
    background: rgb(243, 241, 241);
    border-radius: 2vw;
}
.wyjy-button1{
    position: absolute;
    top: 80vh;
    left: 5vw;
    width: 8vw;
    margin-left:10vw;
}
.wyjy-button2{
    position: absolute;
    top: 80vh;
    left: 15vw;
    width: 8vw;
    margin-left:10vw;
}
.wyjy-kg{
    position: absolute;
    top: 35vh;
    left: 0vw;
    margin-left:10vw;
}
.wyjy-span{
    position: absolute;
    top: 35vh;
    left: -2vw;
    margin-left:10vw;
    font-size: 0.8vh;
    font-style: italic;
    font-weight: lighter;
}
.wyjy-link{
    position: absolute;
    top: 44vh;
    left: 0vw;
    margin-left:10vw;
}
.wyjy_an{
    position: absolute;
    top: 35vh;
    left: -4vw;
    margin-left:10vw;
    font-size: 0.8vh;
    font-style: italic;
    font-weight: lighter;
}
</style>
