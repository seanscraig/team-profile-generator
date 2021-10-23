const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const fs = require("fs");

const team = [];

const managerPrompt = require("./prompts/managerPrompt");

const teamPrompt = require("./prompts/teamPrompt");

const engineerPrompt = require("./prompts/engineerPrompt");

const internPrompt = require("./prompts/internPrompt");

function addIntern() {
  inquirer.prompt(internPrompt).then((answers) => {
    team.push(answers);
    console.log(team);
    addTeamMember();
  });
}

function addEngineer() {
  inquirer.prompt(engineerPrompt).then((answers) => {
    team.push(answers);
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
      // call write file and delete the return statement
      return;
    }
  });
}

function init() {
  inquirer.prompt(managerPrompt).then((answers) => {
    team.push(answers);
    console.log(team);
    addTeamMember();
  });
}

init();
