import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-1/2 inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}>
      <img src="/search.svg" alt="Buscar" />
      <h2 className="font-extrabold text-25px leading-30px text-white">
        <span className="custom-gradient-2">ACA</span>DEMY
      </h2>
      <div>
        <button type="button" className="py-2 px-2 bg-#25618b rounded-16px text-white">
          Iniciar Sesión
        </button>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
