import React from "react";
import { render } from "@testing-library/react";
import PlayLists from "./PlayLists"

it("renders without crashing", function () {
  render(
      <MemoryRouter>
        <UserProvider>
          <PlayLists />
        </UserProvider>
      </MemoryRouter>,
  );
});