const getConnection = require('../../../insteface/DBconn.js');

class User {
   constructor(fullname,user,gmail,password,status){
    this.fullname = fullname
    this.user = user
    this.gmail = gmail
    this.password = password
    this.status = status
   }
        
async createUser(){
    const connection = await getConnection();
    try{
        const [result] = await connection.query(
            `INSERT INTO usuarios
            (nombre_completo,usuario,gmail,contrasena,estado)
            VALUES (?,?,?,?,?)`,
            [this.fullname,this.user,this.gmail,this.password, this.status]
        );

        const userId= result.insertId;

        return {id: userId};

    }catch(error){
        console.log(error);
        throw{
            ok:false,
            statusCode:500,
            data: 'Ocurrio un error al insertar el usuario'
        }
    }finally{
        connection.release();
    }
}


async viewUsers() {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de selección
      const [result] = await connection.query(`
        SELECT 
        id,
        nombre_completo as fullname,
        usuario as user,
        gmail as gmail,
        contrasena as password,
        estado as status 
        FROM usuarios
      `);

      return result; // Devuelve el resultado de la consulta
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al obtener los usuarios'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }

async updateUser(userId) {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de actualización
      await connection.query(`
        UPDATE usuarios
        SET nombre_completo = ?,
        usuario = ?,
        gmail = ?,
        contrasena = ?,
        estado = ?
        WHERE usuario = ?
      `, [this.fullName, this.documentType, this.documentNumber, this.role, this.status, userId]);

      return { id: userId }; // Devuelve el ID del usuario actualizado
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al actualizar el usuario'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }

  async deleteUser(userId) {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de eliminación
      await connection.query(`
        DELETE FROM usuarios
        WHERE usuario = ?
      `, [userId]);

      return { id: userId }; // Devuelve el ID del usuario eliminado
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al eliminar el usuario'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }
}

module.exports = User;