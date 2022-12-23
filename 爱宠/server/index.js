// node 后端服务器
const StuApi = require('./api/StuApi')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const multer = require('multer')
//采用设置所有均可访问的方法解决跨域问题
app.all("*", function (req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200); //让options尝试请求快速结束
    else
        next();
})
app.use(bodyParser.json()) // 以json格式返回出去
app.use(bodyParser.urlencoded({ extended: false }))
// 后端api路由

app.use('/api/Stu', StuApi)
// 监听端口
app.use('/public', express.static('public'));
app.post(
    "/upload",
    multer({
        //设置文件存储路径
        dest: "public/images",
    }).array("file", 1),
    function (req, res, next) {
        let files = req.files;
        let file = files[0];
        let fileInfo = {};
        let path = "public/images/" + Date.now().toString() + '.png';
        fs.renameSync("./public/images/" + file.filename, path);
        //获取文件基本信息
        fileInfo.type = file.mimetype;
        fileInfo.name = file.originalname;
        fileInfo.size = file.size;
        fileInfo.path = path;
        res.send({
            code: 200,
            msg: "OK",
            data: fileInfo,
        });
    }
)
app.post(
    "/upload1",
    multer({
        //设置文件存储路径
        dest: "public/tx",
    }).array("file", 1),
    function (req, res, next) {
        let files = req.files;
        let file = files[0];
        let fileInfo = {};
        let path = "public/tx/" + Date.now().toString() + '.png';
        fs.renameSync("./public/tx/" + file.filename, path);
        //获取文件基本信息
        fileInfo.type = file.mimetype;
        fileInfo.name = file.originalname;
        fileInfo.size = file.size;
        fileInfo.path = path;
        res.send({
            code: 200,
            msg: "OK",
            data: fileInfo,
        });
    }
)
app.listen(3000)
console.log('success listen at port:3000......')