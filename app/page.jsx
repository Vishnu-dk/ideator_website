"use client"

import Photo from '@/components/Photo';
import { motion } from 'framer-motion';
export default function Home() {
  return (
    <section className="relative h-full ">
      
      <div className="absolute lg:h-[500px] z-0 lg:w-2/3 md:h-[750px] md:w-[750px] h-[400px] w-[400px] lg:-top-1/4  md:-top-1/3 md:-left-1/2 top-[100px] lg:-left-3/5 right-3/4 bg-base1  rounded-3xl rotate-45  opacity-85 "></div>

      <div className="relative container mx-auto h-full  ">

        <div className="flex flex-col lg:flex-row  items_center w-full justify-between lg:pt-32 lg:pb-24 ">
          <div className="text-center mx-auto my-auto w-3/4 lg:w-1/2  lg:text-2xl text-lg  py-16 px-4 ">
          <motion.span           initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }} className=''>orem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the standard
                    dummy text ever since the 1500s,</motion.span>
                    
          </div>

          <div className='mb-8 xl:mb-0 mx-auto lg:w-1/2 my-auto py-16 lg:py-0'>
          <Photo/>
        </div>
        </div>

      </div>
    </section>
  );
}
