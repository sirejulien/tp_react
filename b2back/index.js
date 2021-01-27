var express = require('express')
var bodyParser=require('body-parser')
var mongoose = require('mongoose')
var routerUsers = require('./routers/users')

var app = express()

mongoose.Promise = Promise
mongoose.connect('mongodb+srv://admin:admin@cluster0.4g3yo.mongodb.net/tpreact?retryWrites=true&w=majority',
{useNewUrlParser: true,useUnifiedTopology: true})

var db= mongoose.connection
db.on('error', console.error.bind(console,'connection error'))
db.once('open', ()=> console.log('connection to mongodb atlas'))

app.use((req, res, next) => {​​​​​​​
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');
    next();
    }​​​​​​​)

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/users', routerUsers)

app.get('/',(req,res) => {
    res.send({status:'running'})
})

app.listen(3001, () => {
    console.log("listenning on port 3001")
})