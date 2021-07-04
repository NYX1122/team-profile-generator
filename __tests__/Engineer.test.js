const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("inherits from Employee", () => {
    const engineer = new Engineer("BoDee", "12159", "nyx0hemir@gmail.com");

    expect(engineer.getName()).toBe("BoDee");
    expect(engineer.getId()).toBe("12159");
    expect(engineer.getEmail()).toBe("nyx0hemir@gmail.com");
});

test("get github", () => {
    const engineer = new Engineer("BoDee", "12159", "nyx0hemir@gmail.com", "NYX1122");
    
    expect(engineer.getGithub()).toBe("NYX1122");
});

test("get role", () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toBe("Engineer");
})