const {config} = require('dorenv');
config();
module.exports = {
    // Server configuration
    port: process.env.PORT || 3000, 
    // DAtaBase Confing
    UserDB: process.env.UserDB,
    PassworDB: process.env.PassworDB,
    ServerDB:  process.env.ServerDB,
    DatabaseDB:  process.env.DatabaseDB,
    PortDB:  process.env.PortDB
};
