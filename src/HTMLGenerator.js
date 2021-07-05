const writeFile = require("../utils/fileGenerator");

const buildCards = employees => {
    for (i = 0; i <= employees.length; i++) {
        var employee = employees[i];
        var role = employee.getRole();
        var cards = "";
        if (role === "Manager") {
            cards += `
            <div>
                <div>
                    <h2>${employee.getName()}</h2>
                    <h3>${employee.getRole()}</h3>
                </div>
                <div>
                    <p>${employee.getId()}</p>
                    <p>${employee.getEmail()}</p>
                    <p>${employee.officeNumber}</p>
                </div>
            </div>
            `;
        } else if (role === "Engineer") {
            cards += `
            <div>
                <div>
                    <h2>${employee.getName()}</h2>
                    <h3>${employee.getRole()}</h3>
                </div>
                <div>
                    <p>${employee.getId()}</p>
                    <p>${employee.getEmail()}</p>
                    <p>${employee.getGithub()}</p>
                </div>
            </div>
            `;
        } else {
            cards += `
            <div>
                <div>
                    <h2>${employee.getName()}</h2>
                    <h3>${employee.getRole()}</h3>
                </div>
                <div>
                    <p>${employee.getId()}</p>
                    <p>${employee.getEmail()}</p>
                    <p>${employee.getSchool()}</p>
                </div>
            </div>
            `;
        }
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
        <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
        <header>
            <h1 class="bg-danger py-5 text-center text-white">My Team</h1>
        </header>

        <section>
            ${buildCards(employees)}
        </section>
    </body>

    </html>
    `;
}

const buildHTML = employees => {
    //writeFile(buildPage(employees));
    console.log(buildCards(employees));
}

module.exports = buildHTML;