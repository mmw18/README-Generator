// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of this project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please provide a description for this project",
        name: "description"
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "Please provide instructions for use",
        name: "usage"
    },
    {
        type: "input",
        message: "If you created an application or package and would like other developers to contribute, you can include guidelines for how to do so.",
        name: "contributions"
    },
    {
        type: "input",
        message: "Have you written tests for this application? If so, provide examples on how to run them",
        name: "tests"
    }

// figure out how to create the table of contents and the license selector
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            cconsole.log(`${fileName} has been successfully generated`);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const readmeContent = generateMarkdown(answers);
            writeToFile('README.md', readmeContent)
        })
        .catch((err) => {
            console.error(err);
        });
}

// Function call to initialize app
init();
