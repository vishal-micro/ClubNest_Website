const express = require('express');
const routes = express.Router()
const { Admin } =require('../authetication/adminSchema');
routes.post('/admin', async (req, res) => {
    try {
        
            
            const newadmin = new Admin({
                username:req.body.username,
                password:req.body.password,
            });

            await newadmin.save();
            res.send('Successfully done');
        
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});



routes.get('/Admin', async(req, res) => {
    try{
        const value = await Admin.find();
        res.send(value);
    }catch(e){
        console.error("errr",e);
    }
});

module.exports = routes;