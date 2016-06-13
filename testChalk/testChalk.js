var chalk = require("chalk");

//simple
console.log(chalk.blue('Hello Chalk!'));

//showing config from package.json
console.log(chalk.green(process.env.npm_package_config_port));


 
// combining styled and normal strings 
console.log(chalk.blue('Hello') + 'Chalk' + chalk.red('!'));
 
// composing multiple styles using chainable API 
console.log(chalk.blue.bgRed.bold('Hello Chalk!'));
 
// passing in multiple arguments 
console.log(chalk.blue('Hello', 'Chalk!', 'How', 'are', 'you'));
 
// nest styles 
console.log(chalk.red('Hello', chalk.underline.bgBlue('Chalk') + '!'));
 
// nest styles of the same type even (color, underline, background) 
 console.log(chalk.green(
 	'I am a green line ' +
 	chalk.blue.underline.bold('with a blue substring') +
 	' that becomes green again!'
 ));