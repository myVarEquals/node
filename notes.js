console.log('Running notes.js');
// adding to export object to be accessed by other files

module.exports.addNote = () => {
    console.log('addNote called');
    return 'New Note added';
};
