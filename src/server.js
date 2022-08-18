import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import route from "./routes/index";
import mongoose from "mongoose";
import { reset } from "nodemon";
import node from "@babel/register/lib/node";


const nodemailer = require("nodemailer");
const app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());
app.get('/',(req,res) => {
  reset.send('hello fio!')
})
app.post('/',async(req,res) =>{
  const {email} = req.body;

  let transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    secure:false,
    auth:{
      user:'username@gmail.com', 
      pass: 'app password',
    }
  });
  const msg ={
    from:'"the Express App" <fabykalifa@gmail.com>',
    to: "${delicefion@gmail.com}",
    subject:"hello",
    text:"hey you"
  }
  const info = await transporter.sendMail(msg);
  console.log("message sent:%s", info.messageId);
  console.log("preview URL:%s",nodemailer.getTestMessageUrl(info));
  res.send("email.sent")
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