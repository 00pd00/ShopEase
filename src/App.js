import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import ItemCard from './Components/ItemCard';
import ErrorPage from './Components/ErrorPage';
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from './Components/Cart';
import ItemPage from './Components/ItemPage';

const App = () => {
  return (
    <Provider store={appStore} >
      <div>
      <Header />
      <Outlet/>
    </div>
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

    ]
  }
  
]);

const Root = () => {
  return <RouterProvider router={appRouter} />;
}

export default Root;
