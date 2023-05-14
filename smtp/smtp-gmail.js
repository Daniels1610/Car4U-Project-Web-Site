// const nodemailer = require("nodemailer");

const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const sendBtn = document.querySelector(".sendbtn");

const businessAccount = "car4u.servicenow@gmail.com"

sendBtn.addEventListener("click", () => {
    // sendMessage(name.value, email.value, subject.value, message.value);
    Swal.fire(
        'Message Sent',
        'Thank you for contacting us!',
        'success'
    );
});

const sendMessage = async (name, email, subject, message) => {
    let transporter = createTransportObject();

    let info = await transporter.sendMail({
        from: `${name} <${email}>`,
        to : businessAccount,
        subject: subject,
        text: message
    });

    console.log("Message sent: %s", info.messageId);
    
}

const createTransportObject = () => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth : {
            user : businessAccount,
            pass : "kqbjpnfpbewrrltv",

        },
    });

    transporter.verify().then(() => {
        console.log("Ready for send emails");
    })

    return transporter;
}


