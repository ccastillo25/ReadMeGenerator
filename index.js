const inquirer = require('inquirer');
const fs = require ('fs');
const questions = [ 
{
    type: "input",
    message: "What is the Project Title",
    name: "projectTitle",
 },
 {
    type: "input",
    message: "Describe Project",
    name: "PrjectDescription",
 },
 {
    type: "input",
    message: "Step by step of how to install project",
    name: "InstallInstruction",
 },
 {
    type: "input",
    message: "How do you use Project",
    name: "Usage",
 },
 {
    type: "input",
    message: "Where to get support",
    name: "Support",
 },
 {
    type: "input",
    message: "List those who contributed",
    name: "Contributors",
 },
{
    type: "input",
    message: "What is License Name",
    name: "LicenseName",
},
];

function captureUserInput(){
   inquirer.prompt(questions)
   .then(res => {
      console.log(res);
   })
}
captureUserInput();
// console.log('starting');
// console.log(userResponse);
// const ProjectTitle = userResponse.ProjectTitle;
// const ProjectDiscription = userResponse.ProjectDiscription;
// const InstallInstruction = userResponse.InstallInstruction;
// const Usage = userResponse.Usage;
// const Support = userResponse.Support;
// const Contributors = userResponse.Contributors;
// const LicenseName = userResponse.LicenseName;
