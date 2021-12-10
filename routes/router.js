const express = require('express')
const router= express.Router()
const authController=require('../controllers/authController')
const conexion= require('../database/db')

//Router para las vistas
router.get('/',(req,res)=>{
    res.render('index')
})
router.get('/login',(req,res)=>{
    res.render('login')
})
router.get('/register',(req,res)=>{
    res.render('register')
})

//Router para los metodos del controller
router.post('/register',authController.register)
router.post('/login',authController.login)
module.exports = router