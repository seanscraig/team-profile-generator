function generateHTML(team) {
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
        
        <p>${team}</p>

      </div>
    </body>
  </html>`;
}

module.exports = generateHTML;
