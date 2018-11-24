console.log('Running...');

const fs = require('fs'); // fetch file system module
const os = require('os');
const notes = require('./notes');

let user = os.userInfo();
console.log(user);
// append text to file
fs.appendFile('greetings.txt', `Hello ${user.username}`, err => {
    if (err) { // catch error
        console.log('Unable to write to file');
    }
});