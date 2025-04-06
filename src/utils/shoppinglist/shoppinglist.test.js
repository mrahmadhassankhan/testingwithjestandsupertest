const shoppinglist = require("./shoppinglist");

test("should contain eggs", () => {
  expect(shoppinglist).toContain("eggs");
});
