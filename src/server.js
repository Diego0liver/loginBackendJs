const express = require('express')
const dotenv = require('dotenv')
const apiroutes = require('./router/api')
const cors = require('cors')


dotenv.config()

const server = express()
server.use(cors())

server.use(express.json())
server.use(apiroutes)



server.use((req, res)=>{
    res.status(404)
    res.json({error: 'Error 404'})
})

const errorHandler = (err, req, res, next) => {
    res.status(400); // 
    console.log(err);
    res.json({ error: 'Ocorreu algum erro.' });
}
server.use(errorHandler);


server.listen(process.env.PORT)