<<<<<<< HEAD
"use client"; // Esto marca el archivo como un componente cliente

import React from 'react';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import styles from '../styles';

const Navbar = () => (
=======
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';



const Navbar = () => (
  
>>>>>>> 68a33a6003fd9b86d8772d8cd5b0364d3485c5a7
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
<<<<<<< HEAD
    <div className="absolute w-1/2 inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}>
      <img src="/search.svg" alt="Buscar" />
      <h2 className="font-extrabold text-25px leading-30px text-white">
        <span className="custom-gradient-2">ACA</span>DEMY BALCONES
      </h2>
      <div>
        <button type="button" className="py-4 px-2 bg-#25618b rounded-16px text-white">
          Iniciar Sesión
        </button>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
=======
    
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img src="/search.svg" alt="Buscar" />
      <h2 className="font-extrabold text-[25px] leading-[30px] text-white items-center">
      <span className='custom-gradient-2'>ACA</span>DEMY
      </h2>
      <div className="">
      <button type="button" className="py-2 px-2 bg-[#25618b] rounded-[16px] gap-[5px] text-white">
        Inciar Sesion
      </button> 
      </div>
    </div>
  </motion.nav>

);

export default Navbar;

>>>>>>> 68a33a6003fd9b86d8772d8cd5b0364d3485c5a7
