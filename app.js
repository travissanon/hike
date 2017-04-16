/* jshint esversion: 6 */
var ejs = require('ejs'),
    express = require('express');
    nodemailer = require('nodemailer');
    em = require('./app/scripts/emailt');
    app = express();
    bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use(express.static(__dirname));

app.listen(4000);
console.log('listening on port 4000');

app.get('/', function(req,res){
  res.render('index');
});

app.get('/index', function(req,res){
  res.render('index');
});

app.get('/mountains', function(req,res){
  res.render('mountains');
  console.log(req.body);
});

app.get('/gear', function(req,res){
  res.render('gear');
});

app.get('/newsletter', function(req,res){
  res.render('newsletter');
});

app.get('/product', function(req,res){
  res.render('product');
});

app.post('/newsletter', urlencodedParser, function(req, res){
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: '',
          pass: ''
      }
  });
  // setup email data with unicode symbols
  let mailOptions = {
      from: 'recursant@gmail.com', // sender address
      to: req.body.email, // list of receivers
      subject: 'Hike ✔', // Subject line
      text: 'Im slippin inspiration in yo inbox.', // plain text body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
  });
  res.render('newsletter-success', {data: req.body});
});
