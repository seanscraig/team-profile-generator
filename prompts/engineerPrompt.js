module.exports = [
  {
    message: "Please enter the engineer's name:",
    name: "name",
    validate: (answer) => {
      if (answer) {
        return true;
      } else {
        console.error("\nPlease enter the team engineer's name.");
        return false;
      }
    },
  },
  {
    message: "Please enter the engineer's employee id:",
    name: "id",
    validate: (answer) => {
      if (isNaN(answer)) {
        console.error("\nPlease enter the team employee's id.");
        return false;
      } else {
        return true;
      }
    },
  },
  {
    message: "Please enter the engineer's email address:",
    name: "email",
    validate: (answer) => {
      return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(answer);
    }
  },
  {
    message: "Please enter the engineer's github username:",
    name: "github",
    validate: (answer) => {
      if (answer) {
        return true;
      } else {
        console.error("\nPlease enter the team engineer's github username.");
        return false;
      }
    },
  },
];