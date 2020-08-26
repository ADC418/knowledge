var express = require('express');
var router = express.Router();

var { connect } = require("../database/db");//数据库模板


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('other');
});

router.get('/getData', function (req, res, next) {
  
  if (req.query.type) {
   
    if (req.query.type === "小屋快讯") {
      console.log(111)
      var sql = `select * from housedata where type like '${req.query.type}'`
      connect.query(sql, function (err, data) {
        if (err) {
          console.log(err)
        } else {
          res.send({
            arr: data,
            status: "success",
          }
          );
          //console.log(data)
        }
      })
    }
  }
});

module.exports = router;
