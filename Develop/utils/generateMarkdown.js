// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT License') {
    return '![badge](https://img.shields.io/badge/license-MIT-green)';

  } else if (license === 'General Public License') {

  return '![badge](https://img.shields.io/badge/license-GPL-blue)';
  } else if (license === 'Apache License') {

  return '![badge](https://img.shields.io/badge/license-Apache-blue)';
  } else {
  return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT License') {
    return '[MIT License](https://spdx.org/licenses/MIT.html)';

  } else if (license === 'General Public License') {

  return '[GPL License](https://spdx.org/licenses/GPL-3.0-or-later.html)';
  } else if (license === 'Apache License') {

  return '[Apache License](https://spdx.org/licenses/Apache-2.0.html)';
  } else {
  return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return '## License';
  }
}

const renderInstall = data => {
  if (data.confirmInstall) {
  return `## Installation

    ${data.installation}
  
  `;
  }
    return '';
};

const renderUsage = data => {
  if (data.confirmUsage) {
  return `## Usage

    ${data.usage}
  
  `;
  }
    return '';
};

const renderContribution = data => {
  if (data.confirmContribute) {
  return `## Contribution

    ${data.contribute}
  
  `;
  }
    return '';
};
const renderTests = data => {
  if (data.confirmTest) {
  return `## Tests

    ${data.test}
  
  `;
  }
    return '';
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title} ${renderLicenseBadge(data.license)}

## Description 
  ${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)



${renderInstall(data)}

${renderUsage(data)}

${renderContribution(data)}

${renderTests(data)}

${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}





## Questions

  *If you would like to contact the developer you may do so at their [Email](mailto:${data.email}).
  To see more from the developer please visit their [Github](https://github.com/${data.name}) profile.
`;
}

module.exports = generateMarkdown;
