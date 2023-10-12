/* FUnction that will show the user's GitHub link within the questions 
section, if they chose to provide this */
function githubUser(github) {
  if (github === "") {
    return "";
  }
  const link = `https://github.com/${github}`;
  return `Check out all my other projects [here](${link}).`;
}

/* FUnction that will show the user's email address within the questions 
section, if they chose to provide this */
function emailAddress(email) {
  if (email === "") {
    return "";
  }
  return `Please feel free to contact me with any inquiries at [${email}](mailto:${email}).`;
}

/* Function that will create the 'Questions' section if the user selects to include this */
function renderQuestionsSection(questions, github, email) {
  if (questions === "No") {
    return "";
  }

  const githubText = githubUser(github);
  const emailText = emailAddress(email);

  return `
## Questions

${githubText}

${emailText}
`;
}


/* Function that will make a badge appear with license information if license is chosen.
Function specifies that if no license is selected, there will not be a badge produced */
function renderLicenseBadge(license) {
  if (license === "N/A") {
    return "";
  }
    const formattedLicense = license.replace(/\s+/g, '_');
    return `![License](https://img.shields.io/badge/${formattedLicense}-License-blue)`
 }

/* Function that will create a linked item for the license on the 
table of contents. If no license is chosen, this extra line/link
will not be added to the table of contents*/
function renderLicenseLink(license) {
  if (license === "N/A") {
    return "";
  }
  return '- [License](#license)'
 }

/* Function that will create the actual license section if one is chosen, within
the README. The section title will be 'License', and a statement to reflect
which license has been chosen will appear. If no license is selected, this
section will not appear on the README */
function renderLicenseSection(license) { 
  if (license === "N/A") {
    return ""
  }
  return `## License
  This project is licensed under the ${license} License`
}

/* Function that will create the markdown file with the contents
of the answers to prompted questions in the terminal */
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Tests](#tests)
${renderLicenseLink(data.license)}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributions
${data.contributions}

## Tests
${data.tests}

${renderLicenseSection(data.license)}

${renderQuestionsSection(data.questions, data.github, data.email)}

`;
}
// Exporting the generateMarkdown function so that it may be used in our index.js.
// This will allow the question answers to be used in the gM function
module.exports = generateMarkdown;
