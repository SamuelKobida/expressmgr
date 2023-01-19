const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT=3000;

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"express",
});


//GET ALL USERS
app.get('/',(req,res )  =>{
   let sql = 'SELECT * FROM users';

   con.query(sql,(error,result) =>{
   if(error){
       res.status(500).json({error});
   }else {
       res.status(200).json({result});
   }
   });
});

//GET SINGLE USER
app.get('/user/:id',(req,res )  =>{
    let id = req.params.id;
    let sql = 'SELECT * FROM users WHERE id = '+id;

    con.query(sql,(error,result) =>{
        if(error){
            res.status(500).json({error});
        }else {
            res.status(200).json({result});
        }
    });
});

//CREATE USER
app.post('/user',(req,res)=>{
     const {first_name, last_name, email, phone_number} = req.body;
     const sqlInsert = 'INSERT INTO users(first_name, last_name, email, phone_number) VALUES (?,?,?,?)';
     con.query(sqlInsert,[first_name, last_name, email, phone_number],(error,result)=>{
         if(error){
             res.status(500).json({error});
         }else {
             res.status(201).json({message:"pouzivatel bol vytvoreny",id:result.insertId});
         }
     });
});

//UPDATE USER
app.put('/user/:id',(req,res)=>{
    let id = req.params.id;
    const {first_name, last_name, email, phone_number} = req.body;
    const sqlUpdate = 'UPDATE users SET first_name=?, last_name=?, email=?, phone_number=? WHERE id = '+id;

    con.query(sqlUpdate,[first_name, last_name, email, phone_number],(error,result)=>{
        if(error){
            res.status(500).json({error});
        }else {
            res.status(201).json({message:"pouzivatel bol updatovany",id: id});
        }
    });
});

//DELETE USER
app.delete('/user/:id',(req,res)=>{
    let id = req.params.id;
    const sqlDelete = 'DELETE FROM users WHERE id = '+id;

    con.query(sqlDelete,(error,result)=>{
        if(error){
            res.status(500).json({error});
        }else {
            res.status(200).json({message:"pouzivatel bol vymazany",succes: true});
        }
    });
});


app.listen(PORT);