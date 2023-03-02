const inquirer = require ('inquirer');

const fs = require ('fs');

//inquirer to generate prompt//
inquirer.prompt(
    [ 
        { type: 'input',
          message:'what is Title of your project?',
          name: 'Title',
          validate :(value)=>{if (value){return true} else{return 'I need a value'}}


        },

        { 
            type: 'input',
          message:"section  entitled",
          name: 'section',
          validate :(value)=>{if (value){return true} else{return 'I need a value'}}

        },

        { type: 'input',
          message:"Please provide a short description of your project?",
          name: 'Description',
          validate :(value)=>{if (value){return true} else{return 'I need a value'}}

        },

      
        { type: 'input',
          message:"what does user need to install this app?",
          name: 'Installation',
          validate :(value)=>{if (value){return true} else{return 'I need a value'}}

        },

        { type: 'input',
        message:"How do you use this app?",
        name: 'usage',
        validate :(value)=>{if (value){return true} else{return 'I need a value'}}

      },

      { type: 'list',
      message:"what license did you use?",
      name: 'License',
      choice: ['The MIT License'],
      validate :(value)=>{if (value){return true} else{return 'I need a value'}}

    },

    { type: 'input',
    message:'who can contribute to this app?',
    name: 'contribution',
    validate :(value)=>{if (value){return true} else{return 'I need a value'}}

    },

    { type: 'input',
    message:'Testing required for this app?',
    name: 'Tests',
    validate :(value)=>{if (value){return true} else{return 'I need a value'}}

    },


    { type: 'input',
    message:'for any questions',
    name: 'Questions',
    validate :(value)=>{if (value){return true} else{return 'I need a value'}}

    },

    { type: 'input',
    message:'Github username:',
    name: 'git',
    validate :(value)=>{if (value){return true} else{return 'I need a value'}}

    },

    { type: 'input',
    message:'E-mail:',
    name: 'email',
    validate :(value)=>{if (value){return true} else{return 'I need a value'}}
   },

]
)