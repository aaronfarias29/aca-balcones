'use client';

import { cliente } from '../constants';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion'; 


const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: 'false', amount: 0.25}}
    className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
  >
    <motion.div
      variants={fadeIn('right', 'tween', 0.2, 1)}
      className="flex-[0.5] lg:max-w-[370px] flex
      justify-end flex-col gradient-05 sm:p-8 p-4
      rounded-[32px] border-[1px] border-[#6a6a6a] relative"
    >
      <div className="feedback-gradient"    />
      <div>
        <div className="lg:flex hidden items-center
          justify-center w-[90px] h-[100px] rounded-full
          bg-transparent border-[1px] border-white">
         <img 
           src="/aaron.jpeg"
           alt="arrow"
           className="w-[100%] h-[100%] object-contain rounded-full" 
        />
        </div>
        <h4 className="font-bold sm:text-[32px]
        text-[26px] sm:leading-[40px] leading-[36px] text-white">
          Aaron F.
        </h4>
        <p className="mt-[8px] font-normal sm:text-[18px]
        text-[12px] sm:leading-[22px] leading-[16px] text-white">
          Creador
        </p>
      </div>
      <p className="mt-[24px] font-normal sm:text-[24px]
        text-[18px] sm:leading-[45px] leading-[39px] text-white">
        "Aquí, en calidad de programador junior, he presentado la innovadora plataforma tecnológica ACA, la cual tiene como objetivo brindar a los recién llegados información adicional sobre este proyecto excepcional."
      </p>

    </motion.div>

    <motion.div
       variants={fadeIn('left', 'tween', 0.2, 1)}
       className="relative flex-1 flex justify-center items-center"
     >
      <iframe
         src="/salar.mp4"
         alt="planet-09"
         className="w-full lg:h-[610px] h-auto
         min-h-[210px] object-cover rounded-[40px]"
       />
    </motion.div>
 </motion.div>
  </section>
);


export default Feedback;
