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
      name: 'contributing',
      message: 'What are the contribution guidelines?',
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
    
    const userdata =
        `# ${data.title}
    
        ##Description
    
        ##Table of Contents
        1. [Installation](#Installation)
        2. [Usage](#Usage)
        3. [License](#License)
        4. [Contributing](#Contributing)
        5. [Tests](#Test)
        6. [Questions](#Questions)
    
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
  
