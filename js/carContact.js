const contactForm = {};

contactForm.email = {"S" : `${$("#email").val()}`};
contactForm.subject = {"S" : `${$("#subject").val()}`};
contactForm.message = {"S" : `${$("#message").val()}`};

const sendEmail = (data) => {
    const url = `http://ec2-54-196-205-117.compute-1.amazonaws.com/contact`;
    
    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((response) => {
            return response.json();
        })
        .then(res => {
            console.log(res);
            console.log(res.Id);
        })
        .catch(error => console.log(error));
}

sendEmail(contactForm);
