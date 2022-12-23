<template>
    <div class="jxaxwp-all">
    <br>
    <el-page-header @back="goBack" content="捐献爱心物品">
</el-page-header>
<br>
<el-divider></el-divider>
<div class="jxaxwp-div">
    <br>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm jxaxwp-bd">
  <el-form-item label="捐献物品" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="个人姓名" prop="name1">
    <el-input v-model="ruleForm.name1"></el-input>
  </el-form-item>
  <el-form-item label="个人地址" prop="place">
    <el-input v-model="ruleForm.place"></el-input>
  </el-form-item>
  <el-form-item label="捐献地点" prop="region">
    <el-select v-model="ruleForm.region" placeholder="请选择捐献地点">
      <el-option label="区域一" value="qindao"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="捐献时间" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择捐献日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item label="上门取件" prop="delivery">
    <el-switch v-model="ruleForm.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="特殊资源" prop="resource">
    <el-radio-group v-model="ruleForm.resource">
      <el-radio label="线上品牌商赞助"></el-radio>
      <el-radio label="线下场地免费"></el-radio>
      <el-radio label="无"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交捐赠</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</div>
</div>
</template>
<script>
  export default {
      data() {
      return {
        ruleForm: {
          name: '',
          name1:"",
          place:"",
          region: '',
          date1: '',
          delivery: false,
          resource: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入捐献物品', trigger: 'blur' },
            { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ],
          name1: [
            { required: true, message: '请输入个人昵称', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 2到 5个字符', trigger: 'blur' }
          ],
          place: [
            { required: true, message: '请输入个人地址', trigger: 'blur' },
            { min: 3, max: 40, message: '长度在 3到 40个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择捐献区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],

        }
      };
    },
    methods: {
      open1() {
        this.$alert('捐献成功', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'success',
              message: `捐献成功`
            });
          }
        });
      },
      goBack() {
         this.$router.push({name:'主页',params: {id:this.$route.params.id}}); 
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('捐献成功');
            this.$router.push({name:'主页',params: {id:this.$route.params.id}});
            this.open1();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    }
  }
</script>
<style scoped>
.jxaxwp-all{
    position: absolute;
    top: 10vh;
    left: 10vw;
    width: 60vw;
    margin-left:10vw;
}
.jxaxwp-div{
    width: 50vw;
    height: 70vh;
    background: rgb(231, 230, 230);
    border-radius: 2vw;
}
.jxaxwp-bd{
    position: absolute;
    top: 20vh;
    left: -6vw;
    width: 40vw;
    margin-left:10vw;
}
</style>