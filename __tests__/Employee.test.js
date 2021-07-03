const { expect, test } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("Create an Employee object with properties", () => {
    const employee = new Employee("BoDee", "12159", "nyx0hemir@gmail.com");

    expect(employee.name).toBe("BoDee");
    expect(employee.id).toBe("12159");
    expect(employee.email).toBe("nyx0hemir@gmail.com");
});

test("get employee name", () => {
    const employee = new Employee("Rachel");
    const name = employee.getName();

    expect(name).toBe("Rachel");
});

test("get employee id", () => {
    const employee = new Employee("Rachel", "12345");
    const id = employee.getId();

    expect(id).toBe("12345");
});

test("get employee email", () => {
    const employee = new Employee("Rachel", "12345", "blabla@gmail.com");
    const email = employee.getEmail();

    expect(email).toBe("blabla@gmail.com");
});

test("get employee role", () => {
    const employee = new Employee();

    expect(employee.getRole()).toBe("Employee");
});