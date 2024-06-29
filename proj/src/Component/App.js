import 'bootstrap/dist/css/bootstrap.css';


import Products from './Component/Products';
import Product from './Component/Product';
import ErrorBoundary from './Component/ErrorBoundary';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom';
import Home from './Component/Home';

import './App.css';
import About from './Component/About';
import ContactUs from './Component/ContactUs';
import Cursor from './Component/Cursor';
import Footer from './Component/Footer';
import Top from './Component/Top';
import Header from './Component/Header';
import Recommend from './Component/Recommend';
import ErrorPage from './Component/ErrorPage';






const Layout = () => {
  return (
    <>
      <div>
     
      <Cursor/>
       
           
       <Home />
      </div>
    </>
  );
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home />,
          
        },

        {path:'/about',
        element: <About />,

        }
     ,
        {
          path: "/contactus",
          element: <ContactUs />,
         
        },
      
      
    
       
        
       
      
      ],
    },
   
  ]
);

function App() {
  return (
    <>
  
        <div>
          <div>
            <RouterProvider router={router} />
          </div>
        </div>
        <div>
         
        </div>
     
    </>
  );
}

export default App;
