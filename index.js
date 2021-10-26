const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./utils/generateHTML");

const inquirer = require("inquirer");
const fs = require("fs");

var team = [];

const managerPrompt = require("./prompts/managerPrompt");

const teamPrompt = require("./prompts/teamPrompt");

const engineerPrompt = require("./prompts/engineerPrompt");

const internPrompt = require("./prompts/internPrompt");

function addIntern() {
  inquirer.prompt(internPrompt).then((internInput) => {

    const  { name, id, email, school } = internInput; 
    const intern = new Intern (name, id, email, school);

    team.push(intern);
    console.log(team);
    addTeamMember();
  });
}

function addEngineer() {
  inquirer.prompt(engineerPrompt).then((engineerInput) => {

    const  { name, id, email, github } = engineerInput; 
    const engineer = new Engineer(name, id, email, github);

    team.push(engineer);
    console.log(team);
    addTeamMember();
  });
}

function addTeamMember() {
  inquirer.prompt(teamPrompt).then((answers) => {
    if (answers.addTeamMember === "Engineer") {
      addEngineer();
    } else if (answers.addTeamMember === "Intern") {
      addIntern();
    } else {
      console.log(team);
      team = JSON.stringify(team);
      writeToFile("./dist/team-profile.html", team);
    }
  });
}

function writeToFile(fileName, team) {
  fs.writeFile(fileName, generateHTML(team), (err) => {
    err ? console.error(err) : console.log("success");
  });
}

function init() {
  inquirer.prompt(managerPrompt)
  .then((managerInput) => {

    const  { name, id, email, officeNumber } = managerInput; 
    const manager = new Manager (name, id, email, officeNumber);

    team.push(manager);
    console.log(team);
    addTeamMember();
  });
}

init();
