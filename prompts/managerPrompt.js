module.exports = [
  {
    message: "Please enter the team manager's name:",
    name: "name",
    validate: (answer) => {
      if (answer) {
        return true;
      } else {
        console.error("\nPlease enter the team manager's name.");
        return false;
      }
    },
  },
  {
    message: "Please enter the team manager's employee id:",
    name: "id",
    validate: (answer) => {
      if (isNaN(answer)) {
        console.error("\nPlease enter the team manager's id.");
        return false;
      } else {
        return true;
      }
    },
  },
  {
    message: "Please enter the team manager's email:",
    name: "email",
    validate: (answer) => {
      return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(answer);
    }
  },
  {
    message: "Please enter the team manager's office number:",
    name: "officeNumber",
    validate: (answer) => {
      if (isNaN(answer)) {
        console.error("\nPlease enter the team manager's office number.");
        return false;
      } else {
        return true;
      }
    },
  },
];