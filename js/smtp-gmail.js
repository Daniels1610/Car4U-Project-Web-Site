const nodemailer = require("nodemailer");

const main = async () => {
    let transporter = createTransportObject();

    let info = await transporter.sendMail({
        from: "Fabian Heredia <fabianh@gmail.com>",
        to : "daniel.agraz@cetys.edu.mx",
        subject: "Car Complaint",
        text: "I was gave the Nissan Versa 2015, with Michoacan's plates and it was awful ..."
    });

    console.log("Message sent: %s", info.messageId);
}

const createTransportObject = () => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth : {
            user : "daniel.agraz16@gmail.com",
            pass : "oxuldonhlbbrxzzu",

        },
    });

    transporter.verify().then(() => {
        console.log("Ready for send emails");
    })

    return transporter;
}

main().catch(console.error);

