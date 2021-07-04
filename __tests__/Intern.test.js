const { test, expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("inherits from employee", () => {
    const intern = new Intern("BoDee", "12159", "nyx0hemir@gmail.com");

    expect(intern.getName()).toBe("BoDee");
    expect(intern.getId()).toBe("12159");
    expect(intern.getEmail()).toBe("nyx0hemir@gmail.com");
});

test("get school", () => {
    const intern = new Intern("BoDee", "12159", "nyx0hemir@gmail.com", "Utah State University");

    expect(intern.getSchool()).toBe("Utah State University");
});

test("get role", () => {
    const intern = new Intern();

    expect(intern.getRole()).toBe("Intern");
});