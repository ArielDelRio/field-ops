import { renderRouter } from "expo-router/testing-library";

describe("app routes", () => {
  test("renders the dashboard route at /", async () => {
    const result = await renderRouter("./src/app", {
      initialUrl: "/",
    });

    expect(result.getAllByText("Dashboard").length).toBeGreaterThan(0);
    expect(result.getByText("About the app")).toBeVisible();
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
    expect(result.getByText("Inspect generator unit")).toBeVisible();
    expect(result.getByText("Location: North Plant")).toBeVisible();
    expect(result.getByText("Assigned to: Alex Morgan")).toBeVisible();
  });

  test("renders a fallback when the task detail route does not exist", async () => {
    const result = await renderRouter("./src/app", {
      initialUrl: "/tasks/task-999",
    });

    expect(result.getByText("Task Detail")).toBeVisible();
    expect(result.getByText("Task ID: task-999")).toBeVisible();
    expect(result.getByText("Task not found.")).toBeVisible();
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

    expect(result.getAllByText("Sign In").length).toBeGreaterThan(0);
  });
});
