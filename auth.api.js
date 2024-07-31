const ResponseBody = require('../../../shared/model/ResponseBody.model.js');
const {createUser} = require("../controller/auth.controller.js")

const createUserAPI= async (req, res) => {
    let { fullname,user,gmail,password,status} = req.body;
    if( !fullname || !user|| !gmail|| !password|| !status) {
        return res.status(400).send (new ResponseBody(400, 'Los campos son requeridos'));
    
    }

    let message;

    try{
        let response =await createUser({fullname,user,gmail,password,status});
        message= new ResponseBody(true,200, response);
    }catch(error){
        if(error.statusCode){
            message= new ResponseBody(false,error.statusCode,error.data);
        }else {
            console.log(error);
            message = new ResponseBody(
                false,
                500,
                "Ocurrio un error al insertar el usuario"
            );
        }
    }
};


module.exports = {
    createUserAPI
};