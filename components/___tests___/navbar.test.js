import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "../Navbar";
import { Provider } from 'react-redux';
import appStore from "../../utils/AppStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should render a Navbar Component", () => {
  render(
    <BrowserRouter>
      <Provider store={ appStore }>
        <Navbar />
      </Provider>
    </BrowserRouter>
  )

  const loginBtn = screen.getByRole( "link", { name: "Log In"} );

  fireEvent.click(loginBtn);

  const logOutBtn = screen.getByRole( "link", { name: "Log Out"} );

  expect(logOutBtn).toBeInTheDocument();
})