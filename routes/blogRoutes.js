const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');


route.post('/add-blog' , async(req,res)=>{
    //_title, _body,_author, _tags
    try{
        let {title,body,author,tags} = req.body//destructuring 
        let data = await blogController.CreateBlog(title,body,author,tags)
        
        if (data) {

            res.status(200).send(`added successfully ${title}`); //all is good

        } else {
            res.status(401).send("error");//user error

        }
    }catch (error) {
        res.status(500).send('server error');//develper error

    }
    
})







module.exports = router;