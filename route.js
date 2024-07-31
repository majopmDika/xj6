const Router=require('express');
const router = Router();

//status api enpointment
router.get('/api-status', (req, res)=>{
    res.send({'status': 'on'});
});

//import routes
const authRoutes = require('./modules/auth/routes/auth.routes.js');

//user routes
router.use(authRoutes);
module.exports = router;