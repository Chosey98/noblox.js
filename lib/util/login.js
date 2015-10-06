// Depdendencies
var request = require('request');

// Define
module.exports.login = function(username,password,callback) {
  var url = 'https://www.roblox.com/Services/Secure/LoginService.asmx/ValidateLogin';
  var post = {
    'userName': username,
    'password': password,
    'isCaptchaOn': false,
    'challenge': '',
    'captchaResponse': ''
  };
  request.post(url,{json: post, jar: true},function(err,res,body) {
    if (err) {
        console.error('Request failed: ' + err);
    }
    var json = body.d;
    if (json.IsValid && callback)
        callback();
    else if (!json.IsValid)
        console.error('Login failed: ' + json.Message);
  });
};