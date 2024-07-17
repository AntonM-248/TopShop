import { BrowserRouter } from "react-router-dom";
import Product from "../Product";
import { Provider } from "react-redux";
import appStore from "../../utils/AppStore";
import { render } from "@testing-library/react";

test("Should render a Product card", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Product />
      </Provider>
    </BrowserRouter>
  )
})