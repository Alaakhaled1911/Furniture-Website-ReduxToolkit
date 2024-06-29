import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useSpring } from 'framer-motion';
import { motion, useScroll } from 'framer-motion';
import Container from 'react-bootstrap/Container';
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
const TopSell = () => {
    
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

  return (
    <>
    <motion.div ref={ref} variants={variants} initial="initial" whileInView="animate">
        <div className="txt">
          <h6>Top Selling products for you</h6>
          <h1>Top selling products</h1>
          <p>lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
        </motion.div>
    </>
  )
}

export default TopSell