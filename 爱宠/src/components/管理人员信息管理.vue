<style scoped>
#di {
    width: 80vw;
    height: 50vh;
    margin: 0px 10vw;
    margin-top: -20vh;
}
</style>
<template>
    <div id="di">
        <br>
        <el-page-header @back="goBack" content="管理人员信息管理">
        </el-page-header>
        <br>
        <el-divider></el-divider>
        <el-drawer title="修改权限" :visible.sync="drawer2" :direction="direction" :before-close="handleClose"
            style="padding:10px 50px;width: 800px;height:400px;margin-top:20vh;margin-left:30vw;">
            <div style="padding:10px">
                <el-select v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-button type="primary" style="margin:50px" @click="tijiao_qx()">提交</el-button>
            </div>
        </el-drawer>
        <el-drawer title="信息修改" :visible.sync="drawer1" :direction="direction" :before-close="handleClose"
            style="padding:50px;margin:50px">
            <div style="padding:50px">
                <span> 账号:</span>
                <br>
                <el-input v-model="ut.user_name" placeholder="请输入内容" style="width:20vw"></el-input>
                <br>
                <br>
                <span> 密码:</span>
                <br>
                <el-input v-model="ut.user_password" placeholder="请输入内容" style="width:20vw"></el-input>
                <br>
                <br>
                <el-button type="primary" style="margin-left:7vw" @click="tijiao_pp()">提交</el-button>
            </div>
        </el-drawer>
        <el-drawer title="信息修改" :visible.sync="drawer" :direction="direction" :before-close="handleClose"
            style="padding:50px;margin:50px">
            <div style="padding:50px">
                <span> 用户名:</span>
                <br>
                <el-input v-model="us.name" placeholder="请输入内容" style="width:20vw"></el-input>
                <br>
                <br>
                <span> 手机号:</span>
                <br>
                <el-input v-model="us.user_callnub" placeholder="请输入内容" style="width:20vw"></el-input>
                <br>
                <br>
                <span> 密码:</span>
                <br>
                <el-input v-model="us.user_password" placeholder="请输入内容" style="width:20vw"></el-input>
                <br>
                <br>
                <span> 居住地:</span>
                <br>
                <el-input v-model="us.user_address" placeholder="请输入内容" style="width:20vw"></el-input>
                <br>
                <br>
                <span>QQ:</span>
                <br>
                <el-input v-model="us.user_byQQ" placeholder="请输入内容" style="width:20vw"></el-input>
                <br>
                <br>
                <span>详细地址:</span>
                <br>
                <el-input v-model="us.user_city" placeholder="请输入内容" style="width:20vw"></el-input>
                <br>
                <br>
                <el-button type="primary" style="margin-left:7vw" @click="tijiao()">提交</el-button>
            </div>
        </el-drawer>
        <div style="margin: 20px 0px">
            <el-button @click="tianjia()" type="primary">添加管理员</el-button>
            <el-button @click="toggleSelection()">取消选择</el-button>
        </div>
        <el-table ref="multipleTable" tooltip-effect="dark" style="width: 100%" stripe
            @selection-change="handleSelectionChange" border
            :data="pas.filter(data => !search || data.user_name.toLowerCase().includes(search.toLowerCase()))">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column prop="id" label="用户编号" sortable>
            </el-table-column>
            <el-table-column prop="name" label="用户名">
            </el-table-column>
            <el-table-column prop="user_name" label="账号" width="120">
            </el-table-column>
            <el-table-column prop="user_password" label="密码">
            </el-table-column>
            <el-table-column prop="user_callnub" label="手机号">
            </el-table-column>
            <el-table-column prop="user_address" label="居住地" sortable>
            </el-table-column>
            <el-table-column prop="user_byQQ" label="QQ">
            </el-table-column>
            <el-table-column prop="user_city" label="详细地址" width="300px">
            </el-table-column>
            <el-table-column prop="user_pav" label="权限" width="120" sortable>
            </el-table-column>
            <el-table-column label="权限修改">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit1(scope.row)">修改权限</el-button>
                </template>
            </el-table-column>
            <el-table-column align="right" width="150px">
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
            drawer2: false,
            direction: 'rtl',
            us: {
                user_name: '',
                name: '',
                user_password: "",
                user_callnub: "",
                user_address: "",
                user_byQQ: "",
                user_city: "",
                user_pav: '',
            },
            ut: {
                user_name: "",
                user_password: '',
                user_pav:"管理员",
            },
            options: [{
                value: '普通用户',
                label: '普通用户'
            }, {
                value: '管理员',
                label: '管理员'
            }],
            value: '',
            id: 0,
        }
    },

    methods: {
        update1() {
            axios.post('http://localhost:3000/api/Stu/updateStu2', this.us).then((response) => {
                console.log(response);
            })
            axios.post('http://localhost:3000/api/Stu/updateStu1', { user_password: this.us.user_password, user_name: this.us.user_name, user_pav: '管理员' }).then((response) => {
                console.log(response);
            })
        },
        update2() {
            axios.post('http://localhost:3000/api/Stu/updateStu_qx', { user_pav: this.value, user_id: this.id }).then((response) => {
                console.log(response);
            })
        },
        addUser() {
            axios.post('http://localhost:3000/api/Stu/addStu1', this.ut
                , {}).then((response) => { console.log(response); })
        },
        tianjia() {
            this.drawer1 = true;
        },
        tijiao_pp() {
            if (this.ut.user_password.length >= 6 && this.ut.user_name != '') {
                this.addUser();
                this.drawer = false;
                this.open3()
            } else {
                this.open4()
            }
        },
        tijiao_qx() {
            this.update2();
            this.drawer1 = false;
            this.open()
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
                message: '添加成功',
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
            this.$alert('注销成功', '提示', {
                confirmButtonText: '确定',
                callback: action => {
                    this.$message({
                        type: 'success',
                        message: `注销成功`
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
            this.us.user_name = a.user_name;
            this.us.name = a.name;
            this.us.user_password = a.user_password;
            this.us.user_callnub = a.user_callnub;
            this.us.user_address = a.user_address;
            this.us.user_byQQ = a.user_byQQ;
            this.us.user_city = a.user_city;
            this.us.user_pav = a.user_pav;
            this.drawer = true;
        },
        handleEdit1(a) {
            this.value = a.user_pav;
            this.id = a.id;
            this.drawer2 = true;
        },
        handleDelete(a) {
            this.changeMsg(a);
            this.open2();
        },
        changeMsg(a) {
            axios.post('http://localhost:3000/api/Stu/delStu1', { user_name: a.user_name }).then((response) => {
                console.log(response);
            })
        },
        showStu1() {
            axios.post('http://localhost:3000/api/Stu/showStu_alladmin', {user_pav:'管理员'}).then((response) => {
                this.pas = response.data;
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