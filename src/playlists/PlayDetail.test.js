import React from "react";
import { render } from "@testing-library/react";
import Playlist from "./PlaylistDetail";
import { MemoryRouter, Route } from "react-router-dom";
import { UserProvider } from "../testUtils";

it("renders without crashing", function () {
  render(
      <MemoryRouter>
        <UserProvider>
          <Playlist />
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
