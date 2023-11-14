const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('http://localhost:3000/', (req, res) => {
    const { to, subject, text } = req.body;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'bolanabil404@gmail.com',
        pass: 'bola_M#_h21_g1g',
    },
});

const mailOptions = {
    from: 'bolanabil404@gmail.com',
    to,
    subject,
    text,
};

transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send(error.toString());
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
