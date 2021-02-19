const inquirer = require('inquirer');
const fs = require('fs');
const axios = require("axios");
const generate = require("./assets/generate.js");
const questions = [
   {
      type: "input",
      message: "What is the Project Title?",
      name: "projectTitle",
   },
   {
      type: "input",
      message: "Describe Project",
      name: "projectDescription",
   },
   {
      type: "input",
      message: "What is the Project usage?",
      name: "projectUsage",
   },
   {
      type: "input",
      message: "What is your GitHub user name?",
      name: "username"
   },
   {
      type: "input",
      name: "badge",
      message: "Please list any badge links for this project",
   },
   {
      type: "input",
      message: "What is your email address?",
      name: "userEmail",
   },
   {
      type: "input",
      message: "Step by step of how to install project",
      name: "installInstruction",
   },
   {
      type: "input",
      message: "Where to get support",
      name: "Support",
   },
   {
      type: "input",
      message: "What command should be run to start tests?",
      default: "`npm test`",
      name: "projectTest",
   },
   {
      type: "input",
      message: "List those who contributed",
      name: "Contributors",
   },
   {
      type: "input",
      message: "What is License Name",
      name: "License",
      choices: [ "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0","MIT License", "Boost Software License 1.0"],
   }
];

inquirer.prompt(questions).then(function (data) {
   const gitHubUrl = `https://api.github.com/users/${data.username}`;

   axios.get(gitHubUrl).then(function (res) {
      const gitHubData = {
         gitHubImage: res.data.avatar_url,
         email: res.data.email,
         profile: res.data.html_url,
         name: res.data.name,
      };

      fs.writeFile("README.md", generate(data, gitHubData), function (err) {
         if (err) {
            throw err;
         }

         console.log("README.md created successfully!");
      });
   });
});

function init() { }
init();

// function captureUserInput() {
//    inquirer.prompt(questions)
//       .then(res => {
//          console.log(res);
//          writeFile("ReadMe.md", res);
//       })
// }
// captureUserInput();

// //.2 make function to make res into readme file
// function writeFile(file, res) {
//    //.3 use fs to write a readMe.
//    fs.writeFile(file, res, function (err) {
//       if (err) {
//          return console.log(err);
//       }
//       console.log("Success!");
//    })
// }

// //writeFile();
// //.4 template literal, es6
