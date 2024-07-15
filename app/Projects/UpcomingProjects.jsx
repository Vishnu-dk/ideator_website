import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    id: 11,
    img: "/assests/completed/multi_purpose_robo_arm.jpeg",
    title: "Gesture Based Commando Disaster Management Robot",
    des: "The objective of this project is to build a ROBOT that can be controlled by gesture wirelessly. User is able to control motions of the robot by wearing the controller glove and performing predefined gestures. In this project we are using a gyro controlled transmitter glove for the direction and speed control of the robot. For efficient aiding in commando operating and in the field of post disaster operation we are employing metal detection, gas detection and human detection. For better control of robot and for better analytic purpose real time video transmission is also done.",
    aosdelay: "",
  },
  {
    id: 12,
    img: "/assests/completed/multi_purpose_robo_arm.jpeg",
    title: "Inverted Pendulum Balancer",
    des: "The goal of this project is to implement an inverted pendulum balancer in the vertical two-dimensional plane, using proportional-integral-derivative (PID) feedback control. The inverted pendulum balancer is a controllable cart with an inverted pendulum attached to it. The system combines together a computational hardware, an input angle sensor and an output motor driver on a single board .The purpose of the system is to autonomously control the motion of the cart in order to prevent the pendulum from falling. The inputs over limited time in the form of pendulum position readings are mapped using algorithm to output in the form of motor control. The feedback control algorithm calculates the error in angle from the reference and relates to the motor velocity and direction using PID algorithm.The pendulum can be balanced by fine-tuning the variables-corresponding to the PID equation-according to system behavior.",
    aosdelay: "",
  },
];

const UpcomingProjects = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      className="min-h-[80vh] w-screen flex flex-col justify-center xl:px-0 "
    >
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row md:gap-[30px] mx-auto text-left">
          <div className="w-full md:w-[50%] xl:h-[400px] flex flex-col md:justify-between order-2 md:order-none  my-auto">
            <div className="my-auto">
              <div className="md:text-6xl text-5xl py-3 leading-none font-extrabold text-transparent text-outline">
                {project.id}
              </div>
              <div className="md:text-2xl text-lg py-2 font-bold leading-none text-base1 group-hover:text-acccent transition-all duration-500 capitalize">
                {project.title}
              </div>
              <p className="text-base2 md:text-sm text-xs py-2 opacity-95 font-light">
                {project.des}
              </p>
              <div className="border border-base1"></div>
            </div>
          </div>
          <div className="w-full md:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[400px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="lg:h-[400px] h-[200px] relative group w-3/4 mx-auto flex justify-center items-center bg-base2 ">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-primary z-10"></div>
                      <div className="relative w-full h-full">
                        <Image src={project.img} fill className="object-fill" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0  xl:mx-auto  z-30 w-full justify-between xl:w-max xl:jutify-none "
                btnStyles="bg-base1 text-primary hover:text-base1 hover:bg-primary text-base1 text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default UpcomingProjects;
