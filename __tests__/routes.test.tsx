import { renderRouter } from "expo-router/testing-library";

describe("app routes", () => {
  test("renders the home route at /", async () => {
    const result = await renderRouter("./src/app", {
      initialUrl: "/",
    });

    expect(result.getAllByText("Home").length).toBeGreaterThan(0);
  });

  test("renders the tasks route at /tasks", async () => {
    const result = await renderRouter("./src/app", {
      initialUrl: "/tasks",
    });

    expect(result.getAllByText("Tasks").length).toBeGreaterThan(0);
  });

  test("renders the task detail route at /tasks/task-1", async () => {
    const result = await renderRouter("./src/app", {
      initialUrl: "/tasks/task-1",
    });

    expect(result.getByText("Task Detail")).toBeVisible();
    expect(result.getByText("Task ID: task-1")).toBeVisible();
  });

  test("renders the scan route at /scan", async () => {
    const result = await renderRouter("./src/app", {
      initialUrl: "/scan",
    });

    expect(result.getAllByText("Scan").length).toBeGreaterThan(0);
  });

  test("renders the profile route at /profile", async () => {
    const result = await renderRouter("./src/app", {
      initialUrl: "/profile",
    });

    expect(result.getAllByText("Profile").length).toBeGreaterThan(0);
  });

  test("renders the sign in route at /auth/sign-in", async () => {
    const result = await renderRouter("./src/app", {
      initialUrl: "/auth/sign-in",
    });

    expect(result.getByText("Sign In")).toBeVisible();
  });
});
