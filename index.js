
//imports inquirer package
const inquirer = require('inquirer');
//imports file system module
const fs = require ('fs');
//imports renderShapes from renderShapes.js
const renderShapes = require ('./lib/renderShapes')

//Array of questions to ask for user input
const questions = [
        {
          type: 'input',
          name: 'text',
          message: 'Please enter up to three characters for the text for you logo.',
          validate: (answer) => {
            if (answer.lenght > 3) {
                return console.log("Text can only be up to 3 letters. Please try again.")
            } else {
                return true
            }
          }
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'What color would you like your text to be?',
        },
        {
          type: 'list',
          name: 'shape',
          message: 'What shape would you like your logo to be?',
          choices: ['Triangle', 'Circle', 'Square']
        },
        {
            type: 'input',
            name: 'color',
            message: 'What color would you like the shape to be?',
        },
    ];

//initializes the function to ask the user questions
function init () {
    inquirer
    .prompt(questions)
    .then((responses) => {
        writeToFile(responses)
    });
};

//takes the user's input and uses the renderShapes function to generate logo
function writeToFile(responses) {
    fs.writeFile('./examples/logo.svg', renderShapes(responses), (err) =>
    err ? console.log(err) : console.log('Logo made!'))
}

init();

//run tests for logo outcomes
//when ran, questions about desired logo is asked
//responses taken to make logo
//logo with all desired characteristics rendered