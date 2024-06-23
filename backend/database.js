const mongoose = require('mongoose');
const dotenv =require("dotenv");
dotenv.config({path:'.env'});

const connectMongodb=()=>{
    mongoose.connect(process.env.MONGODB_URI,{})
    .then(e=>{
        process.stdout.write(`Connect to MongoDB Successfully: ${e.connection.port}`)
    })
    .catch(e=>{
        process.stdout.write(`Error DB connectivity ${e}`);
    })
}



//coding club schema.
const CodingClubSchema = new mongoose.Schema({
     name_of_events: {
        type: String,
        required: true,
        unique:true, 
    },
     name_of_host_department: {
         type: String,
         required: true,
     },
    no_of_student_of_participated_in_event: {
         type: String,
         required:true
     },

     Price_Certification: {
         type: String,
     },
     Date_of_event_start: {
         type: Date,
     },
     Date_of_event_end: {
         type: Date,
     },
     Upload_image: {
        type: String, 
     },
     Venue:{
         type:String,
         required:true
     },
     Speaker:{
         type:String,
         required:true
     } ,
     Objective:{
         type:String 
     }
});

const CodingClub = mongoose.model("CodingClub", CodingClubSchema);


// end of codingclub schema



// start of robotics schema

const RoboticsClubSchema = new mongoose.Schema({
    name_of_events: {
        type: String,
        required: true,
    },
    name_of_host_department: {
        type: String,
        required: true,
    },
    no_of_student_of_participated_in_event: {
        type: String,
        required: true,
    },

    Price_Certification: {
        type: String,
    },
    Date_of_event_start: {
        type: Date,
    },
    Date_of_event_end: {
        type: Date,
    },
    dispImage: {
        type: String, 
    },
    Venue:{
        type:String,
        required:true
    },
    Speaker:{
        type:String,
        required:true
    } ,
    Objective:{
        type:String 
    }
});
const RoboticsClub = mongoose.model("RoboticsClub", RoboticsClubSchema);


// end of roboticsclub


// start of gate club

const GateClubSchema = new mongoose.Schema({
    name_of_events: {
       type: String,
       required: true,
       unique:true, 
    },
    name_of_host_department: {
        type: String,
        required: true,
    },
    no_of_student_of_participated_in_event: {
        type: String,
        required:true
    },

    Price_Certification: {
        type: String,
    },
    Date_of_event_start: {
        type: Date,
    },
    Date_of_event_end: {
        type: Date,
    },
    dispImage: {
       type: String, 
    },
    Venue:{
        type:String,
        required:true
    },
    Speaker:{
        type:String,
        required:true
    } ,
    Objective:{
        type:String 
    }
});

const GateClub = mongoose.model("GateClub", GateClubSchema);
//end of gate club schema



// start of ai club
const AIIoTClubSchema = new mongoose.Schema({
    name_of_events: {
       type: String,
       required: true,
       unique:true, 
    },
    name_of_host_department: {
        type: String,
        required: true,
    },
    no_of_student_of_participated_in_event: {
        type: String,
        required:true
    },

    Price_Certification: {
        type: String,
    },
    Date_of_event_start: {
        type: Date,
    },
    Date_of_event_end: {
        type: Date,
    },
    dispImage: {
       type: String, 
    },
    Venue:{
        type:String,
        required:true
    },
    Speaker:{
        type:String,
        required:true
    } ,
    Objective:{
        type:String 
    }
});

const AIIoTClub = mongoose.model("AIIoTClub", AIIoTClubSchema);
//end of ai club schema



//start of sports club schema
const SportsClubSchema = new mongoose.Schema({
    name_of_events: {
       type: String,
       required: true,
       unique:true, 
    },
    name_of_host_department: {
        type: String,
        required: true,
    },
    no_of_student_of_participated_in_event: {
        type: String,
        required:true
    },

    Price_Certification: {
        type: String,
    },
    Date_of_event_start: {
        type: Date,
    },
    Date_of_event_end: {
        type: Date,
    },
    dispImage: {
       type: String, 
    },
    Venue:{
        type:String,
        required:true
    },
    Speaker:{
        type:String,
        required:true
    } ,
    Objective:{
        type:String 
    }
});

const SportsClub = mongoose.model("SportsClub", SportsClubSchema);
//end of sports club schema


// //events schema
// const AllEventsSchema = new mongoose.Schema({
//     name_of_events: {
//        type: String,
//        required: true,
//        unique:true, 
//    },
//     name_of_host_institute: {
//         type: String,
//         required: true,
//     },
//    no_of_student_of_participated_in_event: {
//         type: String,
//         required:true
//     },

//     Details_of_prizes_won: {
//         type: String,
//     },
//     Date_of_event_start: {
//         type: Date,
//     },
//     Date_of_event_end: {
//         type: Date,
//     },
//     dispImage: {
//        type: String, 
//     },
//     Venue:{
//         type:String,
//         required:true
//     },
//     Speaker:{
//         type:String,
//         required:true
//     } ,
//     Objective:{
//         type:String 
//     }
// });

// const AllEvents = mongoose.model("AllEvents", AllEventsSchema);


module.exports = {
    
   //AllEvents: AllEvents,
    SportsClub: SportsClub,
    AIIoTClub: AIIoTClub,
    GateClub: GateClub,
    RoboticsClub: RoboticsClub,
    CodingClub: CodingClub,
    connectMongodb:connectMongodb
};

