const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project Title?',
    },
    {
      type: 'input',
      name: 'description',
      message:'What is the project about?Give a detailed description of your project ' ,
    },
    {
      type: 'input',
      message: 'Table of Contents',
      name: 'Table of Contents',
      
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use your project?',
    },
    {
      type: 'input',
      name: 'contributor',
      message: 'Who contributed to the project?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'How do you test it?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license does it have?',
      choices: ['None', 'Apache 2.0', 'MIT', 'GPL v3.0'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
  ])
  .then((data) => {
    
    const userdata = `
# ${data.title}
    
##Description
    
##Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Test)
* [Questions](#Questions)
    
##Installation
${data.installation}
        
##Usage
${data.usage}
    
##License
${data.input}
    
##Contributing
${data.contributing}
    
##Tests
${data.test}
    
##Questions
${data.github}
${data.email}
`;

fs.writeFile(data.title + 'README.md', userdata, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  })
  
