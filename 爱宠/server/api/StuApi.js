const models = require('../db')
const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const $sql = require('../sqlMap')
// 连接数据库
const conn = mysql.createConnection(models.mysql)
conn.connect()
const jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1', msg: '操作失败'
    })
  } else {
    res.json(
      ret
    )
  }
}
// 接口：增加信息
router.post('/addStu1', (req, res) => {
  const sql = $sql.Stu.add1
  const params = req.body
  console.log('添加', params)
  conn.query(sql, [params.user_name, params.user_password,params.user_pav], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

router.post('/addStu2', (req, res) => {
  const sql = $sql.Stu.add2
  const params = req.body
  console.log('添加', params)
  conn.query(sql, [params.user_callnub,params.user_address,params.user_byQQ,params.user_city,params.user_name], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

router.post('/addStu3', (req, res) => {
  const sql = $sql.Stu.add3
  const params = req.body
  console.log('添加', params)
  conn.query(sql, [params.user_name,params.user_text,params.user_time,params.user_type,params.user_day,params.user_address,params.userA_byQQ,params.userA_callnub,params.user_time1,params.img], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

router.post('/addStu4', (req, res) => {
  const sql = $sql.Stu.add4
  const params = req.body
  console.log('添加', params)
  conn.query(sql, [params.name, params.text,params.time], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

router.post('/addStu5', (req, res) => {
  const sql = $sql.Stu.add5
  const params = req.body
  console.log('添加', params)
  conn.query(sql, [params.name, params.text,params.time1,params.time2,params.need,params.address,params.callnub], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      res.send(result)
    }
  })
})

// 接口：查询用户名
router.post('/showStu1', (req, res) => {
  const sql = $sql.Stu.show1
  const params = req.body
    console.log("查询", params.user_name)
  conn.query(sql, [params.user_name,params.user_password], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
        console.log(result)
        res.send(result)
    }
  })
})

router.post('/showStu2', (req, res) => {
  const sql = $sql.Stu.show2
  const params = req.body
  console.log("查询",params.user_name,'信息')
  conn.query(sql, [params.user_name], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
        console.log(result)
      jsonWrite(res, result)
    }
  })
})
router.post('/showStu_alluser', (req, res) => {
    const sql = $sql.Stu.show_alluser
    const params = req.body
    console.log("查询用户信息")
    conn.query(sql, function (err, result) {
        if (err) {  
            console.log(err)
        }
        if (result) {
            console.log(result)
            jsonWrite(res, result)
        }
    })
})
router.post('/showStu_allsw', (req, res) => {
    const sql = $sql.Stu.show_allsw
    const params = req.body
    console.log("查询宠物信息")
    conn.query(sql, function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            console.log(result)
            jsonWrite(res, result)
        }
    })
})
router.post('/showStu_allll', (req, res) => {
    const sql = $sql.Stu.show_allll
    const params = req.body
    console.log("查询流浪动物信息")
    conn.query(sql, function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            console.log(result)
            jsonWrite(res, result)
        }
    })
})
router.post('/showStu_alladmin', (req, res) => {
    const sql = $sql.Stu.show_alladmin
    const params = req.body
    console.log("查询管理员信息")
    conn.query(sql, [params.user_pav], function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            console.log(result)
            jsonWrite(res, result)
        }
    })
})
router.post('/showStu3', (req, res) => {
  const sql = $sql.Stu.show3
  const params = req.body
  console.log("查询",params,'领养信息')
  conn.query(sql, [params.user_name], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
        console.log(result)
      jsonWrite(res, result)
    }
  })
})
router.post('/showStu3_1', (req, res) => {
    const sql = $sql.Stu.show3_1
    const params = req.body
    console.log("查询通过管理员审核的寄养信息")
    conn.query(sql, [params.user_result], function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            console.log(result)
            jsonWrite(res, result)
        }
    })
})
router.post('/showStu3_2', (req, res) => {
    const sql = $sql.Stu.show3_2
    const params = req.body
    console.log("查询"+params.user_other+"的领养信息")
    conn.query(sql, [params.user_other], function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            console.log(result)
            jsonWrite(res, result)
        }
    })
})
router.post('/showStu3_3', (req, res) => {
    const sql = $sql.Stu.show3_3
    const params = req.body
    console.log("查询流浪动物的寄养信息" + params.user_result + params.user_day)
    conn.query(sql, [params.user_result,params.user_day], function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            console.log(result)
            jsonWrite(res, result)
        }
    })
})
router.get('/showStu4', (req, res) => {
  const sql = $sql.Stu.show4
  const params = req.body
  console.log("查询",params)
  conn.query(sql, [params.text,params.time1,params.name,params.time2,params.need,params.id,params.callnub], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

router.get('/showStu5', (req, res) => {
  const sql = $sql.Stu.show5
  const params = req.body
  console.log("查询",params)
  conn.query(sql, [params.name,params.text], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})
// 接口：删除信息
router.post('/delStu1', (req, res) => {
  const sql = $sql.Stu.del1
  const params = req.body
  console.log('删除用户', params.user_name)
  conn.query(sql, [params.user_name], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})
router.post('/delStu2', (req, res) => {
    const sql = $sql.Stu.del2
    const params = req.body
    console.log('删除寄养信息', params.user_id)
    conn.query(sql, [params.user_id], function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            jsonWrite(res, result)
        }
    })
})
// 接口：修改信息
router.post('/updateStu1', (req, res) => {
  const sql = $sql.Stu.update1
  const params = req.body
  console.log('修改', params.user_name,'的密码为',params.user_password)
  conn.query(sql, [params.user_password,params.user_name], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})
router.post('/updateStu_qx', (req, res) => {
    const sql = $sql.Stu.update_qx
    const params = req.body
    console.log('修改', params.id, '的权限为', params.user_pav)
    conn.query(sql, [params.user_pav, params.user_id], function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            jsonWrite(res, result)
        }
    })
})
router.post('/updateStu2', (req, res) => {
  const sql = $sql.Stu.update2
  const params = req.body
  console.log('修改', params.user_name,'的信息为',params.name,params.user_callnub,params.user_address,params.user_byQQ,params.user_city)
    conn.query(sql, [params.name,params.user_callnub,params.user_address,params.user_byQQ,params.user_city,params.user_name], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})
router.post('/updateStu_a', (req, res) => {
    const sql = $sql.Stu.update_a
    const params = req.body
    console.log('修改', params.id, '的信息为', params.name, params.user_callnub, params.user_address, params.user_byQQ, params.user_city)
    conn.query(sql, [params.user_type, params.userA_callnub, params.user_day, params.user_address, params.userA_byQQ, params.user_text, params.userB_callnub, params.userB_byQQ, params.user_id], function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            jsonWrite(res, result)
        }
    })
})
router.post('/updateStu3', (req, res) => {
  const sql = $sql.Stu.update3
  const params = req.body
  console.log('修改', params)
  conn.query(sql, [params.user_result,params.user_id], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

router.post('/updateStu4', (req, res) => {
  const sql = $sql.Stu.update4
  const params = req.body
  console.log('修改', params)
  conn.query(sql, [params.user_other,params.user_id], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})
router.post('/updateStu5', (req, res) => {
  const sql = $sql.Stu.update5
  const params = req.body
  console.log('修改', params)
  conn.query(sql, [params.userB_byQQ,params.user_id], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})
router.post('/updateStu6', (req, res) => {
  const sql = $sql.Stu.update6
  const params = req.body
  console.log('修改', params)
  conn.query(sql, [params.userB_callnub,params.user_id], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})
router.post('/updateStu7', (req, res) => {
    const sql = $sql.Stu.update7
    const params = req.body
    console.log('修改', params)
    conn.query(sql, [params.user_time2, params.user_id], function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            jsonWrite(res, result)
        }
    })
})
module.exports = router