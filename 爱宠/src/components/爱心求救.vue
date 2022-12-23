<template>

    <div class="firstpage-zmd">
         <br>
        <el-page-header @back="goBack" content="爱心求助">
</el-page-header>
<br>
<el-divider></el-divider>
  <el-carousel :interval="2000" type="card" height="35vh">
    <el-carousel-item v-for="item in 4" :key="item">
    </el-carousel-item>
  </el-carousel>
    <br>
<el-divider></el-divider>
<br>
<div class="quote-wrap">
        <blockquote>
          <p>以后人类的画家只能照着猫眼石描绘我们的眸子</p>
        </blockquote>
      </div>
      <br>
      <el-divider></el-divider>
<div style="margin-left:25vw">
  <el-tooltip class="item" effect="dark" content="<<如果您发现流浪动物,想给它一个家,请点这里>>" placement="bottom">
    <el-button type="text" @click="dialog = true" style="font-size:2.5vh">流浪动物寄养</el-button>
  </el-tooltip>
    <el-drawer
  title="流浪动物寄养"
  :before-close="handleClose"
  :visible.sync="dialog"
  direction="ltr"
  custom-class="demo-drawer"
  ref="drawer"
  >
  <div class="demo-drawer__content">
    <el-form :model="form">
      <div style="padding:5vh">
    <span class="demonstration">流浪动物发现时间:</span>
    <br>
    <el-date-picker
      v-model="mn.time"
      type="date"
      placeholder="选择日期"
      format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd">
    </el-date-picker>
    <br>
    <br>
          <span>描述流浪动物信息:</span>
          <br>
          <el-input v-model="mn.text" placeholder="请输入内容"></el-input>
          <br>
          <br>
          <span>流浪动物类型:</span>
          <br>
          <el-select v-model="mn.type" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
            <br>
          <br>
      
  <span>居住地:</span>
        <el-input v-model="mn.address" placeholder="请输入内容"></el-input>
        <br>
        <br> 
        <span>联系电话:</span>
        <el-input v-model="mn.callnub" placeholder="请输入内容"></el-input>
        <br>
        <br> 
        <span>QQ号码:</span>
        <el-input v-model="mn.byQQ" placeholder="请输入内容"></el-input>
        <br>
        <br> 
        <div>
            <el-upload class="upload-demo" action="http://localhost:3000/upload" :on-remove="handleRemove"
                :before-remove="beforeRemove" multiple :limit="5" :on-exceed="handleExceed" :file-list="fileList"
                :on-success="uploadSuccess">
                <el-button size="small" type="primary" class="button_tp">上传图片</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </div>
      </div>
    </el-form>
    <div class="demo-drawer__footer"  style="padding:5vh">
      <el-button @click="cancelForm">取 消</el-button>
      <el-button type="primary" @click="addUser();" :loading="loading">{{ loading ? '提交中 ...' : '确 定' }}</el-button>
    </div>
  </div>
</el-drawer>

</div>
<el-divider></el-divider>
<div >
    <span>
        <b>寄言</b>
    </span>
    <br>
    <span style="margin-left:21vw">劝君莫打枝头鸟，子在巢中望母归。</span>
    <el-divider></el-divider>
    <span style="margin-left:22vw">不要让人类成为最后一种动物。</span>
    <el-divider></el-divider>
    <span style="margin-left:18vw">你的一生会有很多宠物，但是他们的一生只有你。</span>
  </div>
</div>
</template>
<script>
import axios from 'axios';
import { getFormatDate } from '../js/alluse';
export default {
    data() {
    return {
      dialog: false,
      loading: false,
        mn:{
            text:"",
            type:"",
            time:"",
            byQQ:"",
            address:"",
            callnub:"",
        },
      formLabelWidth: '80px',
      timer: null,
      options: [{
          value: '流浪猫',
          label: '流浪猫'
        }, {
          value: '流浪狗',
          label: '流浪狗'
        }],
        value:"",
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
        //删除图片时也要把form.imgBanner和form.img里的数据删除
        if (file.name === "banner.jpg") {
            this.form.imgBanner = ''
        } else {
            //给数组封装一个方法，用来删除数组中指定的数据
            Array.prototype.contains = function (obj) {
                var i = this.length;
                while (i--) {
                    if (this[i] === obj) {
                        return i;  // 返回的这个 i 就是元素的索引下标，
                    }
                }
                return false;
            }
            const path = file.response.data.path
            this.form.img.splice(this.form.img.contains(path), 1)
            // console.log(this.form.img,'删除后的form.img')
        }
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
        axios.post('http://localhost:3000/api/Stu/addStu3', { user_name: this.$route.params.id, user_text: this.mn.text, user_time: this.mn.time, user_type: this.mn.type, user_day: 0, user_address: this.mn.address, userA_byQQ: this.mn.byQQ, userA_callnub: this.mn.callnub, user_time1: getFormatDate(),img:this.src }
        , {}).then((response) => { console.log(response); });
        this.$refs.drawer.closeDrawer();
      },
      goBack() {
        console.log('go back');
        this.$router.push({name:'主页',params: {id:this.$route.params.id}}); 
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
    }
    }
    }
</script>
<style scoped>
  .el-carousel__item:nth-last-child(3) {
     background-image: url("../assets/9.jpg");
      background-clip: content-box;
  }
  
  .el-carousel__item:nth-last-child(4) {
     background-image: url("../assets/10.jpg");
      background-clip: content-box;
  }
  .el-carousel__item:nth-last-child(1) {
     background-image: url("../assets/11.jpg");
      background-clip: content-box;
  }
  .el-carousel__item:nth-last-child(2) {
     background-image: url("../assets/12.jpg");
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
  .quote-wrap {
  padding: 2vh 10vh;
  background-color: #585a57;
  height: 20vh;
  border-radius: 4vh;
  background-image: url("../assets/13.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100%; 
}
.quote-wrap p {
  font-size: 4vh;
  margin-top: 3vh;
    margin-left: 1.5vw;
  color: white;
}
.quote-wrap blockquote {
  position: relative;
  padding: 3vh 5vh 3vh;
}
.quote-wrap blockquote::before,
.quote-wrap blockquote::after {
  position: absolute;
  font-size:4vh;
  color: white;
}
.quote-wrap blockquote::before {

  content: "\201C";
  top: 0;
  left: 0;
}
.quote-wrap blockquote::after {
  top: 0;
  right: 0;
  content: "\201D";
}

</style>