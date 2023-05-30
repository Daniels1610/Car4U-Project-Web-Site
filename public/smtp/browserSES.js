const ses = new AWS.SES();
const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const sendBtn = document.querySelector(".sendbtn");

const sendEmail = async () => {
    // TODO: DELETE ME ONCE IT WORKS AWS SES
    const formData = {
        receiver: email.value,
        subject: subject.value,
        message: message.value
    }
    const response = await fetch('/smtp/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

    return
    // TODO: END 

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