const nodemailer = require("nodemailer");
const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        password: process.env.MAIL_PASSWORD,
      },
    });
    
    let info = await transporter.sendMail({
      from: "amanmalviya258@gmail.com",
      to: email,
      subject:title,
      html: body,
    });
    console.log(info);
    return info;
  } catch (err) {
    console.error(err);
  }
};

module.exports = mailSender;
