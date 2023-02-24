import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { darkModeReducer, initialState } from "../redux/slice/darkModeSlice";
import { preloadedState, renderWithProviders } from "../../test-utils";

const expectedState = {
  value: true,
};

describe("Store", () => {
  it("darkMode", () => {
    renderWithProviders(<Home />, {
      wrapper: BrowserRouter,
    });
  });

  test("should change value", () => {
    const action = { type: "darkMode/changeMode" };
    const state = darkModeReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });
});
