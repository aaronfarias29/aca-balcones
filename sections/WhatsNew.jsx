'use client';


import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { NewFeatures, TitleText, TypingText } from '../components';
import { newFeatures } from '../constants';



const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>

  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: 'false', amount: 0.25}}
    className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
  
  >

      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[1.95] flex justify-center flex-col"
      >
        <TypingText title="| Aprender Juntos sobre el cuidado de Nuestras Especies"  />
        <TitleText title={<>Nuestro Objetivo es el Cuidado de la <span className="custom-gradient-2">Diversidad</span> Biológica.</>}   />
        /
        <div className="mt-[48px] flex flex-wrap justify-between
          gap-[30px]">
          {newFeatures.map((feature) => (
            <NewFeatures   
              key={feature.title}
              {...feature}
            />
          ))}
        </div> 
      </motion.div>
      <motion.div
         variants={planetVariants('right')}
          className={`flex-1 ${styles.flexCenter}`}
       >
          <img 
            src="/aves.png" 
             alt="aves"
            className="w-[100%] h-[100%] object-contain"
           />
    </motion.div>
  </motion.div>
</section>
);

export default WhatsNew;
