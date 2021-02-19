const inquirer = require('inquirer');
const fs = require('fs');
const questions = [
   {
      type: "input",
      message: "What is your GitHub user name?",
      name: "username"
   },
   {
      type: "input",
      message: "What is your email address?",
      name: "userEmail",
   },
   {
      type: "input",
      message: "What is the Project Title",
      name: "projectTitle",
   },
   {
      type: "input",
      message: "Describe Project",
      name: "projectDescription",
   },
   {
      type: "input",
      message: "Table of Content",
      name: "Content",
   },
   {
      type: "input",
      message: "Step by step of how to install project",
      name: "installInstruction",
   },
   {
      type: "input",
      message: "How do you use Project",
      name: "projectUsage",
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
   }
];

function captureUserInput() {
   inquirer.prompt(questions)
      .then(res => {
         console.log(res);
         writeFile("ReadMe.md", res);
      })
}
captureUserInput();

//.2 make function to make res into readme file
function writeFile(file, res) {
   //.3 use fs to write a readMe.
   fs.writeFile(file, res, function (err) {
      if (err) {
         return console.log(err);
      }
      console.log("Success!");
   })
}

//writeFile();
//.4 template literal, es6
