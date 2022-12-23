// sqlMap.js  sql语句
const sqlMap = {
    Stu: {
      add1: 'insert into axios_demo(user_name,user_password,user_pav) values (?,?,?)',
      add2: 'insert into axios_demo(user_callnub,user_address,user_byQQ,user_city) values (?,?,?,?) where user_name=?',
      add3: 'insert into jiyangkui(user_result,user_name,user_text,user_time,user_type,user_day,user_address,userA_byQQ,userA_callnub,user_time1,img) values ("red",?,?,?,?,?,?,?,?,?,?)',
      add4: 'insert into ax(name,text,time) values (?,?,?)',
      add5: 'insert into activity(name,text,time1,time2,need,address,callnub) values (?,?,?,?,?,?,?)',
        show1: 'select * from axios_demo where user_name = ? and user_password = ?',
      show_alluser: 'select * from axios_demo',
        show_alladmin: 'select * from axios_demo where user_pav = ? ',
        show_allsw: 'select * from jiyangkui',
        show_allll: 'select * from jiyangkui where user_day = 0 ',
        show2: 'select * from axios_demo where user_name = ?',
        show3: 'select * from jiyangkui where user_name = ? order by user_time desc,user_time1 desc ',
        show3_1: 'select * from jiyangkui where user_result= ?',
        show3_2: 'select * from jiyangkui where user_other= ? order by user_time desc,user_time2 desc',
        show3_3: 'select * from jiyangkui where user_result= ? and user_day = ? order by user_time desc,user_time2 desc',
      show4: 'select * from activity',
      show5: 'select * from ax',
      del1: 'delete from axios_demo where user_name = ?',
        del2: 'delete from jiyangkui where user_id = ?',
      update1: 'update axios_demo set user_password = ? where user_name = ?',
        update_qx: 'update axios_demo set user_pav = ? where id =?',
      update2: 'update axios_demo set name = ?, user_callnub = ? ,user_address = ? ,user_byQQ = ?,user_city = ? where user_name = ?',
      update3: 'update jiyangkui set user_result = ? where user_id = ?',
        update_a: 'update jiyangkui set user_type = ?,userA_callnub = ?,user_day = ?,user_address = ?,userA_byQQ = ?,user_text = ?,userB_callnub = ?,userB_byQQ = ? where user_id = ?',
      update4: 'update jiyangkui set user_other = ?  where user_id = ?',
      update5: 'update jiyangkui set userB_byQQ = ?  where user_id = ?',
      update6: 'update jiyangkui set userB_callnub = ?  where user_id = ?',
        update7: 'update jiyangkui set user_time2 = ?  where user_id = ?',
    }
  }
  
  module.exports = sqlMap