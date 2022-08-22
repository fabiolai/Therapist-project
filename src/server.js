import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import route from "./routes/index";
import mongoose from "mongoose";
import { reset } from "nodemon";
//import node from "@babel/register/lib/node";


const nodemailer = require("nodemailer");
const smtpTransport = require('nodemailer-smtp-transport');
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(bodyParser.json());
app.get('/',(req,res) => {
  reset.send('hello fio!')
})
app.post('/sendEmail',(req,res) =>{
  let {email} = req.body;
  console.log(email);
  console.log(`email mfite niyingiyi ${email}`);



    
  const mailerOption ={

  let transporter = nodemailer.createTransport({

    host:"smtp.gmail.com",
    port:587,
    secure:false,
    auth:{
      user:'username@gmail.com', 
      pass: 'app password',
    

    }
  });
  
    from:'"the Express App" <fabykalifa@gmail.com>',
    to: `${email}`,
    subject:"sending email using nodeMailer",
    text:"hey would you like to come"
  };
  transporter.sendMail(mailerOption, function(error,info){
    if (error){
      console.log("error"+error);
      res.send("Email not send successful");
    }
    else{
      console.log("Email send successfuly");
    }
  })

  // const info = await transporter.sendMail(msg);
  // console.log("message sent:%s", info.messageId);
  // console.log("preview URL:%s",nodemailer.getTestMessageUrl(info));
  // res.send("email.sent")
})
app.use("/", route);
const database = process.env.DATABASE;
mongoose
  .connect(database, { useNewURLParser: true, useUnifiedTopology: true, 
})
  .then(() => {
    console.log("Database is well connect!");
  });

//configuration of server
const port = process.env.PORT || 4040; 
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

export default app;