import { login, logout } from "../../actions/auth";

test("should login on app", () => {
  const uid = "123456798";
  expect(login(uid)).toEqual({ type: "LOGIN", uid });
});

test("should logout on app", () => {
  expect(logout()).toEqual({ type: "LOGOUT" });
});
