
//imports inquirer package
const inquirer = require('inquirer');
//imports file system module
const fs = require ('fs');
//
const Shapes = require ('../lib/shapes')

//Array of questions to ask for user input
const questions = [
        {
          type: 'input',
          name: 'text',
          message: 'Please enter up to three characters for the text for you logo.',
        },
        {
          type: 'input',
          name: 'text-color',
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
            name: 'shape-color',
            message: 'What color would you like the shape to be?',
        },
    ];

//initializes the function to ask the user questions
// function init () {
//     inquirer
//     .prompt(questions)
//     .then(responses) => 
// }

init();

module.exports = CLI;