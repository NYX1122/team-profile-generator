const writeFile = require("../utils/fileGenerator");

const buildCards = employees => {
    var cards = "";

    const managerCard = (employee) => {
        return `
        <div class="card col-xxl-2 col-xl-3 col-lg-3 col-md-5 col-sm-5 col-10 mx-2 mb-4 mb-md-5 p-0">
            <div class="card-header bg-primary p-3 m-0">
                <h2 class="card-title text-white">${employees[i].getName()}</h2>
                <h3 class="card-subtitle text-white"><span class="oi oi-clipboard"></span> ${employees[i].getRole()}</h3>
            </div>
            <div class="list-group list-group-flush">
                <p class="list-group-item m-0">ID: ${employees[i].getId()}</p>
                <a class="list-group-item m-0" href="mailto:${employees[i].getEmail()}"><p class="m-0">Email: ${employees[i].getEmail()}</p></a>
                <p class="list-group-item m-0">Office Number: ${employees[i].officeNumber}</p>
            </div>
        </div>
        `;
    }

    const engineerCard = (employee) => {
        return `
        <div class="card col-xxl-2 col-xl-3 col-lg-3 col-md-5 col-sm-5 col-10 mx-2 mb-4 mb-md-5 p-0">
            <div class="card-header bg-primary p-3 m-0">
                <h2 class="card-title text-white">${employees[i].getName()}</h2>
                <h3 class="card-subtitle text-white"><span class="oi oi-code"></span> ${employees[i].getRole()}</h3>
            </div>
            <div class="list-group list-group-flush">
                <p class="list-group-item m-0">ID: ${employees[i].getId()}</p>
                <a class="list-group-item m-0" href="mailto:${employees[i].getEmail()}"><p class="m-0">Email: ${employees[i].getEmail()}</p></a>
                <a class="list-group-item m-0" href="https://github.com/${employees[i].getGithub()}" target="_blank"><p class="m-0">Github: ${employees[i].getGithub()}</p></a>
            </div>
        </div>
        `;
    }

    const internCard = (employee) => {
        return `
        <div class="card col-xxl-2 col-xl-3 col-lg-3 col-md-5 col-sm-5 col-10 mx-2 mb-4 mb-md-5 p-0">
            <div class="card-header bg-primary p-3 m-0">
                <h2 class="card-title text-white">${employees[i].getName()}</h2>
                <h3 class="card-subtitle text-white"><span class="oi oi-book"></span> ${employees[i].getRole()}</h3>
            </div>
            <div class="list-group list-group-flush">
                <p class="list-group-item m-0">ID: ${employees[i].getId()}</p>
                <a class="list-group-item m-0" href="mailto:${employees[i].getEmail()}"><p class="m-0">Email: ${employees[i].getEmail()}</p></a>
                <p class="list-group-item m-0">School: ${employees[i].getSchool()}</p>
            </div>
        </div>
        `;
    }

    var i = 0;
    while (i < employees.length) {
        if(employees[i].getRole() === "Manager") {
            cards += managerCard(employees[i]);
        }
        else if(employees[i].getRole() === "Engineer") {
            cards += engineerCard(employees[i]);
        } else {
            cards += internCard(employees[i]);
        }

        i++;
    }

    return cards;
}

const buildPage = (employees) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="id=edge">
        <title>Team Profile Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
        <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
        <header>
            <h1 class="bg-danger py-3 py-md-5 text-center text-white">My Team</h1>
        </header>

        <section class="row justify-content-center mt-4 mt-md-5">
            ${buildCards(employees)}
        </section>
    </body>

    </html>
    `;
}

const buildHTML = employees => {
    writeFile(buildPage(employees));
    console.log(employees)
}

module.exports = buildHTML;