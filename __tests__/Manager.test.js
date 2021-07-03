const { test, expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

test("inherits from Employee", () => {
    const manager = new Manager("BoDee", "12159", "nyx0hemir@gmail.com", "20");

    expect(manager.getName()).toBe("BoDee");
    expect(manager.getId()).toBe("12159");
    expect(manager.getEmail()).toBe("nyx0hemir@gmail.com");
})

test("get office number", () => {
    const manager = new Manager("BoDee", "12159", "nyx0hemir@gmail.com", "20");

    expect(manager.officeNumber).toBe("20");
});

test("get role", () => {
    const manager = new Manager;

    expect(manager.getRole()).toBe("Manager");
})