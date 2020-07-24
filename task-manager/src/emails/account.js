const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)


sgMail.send({
    to: 'herbertsds.ufrj@gmail.com',
    from: 'herbertsds.ufrj@gmail.com',
    subject: 'This is my first creation!',
    text: 'I hope this one actually gets to you.'
})