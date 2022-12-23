<template>
    <div class="d1">
        <div class="div1">
            <h1>管理员系统</h1>
            <div class="div2" @click="open1()">

            </div>
        </div>
        <div class="div1"  @click="open2()">
             <h1>正常进入</h1>
            <div class="div3">
                   
            </div>
        </div>
    </div>
</template>
<style scoped>
.d1{
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-flow: row wrap;
        justify-content:space-around;
        align-content: center;
        padding:0px 10vw;
    }
    .div1{
        cursor: pointer;
        height: 50%;
        width: 30%;
        border: 5px black solid;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
    }
    .div2:hover{
        border: rgb(255, 183, 0) 5px solid;
    }
    .div2{
        width:70%;
        height: 70%;
        border: 5px black solid;
    }
        .div3:hover {
            border: rgb(0, 255, 221) 5px solid;
        }
    
        .div3 {
            width: 70%;
            height: 70%;
            border: 5px black solid;
        }
    h1{
        margin: auto;
        text-align: center;
    }
</style>
<script>
import axios from 'axios';
export default {
    data() {
        return {
        }
    },
    methods: {
        open1() {
            this.$router.push({ name: '管理员主页', params: { id: this.$route.params.id } });
        },
        open2() {
            this.$router.push({ name: '主页', params: { id: this.$route.params.id } });
        },
    },


}
</script>