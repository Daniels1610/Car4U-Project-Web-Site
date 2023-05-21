AWS.config = new AWS.Config();

AWS.config.update({
    accessKeyId: 'AKIAUIDHMFQXT2ABGK6L',
    secretAccessKey: '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',
    region: 'us-east-1'
})

const ses = new AWS.SES();
const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const sendBtn = document.querySelector(".sendbtn");

const sendEmail = async () => {
    const input = {
        Source: email.value,
        Destination : {
            ToAddresses: [
                "car4u.servicenow@gmail.com"
            ]
        },
        Message: {
            Subject: {
                Data: subject.value,
                Charset: "UTF-8",
            },
            Body : {
                Text : {
                    Data : message.value,
                    Charset : "UTF-8"
                }
            }
        }
    }
    ses.sendEmail(input, (err, data) => {
        if (err) {console.log(err, err.stack)} // an error occurred
        else {console.log(data)};
    });
}

const successAlert = () => {
    sendBtn.addEventListener("click", () => {
        Swal.fire(
            'Message Sent',
            'Thank you for contacting us!',
            'success'
        );
    });
}

const main = () => {
    sendBtn.addEventListener("click", () => {
        sendEmail();
        successAlert();
    });
}

main();