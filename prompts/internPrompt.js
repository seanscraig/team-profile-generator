module.exports = [
  {
    message: "Please enter the intern's name:",
    name: "name",
    validate: (answer) => {
      if (answer) {
        return true;
      } else {
        console.error("\nPlease enter the team intern's name.");
        return false;
      }
    },
  },
  {
    message: "Please enter the intern's employee id:",
    name: "id",
    validate: (answer) => {
      if (isNaN(answer)) {
        console.error("\nPlease enter the team intern's id.");
        return false;
      } else {
        return true;
      }
    },
  },
  {
    message: "Please enter the intern's email address:",
    name: "email",
    validate: (answer) => {
      return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(answer);
    }
  },
  {
    message:
      "Please enter the name of the school that the intern is attending:",
    name: "school",
    validate: (answer) => {
      if (answer) {
        return true;
      } else {
        console.error("\nPlease enter the team intern's school's name.");
        return false;
      }
    },
  },
];