// Declaring variables, carrying packages needed for this code to run
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

/* Array of questions that will be prompted/asked to the user. 
The user's answers to these will be later used in the generateMarkdown function
exported from the generateMarkdown.js file */
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
        message: "If you would like other developers to contribute, you can include guidelines for how to do so.",
        name: "contributions"
    },
    {
        type: "input",
        message: "Have you written tests for this application? If so, provide examples on how to run them",
        name: "tests"
    },
    {
        type: "list",
        message: "What is the license for this project?",
        name: "license",
        choices: ["MIT", "Apache License 2.0", "GNU AGPLv3", "N/A"]
    },
    {
        type: "list",
        message: "Would you like to include a 'Questions' section with some of ways for others to reach out to you or view your other projects?",
        name: "questions",
        choices: ["Yes", "No"]
    },
    {
        type: "input",
        message: "If you have selected to include a 'Questions' section, and you would like it to contain your GitHub link, please input your username.",
        name: "github"
    },
    {
        type: "input",
        message: "If you have selected to include a 'Questions' section, and you would like it to contain your email address, please input your email.",
        name: "email"
    }    
    
];

/* Function to create the actual README file, after questions have been
answered by the user */
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err); // logging an error if no data could be fetched
        } else {
            console.log(`${fileName} has been successfully generated`);
        }
    });
}

/* Function to initialize this application. A user will be prompted the questions, 
then user's question answers are used in the generateMarkdown function. What is produced
with the generateMarkdown function is then going to be pasted as content into a README.md file. */
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
            const readmeContent = generateMarkdown(answers);
            writeToFile('README.md', readmeContent)
        })
        .catch((err) => {
            console.error(err); // logging an error if one is caught
        });
}

// Calling the init function, written above^ 
init();
