import authReducer from "../../reducers/auth";

test("should set up uid on login", () => {
  const action = {
    type: "LOGIN",
    uid: "9841698as4dasdasd"
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test("should clear uid on logout", () => {
  const state = authReducer({}, { type: "LOGOUT" });
  expect(state).toEqual({});
});

test("should set default value", () => {
  const state = authReducer({}, {});
  expect(state).toEqual({});
});
