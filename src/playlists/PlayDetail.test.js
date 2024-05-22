import React from "react";
import { render } from "@testing-library/react";

import { MemoryRouter, Route } from "react-router-dom";
import { UserProvider } from "../testUtils";
import PlayDetail from "./PlayDetail";

it("renders without crashing", function () {
  render(
      <MemoryRouter>
        <UserProvider>
          <PlayDetail />
        </UserProvider>
      </MemoryRouter>,
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter initialEntries={["/company/ibm"]}>
        <UserProvider>
          <Route path="/playlist/:id">
            <Company />
          </Route>
        </UserProvider>
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
