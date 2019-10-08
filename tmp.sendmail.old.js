const sgMail = require('@sendgrid/mail') // SendGrid's v3 https://github.com/sendgrid/sendgrid-nodejs
sgMail.setApiKey(process.env.SENDGRID_API_KEY) // API key should come from Netlify environment variables

// Create a POST route, receive the form fields and send the email with sendgrid to my email account
server.post("/sendmail", (req, res) => {
  const msg = {
        to: 'glaswerk@gmail.com',
        from: 'testsender@example.com',
        subject: 'New comment from: ' + req.body.name + ' on dizid.com',
        text: req.body.message,
        html: '<strong>' + req.body.message + '</strong><br>From: ' + req.body.email,
      }
    console.log("MF sendmail.old msg: ", msg)
    sgMail.send(msg)
      
 })



