import './App.css';
import Body from './Components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import ItemCard from './Components/ItemCard';
import ErrorPage from './Components/ErrorPage';
import { store, persistor } from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from './Components/Cart';
import ItemPage from './Components/ItemPage';
import { PersistGate } from 'redux-persist/integration/react';
import Shoes from './Components/Shoes';
import Clothes from './Components/Clothes';
import Electronics from './Components/Electronics';
import Furniture from './Components/Furniture';
import Miscellaneous from './Components/Miscellaneous';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/Contact';
import ScrollToTopButton from './Components/ScrollToTop';
import TestFirebase from './Components/TestFirebase';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="flex flex-col min-h-screen px-4 sm:px-6 lg:px-8">
          <Outlet />
          <ScrollToTopButton/>
          <Footer />
        </div>
      </PersistGate>
    </Provider>
  );
}


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/home", element: <Body />, errorElement: <ErrorPage /> },
      { path: "/cart", element: <Cart />, errorElement: <ErrorPage /> },
      { path: "/itempage/:resId", element: <ItemPage />, errorElement: <ErrorPage /> },
      { path: "/item", element: <ItemCard />, errorElement: <ErrorPage /> },
      { path: "/shoes", element: <Shoes />, errorElement: <ErrorPage /> },
      { path: "/clothes", element: <Clothes />, errorElement: <ErrorPage /> },
      { path: "/electronics", element: <Electronics />, errorElement: <ErrorPage /> },
      { path: "/furniture", element: <Furniture />, errorElement: <ErrorPage /> },
      { path: "/Miscellaneous", element: <Miscellaneous />, errorElement: <ErrorPage /> },
      { path: "/Checkout", element: <Checkout />, errorElement: <ErrorPage /> },
      { path: "/", element: <Login />, errorElement: <ErrorPage /> },
      { path: "/About", element: <AboutUs />, errorElement: <ErrorPage /> },
      { path: "/contact", element: <ContactUs />, errorElement: <ErrorPage /> },
      { path: "/signup", element: <Signup />, errorElement: <ErrorPage /> },
      { path: "/test", element: <TestFirebase />, errorElement: <ErrorPage /> }
    ]
  }
]);

const Root = () => {
  return <RouterProvider router={appRouter} />;
}

export default Root;
