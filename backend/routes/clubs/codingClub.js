const express = require('express');
const router = express.Router()
const multer = require('multer')
const {isAuthenticatedAdmin} = require('../../authetication/passportConfig.js');
const {CodingClub} = require('../../database.js')
// new 
//const express = require('express');
const cors = require('cors');
// const { connectMongodb, RoboticsClub } = require('./database');
// const route = require('./routes/admin')
// const codingclub = require('./routes/clubs/codingclub')
const bodyParser = require('body-parser');
const app = express();
// const multer = require('multer');
// app.use(bodyParser.json());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }))

const codingStorage = multer.diskStorage({
    destination: './club_images',
    filename: function (req, file, cb) {
        cb(null, req.body.name_of_events + 'club_' + '.jpeg');
    },
});

const codingUpload = multer({ storage: codingStorage }).single('dispImage');

router.post('/coding-club', async (req, res) => {
    try {
        codingUpload(req, res, async (err) => {
            if (err) {
                return res.status(500).send('Internal Server Error');
            }
            const newImage = new CodingClub({
                name_of_events: req.body.name_of_events,
                name_of_host_department:req.body.name_of_host_department,
                no_of_student_of_participated_in_event:req.body.no_of_student_of_participated_in_event,
                Date_of_event_start:req.body.Date_of_event_start,
                Date_of_event_end:req.body.Date_of_event_end,
                Price_Certification:req.body.Price_Certification,
                Venue:req.body.Venue,
                Speaker:req.body.Speaker,
                Objective:req.body.Objective,
                Upload_image: req.body.name_of_events
                
            });

            await newImage.save();
            res.send('Succefully Done');
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


router.get('/coding-club', async (req, res) => {
    try {
        const value = await CodingClub.find();
        res.send(value);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send('Internal Server Error');
    }
});


module.exports = router;