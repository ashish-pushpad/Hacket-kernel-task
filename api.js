import './connection.js'

import express from 'express'
import path from "path"
import url from 'url'
import bodyParser from 'body-parser'
import User from './model/user.model.js'
import db from './connection.js'
import { UserData } from './controller/user.contoller.js'
const app=express();


import UserRouter from './router/user.router.js';
import TaskRouter from './router/task.router.js'
// const __dirname= url.fileURLToPath(new URL('.',import.meta.url));
// const staticpath = path.join(__dirname,'views');
// console.log(__dirname);



app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/user',UserRouter);
app.use('/task',TaskRouter);


app.set('view engine','hbs');
app.set('views','./views');


app.get('/',(req,res)=>{
   res.render('home');
});

app.get('/createuser',(req,res)=>{
    
  res.render('createUser');

});

app.get('/assignTask',async(req,res)=>{
    const userdata=await UserData();
    res.status(200).render("asignTask",{userdata});
});




;(async () => {
  try {
    await db.raw('SELECT 1');
    console.log('Database connection successfully!');
  } catch (err) {
    console.error(' Connection error:', err.message);
  }
})();


app.listen(3000,()=>{
    console.log("app is listing in the port 3000")
})