
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');




route.get("/get-all" , async(req,res)=>{
    try{
        let data = await homeController.getAllBlogs()
        if (data) {

            res.status(200).send(`Logged in successfully ${username}`); //all is good

        } else {
            res.status(401).send("error invalid credentials");//user error

        }
    }catch(e){
        res.status(500).send('server error')//develper error
    }
})




module.exports = router;
