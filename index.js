const inquirer = require('inquirer');

const fs = require('fs');

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
            choice: ['The MIT License', 'Apache License', 'GNU License',],
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
function createNewfile(fileName, data) {

    fs.writeFile(`./${fileName.lowercase().split('').join('')}.md`, data, (err) => {

        if (err) {
            console.log(err)
        }
        console.log('your readme file is ready')

    })


}