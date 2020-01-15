var jwt = require('jsonwebtoken');
const secretKey = "sandy@#?123@??++";
const generateToken =function (req,res,next)
{
	const token = jwt.sign({email:req.body.email,role:req.body.role}, secretKey);
	console.log(token);
	
	req.token=token;
	next();
}
const verifyToken = function(req,res,next)
{
	console.log(req.headers);
	if(req.headers.authorization)
	{
		const token = req.headers.authorization;
		const isVeriyfy = jwt.verify(token,secretKey);
		req.email = isVeriyfy.email;
		
		req.isToken = true;
	}
	else
	{
		req.isToken = false;
	}
	next();
}

module.exports = {generateToken,verifyToken};