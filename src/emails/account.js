const SibApiV3Sdk = require('sib-api-v3-sdk')
const defaultClient = SibApiV3Sdk.ApiClient.instance

const apiKey = defaultClient.authentications['api-key']
apiKey.apiKey = process.env.SANDINBULE_API_KEY

const sendWelcomeEmail = (email, name) => {
    new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail({
        "sender": { "email": "akhileshb318@gmail.com", "name": "Akhilesh Bhatt"},
        "to": [{ "email": email, "name": name}],
        "textContent": `Welcome to the app, ${name}. Let me know how you get along with app.`,
        "subject": "Thanks for joining us!"
    })
}

const sendCancelationEmail = (email, name) => {
    new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail({
        "sender": { "email": "akhileshb318@gmail.com", "name": "Akhilesh Bhatt"},
        "to": [{ "email": email, "name": name}],
        "textContent": `Goodbye!, ${name}. Please give your feedback, it helps us to improve.`,
        "subject": "Sorry to see you go!"
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}