const sgMail = require('@sendgrid/mail');
const sendgridAPIKey = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(sendgridAPIKey);

// sgMail.send({
//   to: 'the.harbor.ro@gmail.com',
//   from: 'the.harbor.ro@gmail.com',
//   subject: 'this is not spam',
//   text: 'i hope this one wont be spam',
// });

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'the.harbor.ro@gmail.com',
    subject: 'Welcomee to Task Manager',
    text: `Welcome to the task app ${name}, hope you enjoy it!`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'the.harbor.ro@gmail.com',
    subject: 'Your account has been canceled',
    text: `We are sorry ${name} that you no longer need the app, hope you enjoyed it!`,
  });
};

module.exports = { sendWelcomeEmail, sendCancelationEmail };
