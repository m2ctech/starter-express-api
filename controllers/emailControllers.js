const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const eprocTemplate = require('../documents/eproc')
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'Gmail', // Use your email service provider
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

const sendEmail = expressAsyncHandler(async (req, res) => {
  const { email } = req.body;
  console.log(email)

  const mailOptions = {
    from: {

      name: 'Eproc',
      address: process.env.SMTP_MAIL

      },
    to: email,
    subject: 'Welcome',
    text: '',
    html: eprocTemplate(email),
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent successfully!");
      res.send("Email sent successfully!");
    }
  });
});

module.exports = { sendEmail };
