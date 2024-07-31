const User = require('../models/user.model.js');

async function createUser(data){
    const user = new User(data.fullname,data.user,data.gmail,data.password,data.status);

    let userResult;
    try{
        userResult = await user.createUser();
        return userResult;
    }catch(error){
        if(error.statusCode){
            throw error;
        }else {
            throw {
                ok: false,
                statusCode: 500,
                data: "Ocurrio un error al insertar el usuario"
            }
        }
    }

    return{
        message: 'usuario creado exitosamente'
    };
}

module.exports = {
    createUser,
}