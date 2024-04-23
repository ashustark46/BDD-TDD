const { Given, When, Then } = require("cucumber");

import assert from "assert";

Given("Stark has a task list", function () {
  // Write code here that turns the phrase above into concrete actions
  assert.deepStrictEqual(this.taskManager.taskList, []);
});

When("Stark adds the task {string}", function (string) {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

Then("{string} should be in the task list", function (string) {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});
