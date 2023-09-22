'use client';


import { clients } from '../constants';
import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';
import { insights } from '../constants';


const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: 'false', amount: 0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col`}
  >
      <TypingText title="| Conoce Nuestro Contenido" textStyles="text-center"   />
      <TitleText  title={<>
           Noticias Sobre <span className="custom-gradient-2">ACA</span> Balcones
        </>} textStyles="text-center"   />

        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights.map((insight, index) => (
            <InsightCard key={`insight-${index}`}
            {...insight}  index={index + 1}/>
          ))}

        </div>
        <h2 className='p-[30px] text-white font-extrabold text-center mt-[90px] h-[30px] opacity-40'>Agradecemos su Colaboracion:</h2>
        <div className='p-[40px]'>
            <section className={`${styles.flexCenter} my-4  relative z-10`}>
              <div className={`${styles.flexCenter}
              flex-wrap w-full`}>
              {clients.map((client) =>(
             <div key={client.id} className={`flex-1 ${styles.flexCenter}
                 sm:min-w-[192px] min-w-[120px] opacity-40`}>
              <img src={client.logo} alt="clientes"
              className="sm:w-[192px] w-[100px] object-contain " />
            </div>
          ))}
             </div>
           </section>
      </div>
  </motion.div>
  </section>
);

export default Insights;
