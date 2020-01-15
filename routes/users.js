var express = require('express');
var router = express.Router();
const mysql=require("mysql");
var nodemailer = require('nodemailer');
var jwtData = require('./auth/auth.js');
//console.log(jwtData.generateToken());

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "car"
  });

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.token);
  res.send('respond with a resource');
});

router.post("/car/login/customer",jwtData.generateToken,function(req,res){
var formData=req.body;

console.log(formData);

    var sql = "SELECT * FROM customer WHERE email = ? AND upassword =? ";
   
    con.query(sql, [formData.email,formData.password], function (err, result) {

        if (err) throw err;
       res.send({token:req.token,result:result});
      });


});

router.post('/car/customer/register', function(req, res, next) {
 var formData=req.body;
console.log(formData);

    var sql = "INSERT INTO customer (custid,fname,lname,email,contactno,address,upassword) VALUES ?";
    var values =[[formData.custid,formData.fname,formData.lname,formData.email,formData.contact_no,formData.address,formData.password]];
    con.query(sql, [values], function (err, result) {

        if (err) throw err;
       res.send(result);
      });
});

router.post('/car/superviser/register', function(req, res, next) {
var formData=req.body;
console.log(formData);

    var sql = "INSERT INTO employee (supid,supname,contact,email,role,password) VALUES ?";
    var values =[[formData.supid,formData.supname,formData.contact,formData.email,formData.role,formData.password]];
    con.query(sql, [values], function (err, result) {

        if (err) throw err;
       res.send(result);
      });
});


// admin register
router.post('/car/superviser/register', function(req, res, next) {
var formData=req.body;
console.log(formData);

    var sql = "INSERT INTO employee (supid,supname,contact,email,role,password) VALUES ?";
    var values =[[formData.supid,formData.supname,formData.contact,formData.email,formData.role,formData.password]];
    con.query(sql, [values], function (err, result) {

        if (err) throw err;
       res.send(result);
      });
});
//end

//admin Login



// end

// getdata
router.get('/car/admin/getdata', function(req, res, next) {
// var formData=req.body;
// console.log(formData);

    var sql = "SELECT * from employee WHERE role='supervisor'";
   
    con.query(sql, function (err, result) {
        // console.log(result);
        if (err) throw err;
       res.send(result);
      });
});
// end

// delete
router.post('/car/admin/superviserdel', jwtData.verifyToken, function(req, res, next) {
var formData=req.body;
console.log(formData);
if (req.isToken && req.email)
{
 var sql = "delete from employee WHERE supid=?";
   
    con.query(sql, [formData.supid], function (err, result) {

        if (err) throw err;

       res.send(result);
      }); 
}
else
{
    res.send("User is not Authorized.");
}


    
});
//end
// update

router.get('/car/admin/getdata/:id', function(req, res, next) {
  console.log(req.params);
var formData=req.params.id;
// console.log(formData);

    var sql = "SELECT * from employee WHERE supid=? ";
   
    con.query(sql,[formData], function (err, result) {

        if (err) throw err;
       res.send(result);
      });
});

router.post('/car/admin/superviserup', jwtData.verifyToken, function(req, res, next) {
var formData=req.body;
console.log(formData);
if (req.isToken && req.email)
{
  var sql = "update employee set supname='"+formData.supname+"',contact='"+formData.contact+"',email='"+formData.email+"' WHERE supid='"+formData.supid+"'"; 
   console.log(sql);
    con.query(sql, function (err, result) {

        if (err) throw err;
       res.send(result);
      });
}
else
{

 
  res.send("User is not Authorized.");
 
}

    
});

//end

//custreqget
router.get('/car/admin/getdatareq', function(req, res, next) {
// var formData=req.body;
// console.log(formData);

    var sql = "SELECT * from customerreq";
   
    con.query(sql, function (err, result) {
        // console.log(result);
        if (err) throw err;
       res.send(result);
      });
});
// end

// carrequ details
router.get('/car/admin/getreqdetails/:id', function(req, res, next) {
 var reqid=req.params.id;
// console.log(formData);

    var sql = "SELECT model,modelno,engintype,rcno from customerreq WHERE req_id=?";
   
    con.query(sql,[reqid], function (err, result) {
        // console.log(result);
        if (err) throw err;
       res.send(result);
      });
});

// end

//assing request

router.get('/car/admin/avalEmp', function(req, res, next) {


    var sql = "SELECT * from employee";
   
    con.query(sql, function (err, result) {

        if (err) throw err;

       res.send(result);
      });
});

// end

// appointment

router.get('/car/admin/getappoi', function(req, res, next) {
// var formData=req.body;
// console.log(formData);

    var sql = "SELECT * from appointments1";
   
    con.query(sql, function (err, result) {
        // console.log(result);
        if (err) throw err;
       res.send(result);
      });
});

// end

// customer request form

router.post('/car/customer/reguest', jwtData.verifyToken, function(req, res, next) {
var formData=req.body;
console.log(formData);
if (req.isToken && req.email) {
  var sql = "INSERT INTO customerreq (cust_name,city,date,time,cust_serv,model,modelno,engintype,rcno) VALUES ?";
    var values =[[formData.cname,formData.city,formData.date,formData.time,formData.cust_service,formData.modelname,formData.modelno,formData.enginetype,formData.rcno]];
    con.query(sql, [values], function (err, result) {

        if (err) throw err;
       res.send(result);
      });

}
else
{

 
  res.send("User is not Authorized.");
 
}

    
});

// end

// customerService
router.post('/car/customer/service/reguest', jwtData.verifyToken,function(req, res, next) {
var formData=req.body;
console.log(formData);
 if(req.isToken && req.email)
 {
  var sql = "INSERT INTO customerreq (cust_name,city,date,time,cust_serv,model,modelno,engintype,rcno) VALUES ?";
    var values =[[formData.cname,formData.city,formData.date,formData.time,formData.cust_service,formData.modelname,formData.modelno,formData.enginetype,formData.rcno]];
    con.query(sql, [values], function (err, result) {

        if (err) throw err;
       res.send(result);
      });
 }
 else
 {
  res.send("User is not Authorized.");
 }
    
});
// end

module.exports = router;