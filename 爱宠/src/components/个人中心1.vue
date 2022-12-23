<template>
    <div class="jygl-all">
        <br>
        <el-page-header @back="goBack" content="个人中心">
        </el-page-header>
        <br>
        <el-divider></el-divider>
        <br>
        <el-descriptions class="margin-top" title="个人信息" :column="3" :size="size" border>
            <template slot="extra">
                <el-button @click="drawer = true" type="primary">
                    修改
                </el-button>
                <el-drawer title="信息修改" ref="navDrawer" :visible.sync="drawer" :direction="direction">
                    <div style="padding:5vh">
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
                        <br>
                        <br>
                        <el-button type="primary" style="margin-left:7vw" @click="tijiao()">提交</el-button>
                    </div>
                </el-drawer>
            </template>
            <el-descriptions-item>

                <template slot="label">
                    <i class="el-icon-user"></i>
                    用户名
                </template>
                {{ us.name }}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-mobile-phone"></i>
                    手机号
                </template>
                {{ us.user_callnub }}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-location-outline"></i>
                    居住地
                </template>
                {{ us.user_address }}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-tickets"></i>
                    QQ
                </template>
                {{ us.user_byQQ }}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-office-building"></i>
                    详细地址
                </template>
                {{ us.user_city }}
            </el-descriptions-item>
        </el-descriptions>
        <el-divider></el-divider>
        <br>
        <br>
        <el-descriptions class="margin-top" title="账号管理" :column="3" :size="size" border>

            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>
                    账号
                </template>
                {{ user_name }}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-key"></i>
                    密码
                </template>
                {{ us.user_password }}
            </el-descriptions-item>
            <template slot="extra">
                <el-button @click="drawer1 = true" type="primary" style="margin-left: 16px;">
                    修改密码
                </el-button>
                <el-drawer title="修改密码" ref="navDrawer1" :visible.sync="drawer1" :with-header="false">
                    <div style="padding:5vh">
                        <span> 新密码为:</span>
                        <br>
                        <el-input v-model="us.user_password" placeholder="请输入内容" style="width:20vw"></el-input>
                        <br>
                        <br>
                        <el-button type="primary" style="margin-left:7vw" @click="tijiao1()">修改</el-button>
                    </div>
                </el-drawer>
            </template>
        </el-descriptions>
        <br>
        <br>
        <el-button type="danger" round style="margin-left:50vw" @click="tc()">退出登录</el-button>
        <br>
        <br>
        <el-button type="danger" round style="margin-left:50vw;" @click="zx()">注销账号</el-button>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            size: '',
            pas: [],
            user_name: this.$route.params.id,
            us: {
                user_name: this.$route.params.id,
                name: '',
                user_password: "",
                user_callnub: "",
                user_address: "",
                user_byQQ: "",
                user_city: "",
            },
            drawer: false,
            drawer1: false,
            direction: 'rtl',
        };
    },
    methods: {
        open() {
            this.$message({
                message: '修改完成',
                type: 'success'
            });
        },
        open1() {
            this.$alert('登出成功', '提示', {
                confirmButtonText: '确定',
                callback: action => {
                    this.$message({
                        type: 'success',
                        message: `登出成功`
                    });
                }
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
        },
        update1() {
            axios.post('http://localhost:3000/api/Stu/updateStu2', this.us).then((response) => {
                console.log(response);
            })
        },
        update2() {
            axios.post('http://localhost:3000/api/Stu/updateStu1', { user_password: this.us.user_password, user_name: this.$route.params.id }).then((response) => {
                console.log(response);
            })
        },
        goBack() {
            console.log('go back');
            this.$router.push({ name: '管理员主页', params: { id: this.$route.params.id } });
        },
        tijiao() {
            this.update1();
            this.$refs.navDrawer.doClose();
            this.open();
        },
        tijiao1() {
            this.update2();
            this.$refs.navDrawer1.doClose();
            this.open();
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
            })
        },
        tc() {
            this.$router.push('/');
            this.open1();
        },
        zx() {
            this.changeMsg();
            this.$router.push('/');
            this.open2();
        },
        changeMsg() {
            axios.post('http://localhost:3000/api/Stu/delStu1', { user_name: this.$route.params.id }).then((response) => {
                console.log(response);
            })
        },
    },
    mounted() {
        this.showStu1();
    }
}
</script>
<style scoped>
.jygl-all {
    position: absolute;
    top: 10vh;
    left: 10vw;
    width: 60vw;
    margin-left: 10vw;
}

.jygl-sjc {
    position: absolute;
    top: 50vh;
    left: 0vw;
    width: 30vw;
    margin-left: 10vw;
}
</style>