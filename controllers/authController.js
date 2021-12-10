const jwt= require('jsonwebtoken')
const bcryptjs= require('bcryptjs')
const conexion= require('../database/db')
const {promisify} = require('util')

//metodo para registrarnos

exports.register= async (req,res)=>{

    try {
        const name= req.body.name
        const user= req.body.user
        const pass=req.body.pass
        let hash= await bcryptjs.hash(pass,8)

        conexion.query('INSERT INTO users SET ?',{user:user,name:name,pass:hash},(error,result)=>{
            if(error){console.log(error)}
            res.redirect('/')
        })
    } catch (error) {
        console.log(error)
    }


}

exports.login= async(req,res)=>{

    try {
        const user =req.body.user
        const pass= req.body.pass
        console.log(user+"-"+pass)
    
        if(!user || !pass){
            res.render('login',{
                alert:true,
                alertTitle:"Advertencia",
                alertMessage:"Ingrese un usuario y contraseña",
                alertIcon:'info',
                showConfirmButton:true,
                timer:false,
                ruta:'login',
            })
        }
    } catch (error) {
        
    }

}