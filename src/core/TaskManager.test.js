import TaskManager from "./TaskManager";

describe("TaskManager", () => {
  let taskManager;

  beforeEach(() => {
    taskManager = new TaskManager();
  });

  it("should have an empty array upon instantition", async () => {
    expect(taskManager.taskList).toEqual([]);
  });
});
