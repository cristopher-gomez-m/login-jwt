const express= require('express');
const dotenv= require('dotenv');
const cookieParser= require('cookie-parser');


const app= express();

//seteamos el motor de plantilla

app.set('view engine', 'ejs');

//seteamos la carpeta public para archivos estaticos

app.use(express.static('public'));

//para procesar informacion enviado desde el form
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//seteamos las variables de entorno
dotenv.config({path: './env/.env'})

//para poder trabajar con lass cookies

app.use(cookieParser())


//Para eliminar el cache y que no se pueda volver con el boton de back luego de cerrar sesion
app.use(function(req,res,next){
    if(!req.user)
        res.header('Cache-Control','private,no-cache,no-store,must-revalidate');
        next()
});


//llamar al router
app.use('/',require('./routes/router'))

/*app.get('/',(req,res)=>{
    res.render('index');
});

*/






app.listen(3000,()=>{
    console.log('server up');
});