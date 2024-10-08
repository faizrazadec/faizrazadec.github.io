import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { shaq, bwmap, worldmap } from '../assets';

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-auto right-0 z-0 h-[100vh] w-[70vw]">
        <div className="h-full w-full">
          <img
            src={bwmap}
            alt="world map"
            className="w-full h-full sm:block hidden object-cover"
          />
        </div>
      </div>

      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen flex justify-center items-center">
        <div className="relative w-full h-full">
          <img
            src={worldmap}
            alt="world map"
            className="w-full h-full sm:hidden block object-cover opacity-70" // Adjust opacity here
          />
        </div>
      </div>

      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[200px] ${styles.paddingX} 
          lg:max-w-7xl mx-auto flex flex-row items-start
          justify-between lg:gap-5 gap-2`}>
          <div className="flex flex-col justify-center items-center lg:mt-9 mt-7 lg:ml-9 sm:ml-1">
            <div className="lg:w-7 lg:h-7 w-4 h-4 rounded-full bg-[#6FC3DF]" />
            <div className="lg:w-2 lg:h-80 w-1 h-80 bg-gradient-to-b from-[#6FC3DF] to-transparent" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack lg:text-[90px] text-[28px] font-poppins uppercase`}>
              Hi, I'm{' '}
              <span
                className="text-battleGray sm:text-battleGray lg:text-[90px] 
                text-eerieBlack text-[30px] font-mova
                font-extrabold uppercase">
                Faiz Raza
              </span>
            </h1>

            <p className={`${styles.heroSubText} mt-1 text-eerieBlack`}>
            I develop the solution for the real world problems using Artifical Intelligence.
              {/* I develop the solution for the real world problems using <br className="sm:block hidden" />
              consectetur adipisicing elit deleniti, voluptas. */}
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

        <div
          className="absolute lg:bottom-10 bottom-5 w-full 
          flex justify-center items-center">
          <a href="#about">
            <div
              className="lg:w-[35px] lg:h-[64px] lg:rounded-3xl lg:border-4
            lg:border-eerieBlack lg:border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-battleGray mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        {/* <div>
          <img
            className="absolute bottom-0 ml-[50vw] 
            lg:ml-[75vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw]
            sm:h-[90vh] md:h-[70vh] xl:h-[80vh]"
            src={shaq}
            alt="shaquille"
          />
        </div> */}
      </section>
    </>
  );
};

export default Hero;
