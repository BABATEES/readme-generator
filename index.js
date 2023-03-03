const inquirer = require('inquirer');

const fs = require('fs');

const licensebadges=

{

"MIT" : `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
"Apache" :       `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
 "ISC" :    `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
}

Object.keys(licensebadges);
//inquirer to generate prompt//
inquirer.prompt(
    [
        {
            type: 'input',
            message: 'what is Title of your project?',
            name: 'Title',
            validate: (value) => { if (value) { return true } else { return 'I need a value' } }


        },

        {
            type: 'input',
            message: "section  entitled",
            name: 'section',
            validate: (value) => { if (value) { return true } else { return 'I need a value' } }

        },

        {
            type: 'input',
            message: "Please provide a short description of your project?",
            name: 'Description',
            validate: (value) => { if (value) { return true } else { return 'I need a value' } }

        },


        {
            type: 'input',
            message: "what does user need to install this app?",
            name: 'Installation',
            validate: (value) => { if (value) { return true } else { return 'I need a value' } }

        },

        {
            type: 'input',
            message: "How do you use this app?",
            name: 'usage',
            validate: (value) => { if (value) { return true } else { return 'I need a value' } }

        },

        {
            type: 'list',
            message: "what license did you use?",
            name: 'License',
            choices: Object.keys(licensebadges),
            validate: (value) => { if (value) { return true } else { return 'I need a value' } }

        },

        {
            type: 'input',
            message: 'who can contribute to this app?',
            name: 'contribution',
            validate: (value) => { if (value) { return true } else { return 'I need a value' } }

        },

        {
            type: 'input',
            message: 'Testing required for this app?',
            name: 'Tests',
            validate: (value) => { if (value) { return true } else { return 'I need a value' } }

        },


        {
            type: 'input',
            message: 'for any questions',
            name: 'Questions',
            validate: (value) => { if (value) { return true } else { return 'I need a value' } }

        },

        {
            type: 'input',
            message: 'Github username:',
            name: 'git',
            validate: (value) => { if (value) { return true } else { return 'I need a value' } }

        },

        {
            type: 'input',
            message: 'E-mail:',
            name: 'email',
            validate: (value) => { if (value) { return true } else { return 'I need a value' } }
        },

    ]
)
    .then(({
        Title,
        Description,
        Installation,
        usage,
        License,
        contribution,
        Tests,
        Questions,
        git,
        email

    }) => {
        const template =
            `#  ${Title}
    
     ##section entitled
      
     ## Description
     ${Description}
      #Table of content
      * [installation](#installation)
      * [section](#section)
      * [Description](#Description)
      * [Installation](#Installation)
      * [usage](#usage)
      * [License](#License)
      * [contribution](#contribution)
    
    
     ## installation
     ${Installation}
    
     ## usage
     ${usage}
    
     ## License
     ${License}
    
     ## contribution
     ${contribution}
    
     ## Tests
     ${Tests}
    
     ## Tests
     ${Questions}
    
     # contact
     * Github: ${git}
     * E-mail : ${email}`;

//function to create readme file
        createNewfile(Title, template)
    }

    );
//This function creates readme file
function createNewfile(Readmegenerator, data) {

    fs.writeFile(`Readmegenerator.md`, data, (err) => {

        if (err) {
            console.log(err)
        }
        console.log('your readme file is ready')

    })

    fs.writeFile('newfile.md', 'Readmegenerator', function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      });

}