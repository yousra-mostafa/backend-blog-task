const User = require("../models/User");


async function login(username) {
    try {
    
        const user = await User.findOne({ username });

        if (user) {
            return user.password;
        } else {
            console.log("eror");
        }
    } catch (error) {
        console.error('Error during login', error);
    
    }
}

const Register = async (username, password) => {
    try {
        let data = await User.create({ username: username, password: password });
        if (data) {
            console.log("done")
        }
        else {
            console.log("error");
        }
    }
    catch (e) {
        console.log(e);

    }

}

async function follow(userId, authorId) {
    try {
        // Check if the user is trying to follow themselves
        if (userId.toString() === authorId.toString()) {
            throw new Error("You can't follow yourself");
        }

        // Check if the user is already following the author
        const user = await User.findById(userId);
        if (user.followedAuthors.includes(authorId)) {
            throw new Error("You are already following this author");
        }

        // Add the author to the followedAuthors array
        user.followedAuthors.push(authorId);
        await user.save();

        return { success: true, message: 'Successfully followed the author' };
    } catch (error) {
        console.log(error);

        throw error;
    }
}
//$pull operator to remove the specified authorId from the followedAuthors array 
async function unfollow(userId, authorId) {
    try {
        // Remove the author from the followedAuthors array
        await User.findByIdAndUpdate(userId, {
            $pull: { followedAuthors: authorId },
        });

        return { success: true, message: 'Successfully unfollowed the author' };
    } catch (error) {
        throw error;
    }
}










module.exports = {
    follow,
    unfollow,
    login,
    Register,
};