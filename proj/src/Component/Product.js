import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useSpring } from 'framer-motion';
import { motion, useScroll } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast , cssTransition } from "react-toastify";
import { AiOutlineArrowRight } from "react-icons/ai";
import { addtoCart } from '../store/ProductSlice';
import Header from './Header'
import c4Image from '../img/c2.png';
import image1 from '../img/white.jpg'; // Import the individual image files
import image2 from '../img/c11-.png';
import image33 from '../img/c3.png'; // Import the individual
import image3 from '../img/c5.png'; // Import the individual image files
import image6 from '../img/c6.png'; // Import the individual image files
import image7 from '../img/c7.png';
import image8 from '../img/c8.png'; //
import image9 from '../img/c9.png'; // Import the individual image
import image from '../img/c.png';
import image10 from '../img/Sofatable.png'
import image11 from '../img/interior-design.jpg'
import image12 from '../img/bed1.jpg'
import image13 from '../img/bed2.jpg'
import image14 from '../img/bed3.jpg'
import image15 from '../img/bed4.jpg'
import image16 from '../img/bed6.jpg'
import image17 from '../img/living2.jpg'
import image18 from '../img/living3.jpg'
import image19 from '../img/living4.jpg'
import image20 from '../img/living5.jpg'
import image21 from '../img/lamp.jpeg'
import image22 from '../img/lamp1.jpg'
import image23 from '../img/lamp2.jpg'
import image24 from '../img/lamp3.jpg'

import image26 from '../img/lamp5.jpg'
import image27 from '../img/lamp6.jpg'
import image28 from '../img/lamp7.jpg'
import image29 from '../img/lamp8.jpg'
import './product.css'

import Cart from './Cart';
import { useDispatch } from 'react-redux';


const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      StaggerChildren: 0.1,
    },
  },
};

