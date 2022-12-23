<style scoped>
#di {
    width: 80vw;
    height: 50vh;
    margin: 0px 10vw;
    margin-top: -20vh;
}
 .demo-table-expand {
     font-size: 0;
 }

 .demo-table-expand label {
     width: 90px;
     color: #99a9bf;
 }

 .demo-table-expand .el-form-item {
     margin-left: 10%;
     margin-bottom: 0;
     width: 20%;
 }
</style>
<template>
    <div id="di">
        <br>
        <el-page-header @back="goBack" content="宠物信息管理">
        </el-page-header>
        <br>
        <el-divider></el-divider>
        <el-drawer title="修改状态" :visible.sync="drawer1" :direction="direction" :before-close="handleClose"
            style="padding:10px 50px;width: 800px;height:400px;margin-top:20vh;margin-left:30vw;">
            <div style="padding:10px">
                <el-select v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-button type="primary" style="margin:50px" @click="tijiao_pp()">提交</el-button>
            </div>
        </el-drawer>
        <el-drawer title="信息修改" :visible.sync="drawer" :direction="direction" :before-close="handleClose"
            style="padding:50px;margin:50px">
            <div style="padding:50px">
                <span> 宠物类型:</span>
                <br>
                <el-input v-model="us.user_type" placeholder="请输入内容" style="width:20vw"></el-input>
                <br>
                <br>
                <span> 寄养人手机号:</span>
                <br>
                <el-input v-model="us.userA_callnub" placeholder="请输入内容" style="width:20vw"></el-input>
                <br>
                <br>
                <span> 寄养天数:</span>
                <br>
                <el-input v-model="us.user_day" placeholder="请输入内容" style="width:20vw"></el-input>
                <br>
                <br>
                <span> 寄养人居住地:</span>
                <br>
                <el-input v-model="us.user_address" placeholder="请输入内容" style="width:20vw"></el-input>
                <br>
                <br>
                <span>寄养人QQ:</span>
                <br>
                <el-input v-model="us.userA_byQQ" placeholder="请输入内容" style="width:20vw"></el-input>
                <br>
                <br>
                <span>寄养原因:</span>
                <br>
                <el-input v-model="us.user_text" placeholder="请输入内容" style="width:20vw"></el-input>
                <br>
                <br>
                <span>领养人手机号:</span>
                <br>
                <el-input v-model="us.userB_callnub" placeholder="请输入内容" style="width:20vw"></el-input>
                <br>
                <br>
                <span>领养人QQ:</span>
                <br>
                <el-input v-model="us.userB_byQQ" placeholder="请输入内容" style="width:20vw"></el-input>
                <br>
                <br>
                <el-button type="primary" style="margin-left:7vw" @click="tijiao()">提交</el-button>
            </div>
        </el-drawer>
        <div style="margin: 20px 0px">
            <el-button @click="tt()" type="primary">添加寄养信息</el-button>
            <el-button @click="toggleSelection()">取消选择</el-button>
        </div>
        <el-table ref="multipleTable" tooltip-effect="dark" style="width: 100%" stripe
            @selection-change="handleSelectionChange" border
            :data="pas.filter(data => !search || data.user_type.toLowerCase().includes(search.toLowerCase()))">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="领养者账号:">
                            <span>{{ props.row.user_other }}</span>
                        </el-form-item>
                        <el-form-item label="领养者手机号:">
                            <span>{{ props.row.userB_callnub}}</span>
                        </el-form-item>
                        <el-form-item label="领养者QQ:">
                            <span>{{ props.row.userB_byQQ}}</span>
                        </el-form-item>
                        <el-form-item label="领养时间:">
                            <span>{{ props.row.user_time2}}</span>
                        </el-form-item>
                        <el-form-item label="寄养者QQ:">
                            <span>{{ props.row.userA_byQQ}}</span>
                        </el-form-item>
                        <el-form-item label="寄养者手机号:">
                            <span>{{ props.row.userA_callnub}}</span>
                        </el-form-item>
                        <el-form-item label="动物图片:">
                            <img v-bind:src="`${props.row.img}`" style="border-radius: 10px;height:18vh;width:auto;">
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column prop="user_id" label="编号" sortable>
            </el-table-column>
            <el-table-column prop="user_time" label="寄养开始时间" sortable>
            </el-table-column>
            <el-table-column prop="user_time1" label="寄养发表时间" sortable>
            </el-table-column>
            <el-table-column prop="user_name" label="账号">
            </el-table-column>
            <el-table-column prop="user_type" label="宠物类型" sortable>
            </el-table-column>
            <el-table-column prop="user_day" label="寄养时间(天)" sortable>
            </el-table-column>
            <el-table-column prop="user_text" label="寄养原因" width="300px">
            </el-table-column>
            <el-table-column prop="user_address" label="居住地" sortable>
            </el-table-column>
            <el-table-column prop="user_result" label="状态" sortable>
                
            </el-table-column>
            <el-table-column label="状态修改">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit1(scope.row)">修改状态</el-button>
                </template>
            </el-table-column>
            <el-table-column align="right" width="200px">
                <template slot="header">
                    <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
                </template>
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.row)">修改</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            pas: [],
            multipleSelection: [],
            search: '',
            drawer: false,
            drawer1: false,
            direction: 'rtl',
            us: {
                user_id:'',
                user_name: '',
                user_text:'',
                userA_callnub: "",
                user_address: "",
                userA_byQQ: "",
                userB_callnub: "",
                userB_byQQ: "",
                user_time:'',
                user_time1:"",
                user_time2:"",
                user_type:"",
                user_day:"",
                user_result:"",
                user_other:'',
            },
            ut: {
                user_name: "",
                user_password: '',
            },
            options: [{
                value: 'gray',
                label: '审核未通过'
            }, {
                value: 'red',
                label: '正在审核'
            }, {
                value: 'yellow',
                label: '待领养'
            }, {
                value: 'blue',
                label: '已领养'
            }, {
                value: 'green',
                label: '已完成'
            }],
            value: '',
            id:0,
        }
    },

    methods: {
        update1() {
            axios.post('http://localhost:3000/api/Stu/updateStu_a', this.us).then((response) => {
                console.log(response);
            })
        },
        update2(){
            axios.post('http://localhost:3000/api/Stu/updateStu3', { user_result:this.value, user_id: this.id}).then((response) => {
                console.log(response);
            })
        },
        tianjia() {
            this.drawer1 = true;
        },
        tijiao_pp() {
                this.update2();
                this.drawer1 = false;
                this.open3()
        },
        tijiao() {
            this.update1();
            this.drawer = false;
            this.open();
        },
        open() {
            this.$message({
                message: '修改完成',
                type: 'success'
            });
            this.$router.go(0)
        },
        open3() {
            this.$message({
                message: '修改成功',
                type: 'success'
            });
            this.$router.go(0)
        },
        open4() {
            this.$message({
                message: '添加失败',
                type: 'warning'
            });
        },
        open2() {
            this.$alert('删除成功', '提示', {
                confirmButtonText: '确定',
                callback: action => {
                    this.$message({
                        type: 'success',
                        message: `删除成功`
                    });
                }
            });
            this.$router.go(0)
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => { });
        },
        handleEdit(a) {
            this.us.user_id=a.user_id;
            this.us.user_name=a.user_name;
            this.us.user_text=a.user_text;
            this.us.userA_callnub=a.userA_callnub;
            this.us.user_address=a.user_address;
            this.us.userA_byQQ=a.userA_byQQ;
            this.us.userB_callnub=a.userB_callnub;
            this.us.userB_byQQ=a.userB_byQQ;
            this.us.user_time=a.user_time;
            this.us.user_time1=a.user_time1;
            this.us.user_time2=a.user_time2;
            this.us.user_type=a.user_type;
            this.us.user_day=a.user_day;
            this.us.user_result=a.user_result;
            this.value=a.user_result;
            this.us.user_other=a.user_other;
            this.drawer = true;
        },
        handleEdit1(a) {
            this.value = a.user_result;
            this.id=a.user_id;
            this.drawer1 = true;
        },
        handleDelete(a) {
            this.changeMsg(a);
            this.open2();
        },
        changeMsg(a) {
            axios.post('http://localhost:3000/api/Stu/delStu2', { user_id: a.user_id }).then((response) => {
                console.log(response);
            })
        },
        showStu1() {
            axios.post('http://localhost:3000/api/Stu/showStu_allsw', {}).then((response) => {
                this.pas = response.data;
                for (let a = 0; a < this.pas.length; a++) {
                    if(this.pas[a].user_result=='gray'){
                        this.pas[a].user_result='审核未通过'
                    }
                    else if (this.pas[a].user_result == 'red') {
                        this.pas[a].user_result ='正在审核'
                    }
                    else if (this.pas[a].user_result == 'yellow') {
                        this.pas[a].user_result = '待领养'
                    }
                    else if (this.pas[a].user_result == 'blue') {
                        this.pas[a].user_result = '已领养'
                    }
                    else  {
                        this.pas[a].user_result = '已完成'
                    }
                    var d1 = new Date(this.pas[a].user_time);
                    this.pas[a].user_time = d1.getFullYear() + '-' + (d1.getMonth() + 1) + '-' + d1.getDate();
                    var d = new Date(this.pas[a].user_time1);
                    this.pas[a].user_time1 = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes();
                    var d2 = new Date(this.pas[a].user_time2);
                    this.pas[a].user_time2 = d2.getFullYear() + '-' + (d2.getMonth() + 1) + '-' + d2.getDate() + ' ' + d2.getHours() + ':' + d2.getMinutes();
                } 
            })
        },
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        goBack() {
            this.$router.push({ name: '管理员主页', params: { id: this.$route.params.id } });
        },
    },
    mounted() {
        this.showStu1();
    }
}
</script>