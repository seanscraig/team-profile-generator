const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./utils/generateHTML");
// const OUTPUT_DIR = path.resolve(_dirname, 'output');
// const outputPath = path.join(OUTPUT_DIR, "team-profile.html");

const inquirer = require("inquirer");
const fs = require("fs");

var team = [];

// function makeDebugTeam(){
//   let manager = new Manager('Lizzy', 1, 'lizzy@test.com', 111);
//   let engineer1 = new Engineer('Sean',2,'sean@test.com','seanscraig');
//   let engineer2 = new Engineer('Mary',3,'mary@test.com','fakegithub');
//   let intern1 = new Intern('Fred',4,'fred@test.com','Dartmouth');
//   let intern2 = new Intern('Ted',5,'ted@test.com','Northwestern');

//   team.push(manager);
//   team.push(engineer1);
//   team.push(engineer2);
//   team.push(intern1);
//   team.push(intern2);
//   console.log(team);
// }

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
      // buildTeam();
      // return;
    }
  });
}

function buildTeam() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, render(team), "utf8");
}

// console.log(`this is my team: `);
// createMan

function writeToFile(fileName, team) {
  fs.writeFile(fileName, generateHTML(team), (err) => {
    err ? console.error(err) : console.log("success");
  });
  // fs.writeFile(fileName, genHTML(team), (err) => {
  //   err ? console.error(err) : console.log("success");
  // });
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

function debugInit() {
  makeDebugTeam();
  writeToFile("./dist/debug-team-profile.html", team);
}

function genHTML(team) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
      />
      <title>Team Profile</title>
    </head>
    <body>
      <header class="jumbotron bg-danger text-white">
        <h1 class="display-3 text-center">Team</h1>
      </header>
  
      <div class="container">
        <div class="row row-cols-3 align-items-center">
        
        <p>${team[1]}</p>

      </div>
    </body>
  </html>`;
}

// debugInit();
init();