const Product = ({ products }) => {
  const dispatch = useDispatch()

const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleAllProductsClick = () => {
    setSelectedCategory(null);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;
   
  const productsList = filteredProducts?.map((item) => {

    const _id = item.title;

  
    function idString(_id) {
      return String(_id).toLowerCase().split(" ").join("");
    };
    
    const rootId = idString(_id);
  

    const handleClick = (clickedItem) => {
      navigate(`/Cart/${rootId}`, {
        state: {
          item: clickedItem,
        },
      });
    };
  
    

 return(  
  
   <div  key={item.id}>
  

 <Card className="product" style={{ width: '18rem' }}>
 <img src={item.image} alt={item.title}  onClick={() => handleClick(item)} /> 
 {/* {item.image === 'white.jpg' &&  <img src={image1} alt={item.title} style={{ marginBottom: '10px' }}  onClick={handleClick}/>}  */}
   {/* {item.image === 'c3.png' &&   <img src={image33} alt={item.title} style={{ marginBottom: '10px' }} onClick={handleClick} />} */}
  {/* {item.image === 'c5.png' &&   <img src={image3} alt={item.title} style={{ marginBottom: '10px' }} onClick={handleClick} />}
  {item.image === 'c11-.png' && <img src={c4Image} alt={item.title} style={{ marginBottom: '10px' }} onClick={handleClick} />}
  {item.image === 'c6.png' &&   <img src={image6} alt={item.title} style={{ marginBottom: '10px' }}  onClick={handleClick}/>}
  {item.image === 'c7.png' &&   <img src={image7} alt={item.title} style={{ marginBottom: '10px' }} onClick={handleClick}/>}
  {item.image === 'c8.png' &&   <img src={image8} alt={item.title} style={{ marginBottom: '10px' }} onClick={handleClick} />}
  {item.image === 'c9.png' &&   <img src={image9} alt={item.title} style={{ marginBottom: '10px' }} onClick={handleClick} />}
  {item.image === 'c.png' &&    <img src={image} alt={item.title} style={{ marginBottom: '10px' }} onClick={handleClick} />} */}
  {/* {item.image === 'Sofatable.png' && <img src={image10} alt={item.title} style={{ marginBottom: '10px' }}  onClick={handleClick}/>}
  {item.image === 'interior-design.jpg' && <img src={image11} alt={item.title} style={{ marginBottom: '10px' }} onClick={handleClick} />}
  {item.image === 'bed1.jpg' && <img src={image12} alt={item.title} style={{ marginBottom: '10px' }}onClick={handleClick} />}    */}
  {/* <img src={productImages[item.image]} alt={item.title} style={{ marginBottom: '10px' }}  onClick={() => handleClick(item)}/> */}

  {/* {item.image === 'bed1.jpg' && <img src={image12} alt={item.title} style={{ marginBottom: '10px' }}onClick={handleClick} />}
  {item.image === 'bed2.jpg' && <img src={image13} alt={item.title} style={{ marginBottom: '10px' }}onClick={handleClick} />}
  {item.image === 'bed3.jpg' && <img src={image14} alt={item.title} style={{ marginBottom: '10px' }}onClick={handleClick} />}
  {item.image === 'bed4.jpg' && <img src={image15} alt={item.title} style={{ marginBottom: '10px' }}onClick={handleClick} />}
  {item.image === 'bed6.jpg' && <img src={image16} alt={item.title} style={{ marginBottom: '10px' }}onClick={handleClick} />}
  {item.image === 'living2.jpg' && <img src={image17} alt={item.title} style={{ marginBottom: '10px' }}onClick={handleClick} />}
  {item.image === 'living3.jpg' && <img src={image18} alt={item.title} style={{ marginBottom: '10px' }}onClick={handleClick} />}
  {item.image === 'living4.jpg' && <img src={image19} alt={item.title} style={{ marginBottom: '10px' }}onClick={handleClick} />}
  {item.image === 'living5.jpg' && <img src={image20} alt={item.title} style={{ marginBottom: '10px' }}onClick={handleClick} />}
  {item.image === 'lamp.jpg' && <img src={image21} alt={item.title} style={{ marginBottom: '10px' }}onClick={handleClick} />}
  {item.image === 'lamp1.jpg' && <img src={image22} alt={item.title} style={{ marginBottom: '10px' }}onClick={handleClick} />}
  {item.image === 'lamp2.jpg' && <img src={image23} alt={item.title} style={{ marginBottom: '10px' }}onClick={handleClick} />}
  {item.image === 'lamp3.jpg' && <img src={image24} alt={item.title} style={{ marginBottom: '10px' }}onClick={handleClick} />}
  {item.image === 'lamp5.jpg' && <img src={image26} alt={item.title} style={{ marginBottom: '10px' }}onClick={handleClick} />}
  {item.image === 'lamp6.jpg' && <img src={image27} alt={item.title} style={{ marginBottom: '10px' }}onClick={handleClick} />}
  {item.image === 'lamp7.jpg' && <img src={image28} alt={item.title} style={{ marginBottom: '10px' }}onClick={handleClick} />}
  {item.image === 'lamp8.jpg' && <img src={image29} alt={item.title} style={{ marginBottom: '10px' }}onClick={handleClick} />}

  {item.image === 'c11-.png' &&  <img src={image2} alt={item.title} style={{ marginBottom: '10px' }}  onClick={handleClick}/>}
  {item.image === 'c2.png' &&  <img src={c4Image} alt={item.title} style={{ marginBottom: '10px' }}  onClick={handleClick}/>}  */}
 
  <Card.Body>
    <Card.Title className='titl'>{item.title}</Card.Title>
    <Card.Text className='categ'>
     {item.category}
    </Card.Text>
    <div className="price">
       <div className="newprice">{item.price}$</div>
      <div className="oldprice">{item.price}$</div>
      <p  className='add'
      
                

                        onClick={() =>
                          dispatch(
                            addtoCart({ 
                              id: item.id,
                              title: item.title,
                              image:item.image,
                              price: item.price,
                              oldprice:item.oldprice,
                              category:item.category,
                              quantity:1,
                            })
                          ) & toast.success(`${item.title} is added`)
                        }
                       
                      >
                        Add to cart
                        <span className="icn">
                          <AiOutlineArrowRight />
                        </span>
                      </p>
       </div>
  </Card.Body>
</Card>
      
   
      
    </div>)
});
 
  const ref = useRef();
  const { scrollXProgress } = useScroll({ container: ref });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const categories = [...new Set(products?.map((product) => product.category))];

  return (
    <>
   
      <motion.div ref={ref} variants={variants} initial="initial" whileInView="animate" className='prod'>
       
        <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
        <Nav className="me-auto">
          <Nav.Link onClick={handleAllProductsClick} className="all">All Products</Nav.Link >
          {categories.map((category) => (
            <Nav.Link  key={category} onClick={() => handleCategoryClick(category)}   >
              {category}
            </Nav.Link >
           
          ))}
           </Nav>
           </Container>
           
  </Navbar>
        <motion.div className="product-grid">
          <div className="conta">
            {productsList}
          </div>
          
          <ToastContainer
                position="top-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                style={{
                  backgroundColor: "transparent",
                  color: "#333",
                }}
              />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Product;
