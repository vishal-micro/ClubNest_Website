const express = require('express');
const cors = require('cors');
const { connectMongodb, RoboticsClub,GateClub,AIIoTClub,SportsClub } = require('./database');
const adminRoute = require('./routes/admin')
const passport = require("passport");
const codingclub = require('./routes/clubs/codingclub')
const bodyParser = require('body-parser');
const app = express();
const multer = require('multer');
const { Admin } = require('./authetication/adminSchema');
const { initializingPassport, isAuthenticated } = require('./authetication/passportConfig');
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const expressSession = require('express-session');
app.use(expressSession({ secret: "bhaskar_warmer_admin!@#123_developer", resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(passport.initialize());
initializingPassport(passport);


connectMongodb();
app.use(cors());
app.use('/',adminRoute);
app.use('/', codingclub)


// start user and admin registration 
// REGISTER ADMIN
app.post('/register', async (req, res) => {
    const admin = await Admin.findOne({ username: req.body.username });
    if (admin) return res.status(400).send('This admin is already exists');
    const newAdmin = await Admin.create(req.body);
    res.status(201).send(newAdmin);
});

// admin login
app.post('/login', passport.authenticate("admin", {
    failureMessage: "Wrong Id Password",
    successMessage: 'successfully logged in',
    successRedirect: 'http://127.0.0.1:5500/frontend/Admin/admin.html'
}), async (req, res) => {
    // Handle successful admin authentication
});
// end user and admin registration




// start of events api
// const alleventsStorage = multer.diskStorage({
//     destination: './club_images',
//     filename: function (req, file, cb) {
//         cb(null, req.body.name_of_events + 'club_' + '.jpeg');
//     },
// });

// const alleventsUpload = multer({ storage: alleventsStorage }).single('dispImage');

// app.post('/all-events', async (req, res) => {
//     try {
//         alleventsUpload(req, res, async (err) => {
//             if (err) {
//                 return res.status(500).send('Internal Server Error');
//             }
//             const newImage = new AllEvents({
//                 name_of_events: req.body.name_of_events,
//                 name_of_host_institute:req.body.name_of_host_institute,
//                 no_of_student_of_participated_in_event:req.body.no_of_student_of_participated_in_event,
//                 Date_of_event_start:req.body.Date_of_event_start,
//                 Date_of_event_end:req.body.Date_of_event_end,
//                 Details_of_prizes_won:req.body.Details_of_prizes_won,
//                 Venue:req.body.Venue,
//                 Speaker:req.body.Speaker,
//                 Objective:req.body.Objective,
//                 dispImage: req.body.name_of_events
                
//             });

//             await newImage.save();
//             res.send('Successfully done');
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// });



// app.get('/all-events', async(req, res) => {
//     try{
//         const value = await AllEvents.find();
//         res.send(value);
//     }catch(e){
//         console.error("errr",e);
//         }
// });
// end of events api            




// robotics club Api start
const roboticsStorage = multer.diskStorage({
    destination: './club_images',
    filename: function (req, file, cb) {
        cb(null, req.body.name_of_events + 'club_' + '.jpeg');
    },
});

const roboticsUpload = multer({ storage: roboticsStorage }).single('dispImage');

app.post('/robotics-club', async (req, res) => {
    try {
        roboticsUpload(req, res, async (err) => {
            if (err) {
                return res.status(500).send('Internal Server Error');
            }
            const newImage = new RoboticsClub({
                name_of_events: req.body.name_of_events,
                name_of_host_department:req.body.name_of_host_department,
                no_of_student_of_participated_in_event:req.body.no_of_student_of_participated_in_event,
                Date_of_event_start:req.body.Date_of_event_start,
                Date_of_event_end:req.body.Date_of_event_end,
                Price_Certification:req.body.Price_Certification,
                Venue:req.body.Venue,
                Speaker:req.body.Speaker,
                Objective:req.body.Objective,
                dispImage: req.body.name_of_events
                
            });

            await newImage.save();
            res.send('Successfully done');
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});



app.get('/robotics-club', async(req, res) => {
    try{
        const value = await RoboticsClub.find();
        res.send(value);
    }catch(e){
        console.error("errr",e);
    }
});
// end of robotics club api




//start of gate club api
const gateStorage = multer.diskStorage({
    destination: './club_images',
    filename: function (req, file, cb) {
        cb(null, req.body.name_of_events + 'club_' + '.jpeg');
    },
});

const gateUpload = multer({ storage: gateStorage }).single('dispImage');

app.post('/gate-club', async (req, res) => {
    try {
        gateUpload(req, res, async (err) => {
            if (err) {
                return res.status(500).send('Internal Server Error');
            }
            const newImage = new GateClub({
                name_of_events: req.body.name_of_events,
                name_of_host_department:req.body.name_of_host_department,
                no_of_student_of_participated_in_event:req.body.no_of_student_of_participated_in_event,
                Date_of_event_start:req.body.Date_of_event_start,
                Date_of_event_end:req.body.Date_of_event_end,
                Price_Certification:req.body.Price_Certification,
                Venue:req.body.Venue,
                Speaker:req.body.Speaker,
                Objective:req.body.Objective,
                dispImage: req.body.name_of_events
                
            });

            await newImage.save();
            res.send('Successfully done');
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});



app.get('/gate-club', async(req, res) => {
    try{
        const value = await GateClub.find();
        res.send(value);
    }catch(e){
        console.error("errr",e);
    }
});
// end of gateclub api




//start of Aiclub api
const aiiotStorage = multer.diskStorage({
    destination: './club_images',
    filename: function (req, file, cb) {
        cb(null, req.body.name_of_events + 'club_' + '.jpeg');
    },
});

const aiiotUpload = multer({ storage: aiiotStorage }).single('dispImage');

app.post('/aiiot-club', async (req, res) => {
    try {
        aiiotUpload(req, res, async (err) => {
            if (err) {
                return res.status(500).send('Internal Server Error');
            }
            const newImage = new AIIoTClub({
                name_of_events: req.body.name_of_events,
                name_of_host_department:req.body.name_of_host_department,
                no_of_student_of_participated_in_event:req.body.no_of_student_of_participated_in_event,
                Date_of_event_start:req.body.Date_of_event_start,
                Date_of_event_end:req.body.Date_of_event_end,
                Price_Certification:req.body.Price_Certification,
                Venue:req.body.Venue,
                Speaker:req.body.Speaker,
                Objective:req.body.Objective,
                dispImage: req.body.name_of_events
                
            });

            await newImage.save();
            res.send('Successfully done');
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/aiiot-club', async(req, res) => {
    try{
        const value = await AIIoTClub.find();
        res.send(value);
    }catch(e){
        console.error("errr",e);
    }
});
// end of AIclub api




// start of Sportsclub api
const sportsStorage = multer.diskStorage({
    destination: './club_images',
    filename: function (req, file, cb) {
        cb(null, req.body.name_of_events + 'club_' + '.jpeg');
    },
});

const sportsUpload = multer({ storage: sportsStorage }).single('dispImage');

app.post('/sports-club', async (req, res) => {
    try {
        sportsUpload(req, res, async (err) => {
            if (err) {
                return res.status(500).send('Internal Server Error');
            }
            const newImage = new SportsClub({
                name_of_events: req.body.name_of_events,
                name_of_host_department:req.body.name_of_host_department,
                no_of_student_of_participated_in_event:req.body.no_of_student_of_participated_in_event,
                Date_of_event_start:req.body.Date_of_event_start,
                Date_of_event_end:req.body.Date_of_event_end,
                Price_Certification:req.body.Price_Certification,
                Venue:req.body.Venue,
                Speaker:req.body.Speaker,
                Objective:req.body.Objective,
                dispImage: req.body.name_of_events
                
            });

            await newImage.save();
            res.send('../frontend/Necessary/SDM.html');
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/sports-club', async(req, res) => {
    try{
        const value = await SportsClub.find();
        res.send(value);
    }catch(e){
        console.error("errr",e);
    }
});
// end of Sportsclub api




app.get('/hello-world',(req,res)=>{
    res.send("Hello world4");
})

const PORT = process.env.PORT || 8000
app.listen(PORT,()=>{
    console.log('listening on port 3000');
})

