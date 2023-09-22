'use client';

import react from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';


const videosData = [
  {
    id: 1,
    title: 'Introduccion Conciencia Ambiental',
    src: "/video1.mp4",
  },
  {
    id: 2,
    title: 'Charla TED conciencia Ambiental',
    src: "/video1.mp4",
  },

  {
     id: 3,
     title: 'Contaminacion',
     src: "video1.mp4",

  },

  {
    id: 4,
    title: 'Documental la Brea',
    src: "/video1.mp4",

 },
  // Agrega más objetos de datos para tus videos aquí
];



const World = ( ) => (
  <section className={`${styles.paddings} relative z-10`}>
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: 'false', amount: 0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col`}
  
  >
    <TypingText title="| Conoce Nuestro Contenido" textStyles="text-center"   />
    <TitleText  
        title={<>
           Descubre <span className="custom-gradient">E-LEARNIG</span> con Aca Balcones
        </>} textStyles="text-center"
  />

</motion.div>
    <motion.div
      variants={fadeIn('up', 'tween', 0.3, 1)}
      className="bg-white shadow-md rounded-lg overflow-hidden"
      >
      <div className="absolute bottom-5 right-20 w-[70px] h-[70px]
       p-[6px] rounded-full bg-[#5d6680]">
         <img 
          src="people-01.png"
          alt="people"
          className="w-full h-full" 
          />
      </div>
      
    </motion.div>


    <section className="bg-white-100 top-[24px]">
      <div className="container mx-auto py-8">
        <motion.div variants={fadeIn('up', 'tween', 0.2, 1)} 
        className="text-2xl font-bold mb-4 text-center text-white">Videos Recientes</motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {videosData.map((video) => (
            <motion.div
              key={video.id}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              initial="hidden"
              animate="visible"
              className="bg-white shadow-md rounded-lg overflow-hidden top-[24px]"
            >
              <div className="relative">
                <iframe
                  src={video.src}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-2 right-2 p-2 bg-blue-500 text-white rounded-full">
                  <i className="fas fa-play"></i>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                <p className="text-gray-600">Hace 2 días</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  </section>
);

export default World;
