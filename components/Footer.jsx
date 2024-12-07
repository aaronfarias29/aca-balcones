// Añadir "use client" al principio del archivo para marcar el archivo como un componente de cliente.
"use client"; 

import React from 'react';
import { motion } from 'framer-motion';  // Importamos el motion para utilizar sus variantes
import { socials } from '../constants';
import { footerVariants } from '../utils/motion';
import styles from '../styles';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">Conoce Más Nuestro Proyecto</h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[26px] gap-[12px]"
        >
          <img src="/headset.svg" alt="headset" className="w-[24px] h-[24px] object-contain" />
          <span className="font-normal text-[16px] text-white">Contáctanos</span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">ACA BALCONES</h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2024 ACA-BALCONES. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
