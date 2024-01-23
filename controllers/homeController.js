const Blog = require("../models/Blog");

const getAllItems = async()=>{
    try{
        let data = await Blog.find()//find({})
        if (data) {
            console.log(data);
        }
        else {
            console.log("Sorry ! ERROR in getAllItems on homeController");
        }
    } catch (error) {
        console.error('Error during getAllItems', error);
    
    }
}


module.exports ={getAllItems};
