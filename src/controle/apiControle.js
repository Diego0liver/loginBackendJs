const Login = require('../instancia/models')
const JWT = require('jsonwebtoken');
const dotenv  = require('dotenv')

dotenv.config()


exports.registro = async (req, res)=>{
    if(req.body.nome && req.body.email && req.body.password){
        let{nome, email, password} = req.body
        let user = await Login.findOne({where:{email}})
        if(!user){
            let newUser = await Login.create({nome, email, password})
           
            res.status(201)
            res.send({id: newUser.id})
            
        }else{
            res.status(401).send({error: 'E-mail ja existe'})
        }
    }
}


exports.login = async (req, res) =>{
    if(req.body.email && req.body.password ){
        let email = req.body.email
        let password = req.body.password

        let user = await Login.findOne({where:{email, password}})
        if(user){
         const token = JWT.sign(
            { id: user.id, email: user.email },
             process.env.JWT_KEY,
             {expiresIn: '24hr'}
         )
           return res.status(200).send({
            token: token, email: user.email, nome: user.nome
           })
        }
    }
    res.json({status: false})
}

