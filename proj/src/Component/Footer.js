import React from 'react'
import { BsFacebook } from "react-icons/bs";


import { AiFillGithub} from "react-icons/ai";
import {AiFillDingtalkSquare} from "react-icons/ai";
import {AiOutlineInbox} from "react-icons/ai";
import {AiFillHeart} from "react-icons/ai"
import { AiFillLinkedin} from "react-icons/ai";
import { AiOutlineTwitter} from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

import './footer.css'

const Footer = () => {
  return (
    <div class="bg-blackk text-gray-600 py-20 font-titleFont " >
  <div class="max-w-screen-xl mx-auto grid grid-cols-4">
  
  
  
 
 
 <div className='flex gap-4 text-lg text-gray-400'>
 <BsFacebook className='hover:text-white duration-300 cursor-pointer'/>
 <AiFillGithub className='hover:text-white duration-300 cursor-pointer'/>
 <AiFillLinkedin className='hover:text-white duration-300 cursor-pointer' />
 <AiOutlineTwitter className='hover:text-white duration-300 cursor-pointer'/>
 <BsWhatsapp className='hover:text-white duration-300 cursor-pointer'/>
 </div>
    <div>
      <h2 class="text-2xl font-semibold mb-4">Locate us</h2>
      <div class="text-base flex flex-col gap-2">
        <p>MBD, RAB, Alex-EGYPT</p>
        <p>Mobile: 035060823</p>
        <p>Phone: 01228513749</p>
        <p>e-mail: Laptop@gmail.com</p>
      </div>
    </div>
    <div>
      <h2 class="text-2xl font-semibold text-white mb-4">Profile</h2>
      <div class="flex flex-col gap-2 text-base">
        <p class="flex items-center gap-3">
          <span>
            <i class="fas fa-user"></i>
          </span>
          my account
        </p>
        <p class="flex items-center gap-3">
          <span>
            <i class="fas fa-inbox"></i>
          </span>
          Check OUT
        </p>
        <p class="flex items-center gap-3">
          <span>
            <i class="fas fa-dingtalk"></i>
          </span>
          Orders
        </p>
        <p class="flex items-center gap-3">
          <span>
            <i class="fas fa-heart"></i>
          </span>
          help
        </p>
      </div>
    </div>
  
  </div>
</div>
  )
}


 export default Footer
 //________________________________________________
// import React from 'react';
// import { BsFacebook } from "react-icons/bs";
// import { AiFillGithub } from "react-icons/ai";
// import { AiFillDingtalkSquare } from "react-icons/ai";
// import { AiOutlineInbox } from "react-icons/ai";
// import { AiFillHeart } from "react-icons/ai"
// import { AiFillLinkedin } from "react-icons/ai";
// import { AiOutlineTwitter } from "react-icons/ai";
// import { AiOutlineUser } from "react-icons/ai";
// import { BsWhatsapp } from "react-icons/bs";
// import './footer.css';

// const Footer = () => {
//   return (
//     <>
//       <footer className="text-center text-lg-start bg-body-tertiary text-muted  mt-4 ko ">
//         <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
//           <div className="me-5 d-none d-lg-block">
//             <span>Get connected with us on social networks:</span>
//           </div>
//           <div>
//             <BsFacebook className="me-4 text-reset" />
//             <AiOutlineTwitter className="me-4 text-reset" />
//             <AiFillGithub className="me-4 text-reset" />
//             <AiFillHeart className="me-4 text-reset" />
//             <AiFillLinkedin className="me-4 text-reset" />
//             <AiFillGithub className="me-4 text-reset" />
//           </div>
//         </section>
//         <section>
//           <div className="container text-center text-md-start mt-5" >
//             <div className="row mt-5">
//               <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-center">
//                 <h6 style={{color:'deeppink'}} className="text-uppercase fw-bold mb-4">
//                   <i className="fas fa-gem me-3"></i>Company name
//                 </h6>
//                  <p style={{color:'black'}} >
//                   Here you can use rows and columns to organize your footer content. Lorem ipsum
//                   dolor sit amet, consectetur adipisicing elit.
//                 </p>
//               </div>
//               <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-center">
//                 <h6 style={{color:'deeppink'}} className="text-uppercase fw-bold mb-4">Products</h6>
//                 <p  style={{color:'black'}} >
//                   <a href="#!" className="text-reset" style={{color:'black'}}>Angular</a>
//                 </p>
//                 <p style={{color:'black'}}>
//                   <a href="#!" className="text-reset" style={{color:'black'}}>React</a>
//                 </p>
//                 <p style={{color:'black'}}>
//                   <a href="#!" className="text-reset" style={{color:'black'}}>Vue</a>
//                 </p>
//                 <p style={{color:'black'}}>
//                   <a href="#!" className="text-reset" style={{color:'black'}}>Laravel</a>
//                 </p>
//               </div>
//               <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-center">
//                 <h6 style={{color:'deeppink'}} className="text-uppercase fw-bold mb-4">Useful links</h6>
//                 <p style={{color:'black'}}>
//                   <a href="#!" className="text-reset">Pricing</a>
//                 </p>
//                 <p style={{color:'black'}}> 
//                   <a href="#!" className="text-reset">Settings</a>
//                 </p>
//                 <p style={{color:'black'}}>
//                   <a href="#!" className="text-reset">Orders</a>
//                 </p>
//                 <p style={{color:'black'}}>
//                   <a href="#!" className="text-reset">Help</a>
//                 </p>
//               </div>
//               <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-center">
//                 <h6 style={{color:'deeppink'}} className="text-uppercase fw-bold mb-4" >Contact</h6>
//                 <p style={{color:'black'}}><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
//                 <p style={{color:'black'}}>
//                   <i className="fas fa-envelope me-3"></i>
//                   info@example.com
//                 </p>
//                 <p  style={{color:'black'}}><i className="fas fa-phone me-3"  ></i> + 01 234 567 88</p>
//                 <p style={{color:'black'}} ><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
//               </div>
//             </div>
//           </div>
//         </section>
//         <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)",color:'deeppink' }}>
//           © 2021 Copyright:
//           <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
//         </div>
//       </footer>
//     </>
//   );
// }

// export default Footer;