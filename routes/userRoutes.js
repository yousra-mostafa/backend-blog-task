const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const bcrypt = require('bcrypt');


route.post('/register', async (req, res) => {
    try {//pass 111111111  
        let { username, password} = req.body;
        bcrypt.hash(password, 10, async function (err, hash) {
            let data = await userController.Register(username, hash);
            if (data) {
                console.log(data);
                res.status(200).send('user was registered successfully');//all is good
            }
            else {
                res.status(403).send("data error");//user error
            }
        });
    } catch (error) {
        res.status(500).json("internal server error");//develper error
    }
});

route.post('/login', async (req, res) => {
    try {
        console.log(req.body);
        let { username, password } = req.body;

        const hashPass = await userController.login(username);

        const passwordMatch = await bcrypt.compare(password, hashPass);

        if (passwordMatch) {

            res.status(200).send(`Logged in successfully ${username}`); //all is good

        } else {
            res.status(401).send("error invalid credentials");//user error

        }



    } catch (error) {
        res.status(500).send('server error');//develper error

    }

});



route.post('/follow', async (req, res) => {
    try {
        const { userId, authorId } = req.body;
        const result = await userController.follow(userId, authorId);
        res.status(200).send("ok done follow");
    } catch (error) {
        res.status(500).send("error in follow");
    }
});

route.post('/unfollow', async (req, res) => {
    try {
        const { userId, authorId } = req.body;
        const result = await userController.unfollow(userId, authorId);
        res.status(200).send("ok done unfollow");
    } catch (error) {
        res.status(500).send("error in unfollow");
    }
});




module.exports = router;