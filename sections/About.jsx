'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0"   />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto 
        ${styles.flexCenter} flex-col`}
      >
        <TypingText title="| Sobre ACA-BALCONES" textStyles="text-center" />
        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal sm:text[32px]
          text-[20px] text-center text-secondary-white"
        >
          El área de conservacion ambiental <span className="font-extrabold text-white">"Balcones",</span> se encuentra
          en la ciudad de Negritos, distrito de la Brea, provincia de Talara,
          Región Piura. Cuenta con una extensión de 913.39 has, solo abarca territorio
          continental, pero colinda con el mar por el oeste, teniendo un límite de 200m
          desde la línea de marea alta hacia la zona continental. Comprende dos penínsulas:
          "Punta Pariñas" y <span className="font-extrabold text-white">"Punta Balcones",</span> siendo ésta última <span className="font-extrabold text-white">la Punta más occidental de América del Sur;</span> además cuenta con un humedal marino denominado
          "Balcones" que forma un ecosistema rico en flora y fauna bentónica y nectónica que sirve
          como fuente de alimentacion y zona de descanso de aves migratorias y playeras.
        </motion.p>

        <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain
        mt-[28px]"
        >

        </motion.img>


      </motion.div>


  
  </section>
);

export default About;
