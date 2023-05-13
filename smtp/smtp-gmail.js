const nodemailer = require("nodemailer");
const swal = require('sweetalert2');

const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = doucment.getElementById("subject");
const message = document.getElementById("message");
const sendBtn = doucment.querySelector(".send-btn");

const businessAccount = "car4u.servicenow@gmail.com"

sendBtn.addEventListener("click", () => {
    alert("you click this button");
    // sendMessage(name.value, email.value, subject.value, message.value);
    // swal.fire(
    //     'Message Sent',
    //     'Thank you for contacting us!',
    //     'success'
    // );
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

// main().catch(console.error);

