const express = require("express")
const { constant } = require("lodash")
const app = express()
const path = require("path")
const tempelatePath=path.join(__dirname,'../frontend')
const userData = require('./mongo')
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const twilio = require('twilio');


let user = '';

app.use(bodyParser.json());
app.use(express.json())
app.set("view engine","hbs")
app.set("views",tempelatePath)
app.use(express.urlencoded({extended:false}));


app.get("/", (req,res) => {
    res.render("adarsh")
}
)

// const accountSid = 'AC9bf4bbf23ff5d48c5238f80fbb57b5ed';
// const authToken = '75596088ca08045f6a34ea6f5490bfb7';
// const twilioClient = new twilio(accountSid, authToken);

app.post('/signup', async (req,res) => {
const message = 'hello detective'

     const otp = () => {
        let random = Math.floor(Math.random()*9000 + 1000 );
        return random;
    }
    OTP = JSON.stringify(otp());
     user = {
        userId: req.body.email,
        otpG: OTP
     }
    console.log(user);
    await userData.insertMany([user]);

        // Email configuration
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'adarsh0727@gmail.com',
                pass: 'zacu czma ojbk xjas'
            }
        });
    
        const mailOptions = {
            from: 'adarsh0727@gmail.com',
            to: `${user.userId}`,
            subject: 'Your OTP',
            text: `Your OTP is: ${user.otpG}`
        };
    
        // // Send email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error occurred:', error);
                res.status(500).json({ success: false, message: 'Failed to send OTP.' });
            } else {
                console.log('Email sent:', info.response);
                res.render('otp');
            }
        });

    //     //send mail
    //     twilioClient.messages
    //     .create({
    //         body: message,
    //         from: '7521904620',
    //         to: `${user.userId}`
    //     })
    //     .then(message => console.log(message.sid))
    //     .catch(error => console.log(error));

    // res.render('otp');

    
})

app.post('/verify', (req, res) => {
    const otpR = req.body.otp;
    if(otpR===user.otpG){
        res.status(200).send("OK baby")
    }else{
        res.status(200).send("no baby")
    }

})
app.listen(9000, () =>{
    console.log('Connected to: 9000')
}
)
                          

