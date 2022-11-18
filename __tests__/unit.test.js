// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

test("Check isPhoneNumber Function",  () => {
    expect(functions.isPhoneNumber("(123)456-7890")).toBe(true);
    expect(functions.isPhoneNumber()).toBe(false);
    expect(functions.isPhoneNumber("(111)11111111")).toBe(false);
    expect(functions.isPhoneNumber("(111)111-1111")).toBe(true);
});

test("Check isEmail", () => {
    expect(functions.isEmail("test@gmail.com")).toBe(true);
    expect(functions.isEmail("test@gmail")).toBe(false);
    expect(functions.isEmail("tl.com")).toBe(false);
    expect(functions.isEmail("t@goo.org")).toBe(true);
});

test("Check isStrongPassword", () => {
   expect(functions.isStrongPassword("fart")).toBe(true);
   expect(functions.isStrongPassword("art")).toBe(false);
   expect(functions.isStrongPassword("f8*")).toBe(false);
   expect(functions.isStrongPassword("f123")).toBe(true); 
});

test("Check isDate", () => {
    expect(functions.isDate("10/20/2020")).toBe(true);
    expect(functions.isDate("1/2/22")).toBe(false);
    expect(functions.isDate("1/2/1920")).toBe(true);
    expect(functions.isDate("10/200/2020")).toBe(false);
});

test("Check isHexColor", () => {
    expect(functions.isHexColor("203Faa")).toBe(true);
    expect(functions.isHexColor("FFF")).toBe(true);
    expect(functions.isHexColor("F@T")).toBe(false);
    expect(functions.isHexColor("2Faa")).toBe(false);
});
// TODO - Part 2