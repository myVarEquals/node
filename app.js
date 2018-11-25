console.log('Running...');

const fs = require('fs'); // fetch file system module
const _ = require('lodash');

const notes = require('./notes');

console.log(process.argv); // arguments vector
const command = process.argv[2];
console.log('Command:', command);

if (command === 'add') {
    console.log('Adding new note');
} else if(command === 'list') {
    console.log('List all notes');
} else if(command === 'read') {
    console.log('Read note');
} else if(command === 'remove') {
    console.log('Remove note')
} else {
    console.log('Command not recognized!');
}