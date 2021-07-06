const inquirer = require("inquirer");
const buildHTML = require("./src/HTMLGenerator");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employees = [];

const next = () => {
    inquirer
        .prompt({
            type: "list",
            name: "nextAction",
            message: "What would you like to do next?",
            choices: ["add an engineer", "add an intern", "finish building team"]
        })
        .then(({ nextAction }) => {
            console.log(nextAction);
            if (nextAction === "add an engineer") {
                addEngineer();
            } else if (nextAction === "add an intern") {
                addIntern();
            } else {
                finish();
            }
        });
} 

const begin = () => {
    console.log(`Hello, welcome to Team Profile Generator!
___________________________________________
    `);

    inquirer
        .prompt([
        {
            type: "input",
            name: "name",
            message: "Name of team manager?"
        },
        {
            type: "input",
            name: "id",
            message: "Team manager id?"
        },
        {
            type: "input",
            name: "email",
            message: "Team manager email?"
        },
        {
            type: "input",
            name: "office",
            message: "Team manager office number?"
        }])
        .then(({ name, id, email, office }) => {
            const manager = new Manager(name, id, email, office);
            employees.push(manager);
            next();
        });
}

const addEngineer = () => {
    inquirer
        .prompt([
        {
            type: "input",
            name: "name",
            message: "Name of engineer?"
        },
        {
            type: "input",
            name: "id",
            message: "Engineer id?"
        },
        {
            type: "input",
            name: "email",
            message: "Engineer email?"
        },
        {
            type: "input",
            name: "github",
            message: "Engineer github username?"
        }])
        .then(({ name, id, email, github }) => {
            employees.push(new Engineer(name, id, email, github));
            next();
        });
}

const addIntern = () => {
    inquirer
        .prompt([
        {
            type: "input",
            name: "name",
            message: "Name of intern?"
        },
        {
            type: "input",
            name: "id",
            message: "Intern id?"
        },
        {
            type: "input",
            name: "email",
            message: "Intern email?"
        },
        {
            type: "input",
            name: "school",
            message: "Intern schoool?"
        }])
        .then (({ name, id, email, school }) => {
            employees.push(new Intern(name, id, email, school));
            next();
        });
}

const finish = () => {
    buildHTML(employees);
}

begin();