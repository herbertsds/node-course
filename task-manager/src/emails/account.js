const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'herbertsds.ufrj@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'herbertsds.ufrj@gmail.com',
        subject: 'Good bye!',
        text: `Hasta la vista, ${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}