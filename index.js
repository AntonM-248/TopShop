import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import Contact from "./components/Contact";
import ProductDetails from './components/ProductDetails';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/style.css';
import About from './components/About';
import Contact from './components/Contact';
import UserContext from "./utils/UserContext";
import appStore from "./utils/AppStore";
import { Provider } from "react-redux";
import { Cart } from "./components/Cart";

const root = document.getElementById("root");
const appRoot = ReactDOM.createRoot(root);

const Electronics = lazy( () => import('./components/Electronics') );

export function App() {
  //authentication api

  const [ user, setUser ] = useState(null);

  useEffect( () => {
    //api call to authenticate user
    const data = {
      user: 'Sachin'
    }

    setUser(data.user);
  })

  return( 
    <>
      <Provider value={''} store={appStore}>
        <UserContext.Provider value={{ username: user }}>
          <Navbar />
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </>
  );
}

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <>
            <Banner />
            <ProductList />
          </>
        )
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/electronics',
        element: 
          <Suspense>
            <Electronics />
          </Suspense>
      },
      {
        path: '/product/:id',
        element: <ProductDetails />
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ],
    errorElement: <Error />
  }
]);

appRoot.render(<RouterProvider router={ AppRouter } />);

export default App;


