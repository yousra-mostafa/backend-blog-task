const Blog = require("../models/Blog");

const CreateBlog = async (_title, _body,_photo,_author, _tags) => {
    try {
        let Blogdata = await Blog.create({ title: _title, body: _body,photo: _photo,author: _author, tags: _tags})
        if (Blogdata) {
            console.log(Blogdata);
        }
        else {
            console.log("Sorry ! ERROR in CreateBlog");
        }
    } catch (error) {
        console.error(error);
    
    }
}

const DeleteBlog = async (_title) => {

    try {
        let blogData = await Blog.deleteOne({title: _title})
        if (blogData) {
            console.log("successfully deleted Blog");
        }else{
            console.log("Sorry ! ERROR in DeleteBlog");
            
        }
    }
    catch (error) {
        console.error(error);
        
    }

}



const UpdateBlog = async (_title, _body, _photo, _tags) => {
    try {
        let Blogdata = await Blog.updateOne(
            { title: _title },
            { $set: { body: _body, photo: _photo, tags: _tags } }
        );

        if (Blogdata) {
            console.log("Updated Successfully");
            console.log(Blogdata);
        }
    } catch (error) {
        console.error(error);
    }
};






module.exports ={CreateBlog,DeleteBlog,UpdateBlog};