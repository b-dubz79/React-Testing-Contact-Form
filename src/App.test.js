import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders message header", () => {
  const { getByText } = render(<App />);
  getByText(/message/i)

});
