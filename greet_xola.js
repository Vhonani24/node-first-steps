const chalk = require('chalk')
const figlet = require('figlet')

const greet = require('./greet');

const styledMessage = greet('Xola');

//console.log(styledMessage)

figlet(styledMessage, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.bgGreen.black(data))
});
