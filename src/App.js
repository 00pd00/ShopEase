import './App.css';
import Body from './Components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import ItemCard from './Components/ItemCard';
import ErrorPage from './Components/ErrorPage';
import {store , persistor} from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from './Components/Cart';
import ItemPage from './Components/ItemPage';
import { PersistGate } from 'redux-persist/integration/react'
import Shoes from './Components/Shoes';
import Clothes from './Components/Clothes';
import Electronics from './Components/Electronics';
import Furniture from './Components/Furniture';
import Miscellaneous from './Components/Miscellaneous';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Footer from './Components/Footer';




const App = () => {


  return (
    <Provider store={store} >
      <PersistGate persistor={persistor}>
        <div className=' md:min-w-full min-h-screen' >
      
      <Outlet  />
      <Footer/>
      </div>
      </PersistGate>
      
    </Provider>
    
  );
} 

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Body/>,
        errorElement:<ErrorPage/>,

      },
      {
        path:"/cart",
        element:<Cart/>,
        errorElement:<ErrorPage/>,

      },
      {
        path:"/itempage/:resId",
        element:<ItemPage/>,
        errorElement:<ErrorPage/>,

      },
      {
        path:"/item",
        element:<ItemCard/>,
        errorElement:<ErrorPage/>,

      }
      ,
      {
        path:"/shoes",
        element: <Shoes/>,
        errorElement:<ErrorPage/>,

      }
      ,
      {
        path:"/clothes",
        element:<Clothes/>,
        errorElement:<ErrorPage/>,

      },
      {
        path:"/electronics",
        element:  <Electronics/>,
        errorElement:<ErrorPage/>,

      },
      {
        path:"/furniture",
        element:<Furniture/>,
        errorElement:<ErrorPage/>,

      },
      {
        path:"/Miscellaneous",
        element:<Miscellaneous/>,
        errorElement:<ErrorPage/>,

      },
      {
        path:"/Checkout",
        element:<Checkout/>,
        errorElement:<ErrorPage/>,

      },
      {
        path:"/Login",
        element:<Login/>,
        errorElement:<ErrorPage/>,

      },
      {
        path:"/signup",
        element:<Signup/>,
        errorElement:<ErrorPage/>,

      }

    ]
  }
  
]);

const Root = () => {
  return <RouterProvider router={appRouter} />;
}

export default Root;
