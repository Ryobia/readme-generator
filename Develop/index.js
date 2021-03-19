// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input', //user Github username
        name: 'name',
        message: 'What is your Github Username? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your Github Username!');
            return false;
          }
        }
      },
      {
        type: 'input', //user email address
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email address!');
            return false;
          }
        }
      },
      {
        type: 'input', //Readme Title
        name: 'title',
        message: 'What is the title of your project on Github? (Include `-`) (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter your project title!');
            return false;
          }
        }
      },
      {
        type: 'input', //Readme Description
        name: 'description',
        message: 'Please provide a description of your project. (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please provide a description!');
            return false;
          }
        }
      },
      {
        type: 'confirm', //Readme installation instructions
        name: 'confirmInstall',
        message: 'Would you like to include Installation Instructions?',
        default: true
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please enter Installation Instructions:',
        when: ({ confirmInstall }) => confirmInstall
      },
      {
        type: 'confirm', //Readme Usage information
        name: 'confirmUsage',
        message: 'Would you like to include Usage Information?',
        default: true
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please enter Usage Information:',
        when: ({ confirmUsage }) => confirmUsage
      },
      {
        type: 'confirm', //Readme Contribution Guidelines
        name: 'confirmContribute',
        message: 'Would you like to include Contribution Guidelines?',
        default: true
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'Please enter Installation Instructions:',
        when: ({ confirmContribute }) => confirmContribute
      },
      {
        type: 'confirm', //Readme Test Instructions
        name: 'confirmTest',
        message: 'Would you like to include Test Instructions?',
        default: true
      },
      {
        type: 'input',
        name: 'test',
        message: 'Please enter Test Instructions:',
        when: ({ confirmTest }) => confirmTest
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which license should be applied to this project?',
        choices: ['MIT License', 'General Public License', 'Apache License', 'None']

      }
      
    ]);
  };

// TODO: Create a function to write README file
const writeToFile = (data) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(`./dist/README.md`, data, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'README Generated!'
        });
      });
    });
  };

promptUser()
.then(readmeData => {
  return generateReadme(readmeData);
})
.then(data => {
  return writeToFile(data);
})
.then(response => {
  console.log(response);
});
