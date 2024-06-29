// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import AuthProvider from './CONTXT/AuthContxt';
// import Home from './Component/Home';
// import Signup from './AUTH/Signup';
// import Login from './AUTH/LoGin';
// import './App.css';
// import About from './Component/About';
// import ContactUs from './Component/ContactUs';
// import Cursor from './Component/Cursor';
// import Footer from './Component/Footer';
// import Top from './Component/Top';
// import Header from './Component/Header';
// import Recommend from './Component/Recommend';


// const App = () => {


 



  
//   return (
//     <Router>
//       {/* <AuthProvider> */}
//         <>
//         <Cursor/>
       
           
//           <Home />
//           <div className="main">
//             <Routes>
//               {/* <Route path="/signup" element={<Signup />} />
//               <Route path="/login" element={<Login />} /> */}
//               <Route path="/about" element={<About />} />
//             </Routes>
//             <section id='about'>
//             <About/>
//             </section>
//             <section>
//               {/* <Recommend  handleClick={handleClick}/> */}
//             </section>
//             <section>
//               <Top />
//             </section>
//             <section id='contact'>
//               <ContactUs/>
//             </section>
        
//           </div>
        
//           <Footer/>
//         </>
//       {/* </AuthProvider> */}
//     </Router>
//   );
// };

// export default App;
// //   return (
// //     <>
// //       <div>
   
// //         <Outlet />
       
// //       </div>
// //     </>
// //   );
// // };

// // const router = createBrowserRouter(
// //   [
// //     {
// //       path: "/",
// //       element: <Layout />,
// //       children: [
// //         {
// //           path: "/",
// //           element: <Home />,
       
// //         },
// //         // {
// //         //   path: "/product/:id",
// //         //   element: <Product />,
// //         // },
     
// //         {
// //           path: "/about",
// //           element: <About />,
         
// //         },
// //         {
// //           path:"/login",
// //           element:<Login />,
// //         },
     
      
// //       ],
// //     },
// //   ]
// // );
//----------------------------------------------------------------import 'bootstrap/dist/css/bootstrap.css';





import {
  createBrowserRouter,
  Outlet,
  parsePath,
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
import Cart from './Component/Cart';
import Shippingcard from './Component/Shippingcard';
import Login from './Component/Login';






const Layout = () => {
  return (
    <>
      <div>
     
      <Cursor/>
      <ScrollRestoration />
      <Outlet />
      <Footer />
      
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
        element: <About/>,

        }
     ,
        {
          path: "/contact",
          element: <ContactUs />,
         
        },
        {
          path:"/products",
          element:<Top />
        }
        ,
        {
          path: "/Cart/:id",
          element: <Cart />,
         
        },
        {
          path:"/shipping",
          element: <Shippingcard/>
        },
        {
          path:"/login",
          element: <Login />
        }
    
       
        
       
      
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
