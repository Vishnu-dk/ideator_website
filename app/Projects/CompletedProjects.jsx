import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const projects = [
  {
    id: 1,
    img: '/assests/completed/multi_purpose_robo_arm.jpeg',
    title: "Multi purpose Robotic Arm",
des:"The multipurpose Robotic arm is the brainchild of the team led by Sreerag of 3rd year civil. After pitching their idea they were invited to Startup Village to present their prototype to suitable investors.",    aosdelay: "0",
  },
  {
    id: 2,
    img: "/assests/completed/multi_purpose_robo_arm.jpeg",
    des: "The project was done by Don Paul and his team from S8 Production and aimed at helping People with paralysis and their families. The project was among the top 20 projects shortlisted for Manorama Yuva Mastermind 2016 from across Kerala.",
    title: "Bed with lavatory and cleaning facilities",
    aosdelay: "200",
  },
  {
    id: 3,
    img: "/assests/completed/multi_purpose_robo_arm.jpeg",
    title: "iPost",
    des: "iPost is A Street light monitoring and electrical accidents prevention device conceived by Shyam Pradeep of S4 EEE and realized with the help of the team at Ideator. The project won first prize at ICFoSS FITM IoT based project competition held at Trivandrum and obtained 50,000 for the further development of the project",
    aosdelay: "400",
  },
  {
    id: 4,
    img: "/assests/completed/multi_purpose_robo_arm.jpeg",
    title: "Automatic Sealing Machine",
    des: "Automatic sealing machine is a machine which makes the seal-punching process fast and accurate. It uses scotch-yoke mechanism to convert rotation motion into reciprocating, and 2 rollers are used for the paper rolling process. The whole process is synchronized by arduino based system. Machine is versatile, that it supports papers of different thickness and replicable seal. The advantage of our sealing machine lies in the fact that it has comparatively low cost and is easy to use",
    aosdelay: "600",
  },
  {
    id: 5,
    img: "/assests/completed/multi_purpose_robo_arm.jpeg",
    title: "Pipe Inspection Robot",
    des: "Several experimental studies have explored the concept of robots that travel inside pipe networks for purposes of inspection, cleaning, or repair. The authors undertook the design and implementation of such a robot as a senior engineering design project to investigate several new variations of this idea. This mobility is made possible using a set of free-spinning wheels, pitched like the blades of a turbine, which are rotated coaxially with the pipe, providing forward propulsion in the manner of a turning screw. Although some of the project goals were not completely fulfilled, efforts to correct any remaining deficiencies are ongoing.",    aosdelay: "600",
  },
  {
    id: 6,
    img: "/assests/completed/multi_purpose_robo_arm.jpeg",
    title: "Pick and place robot",
    des: "A mobile pick and place robot is being built from scratch by our team . the bot will make use of hydraulic mechanism and microcontrollers. Robotic pick and place automation speeds up the process of picking parts up and placing them in new locations, increasing production rates.  The robots can be easily programmed and tooled to provide multiple applications if required. An increase in output with a pick and place robot system offer long-term savings to companies. With the advancements in technology and affordability of robots, more pick and place robotic cells are being installed for automation applications.",
    aosdelay: "600",
  },
  {
    id: 7,
    img: "/assests/completed/multi_purpose_robo_arm.jpeg",
    title: "Robo soccer",
    des: "Robo soccer is like ordinary soccer but with robots. As the part of ideator expo we conducted Robo soccer for the audience who visit the event. It is actually controlled by Bluetooth or a Bluetooth controlled robot . Each player will be given a controller and a bot . his objective is to score a goal against the opponent",
    aosdelay: "",
  },
  {
    id: 8,
    img: "/assests/completed/multi_purpose_robo_arm.jpeg",
    title: "Line Follower Bot",
    des: "Line followers are one of the most prominent kinds of robot. They have existed for a very long time , however the technologies used for building them have changed rapidly. Earlier controller boards the size of bricks were used , but now they have shrunk and become tremendously powerful",
    aosdelay: "",
  },
  {
    id: 9,
    img: "/assests/completed/multi_purpose_robo_arm.jpeg",
    title: " Blind Man's Eye",
    des: "Mobility for the blind can be defined as the ability to move with ease, speed and safely through his environment independently. Through this project we put in an effort to illuminate the perpetually dark world of the blind. We present here an electronic travel aid device consisting of ultrasonic sensor to detect obstacles on the way within a distance of two to three meters. The discrete distance of the object is then measured and sensed by tactile vibrators, thus allowing the blind to walk comfortably.  ",
    aosdelay: "",
  },
  {
    id: 10,
    img: "/assests/completed/multi_purpose_robo_arm.jpeg",
    title: "Low Cost PCB Milling Machine",
    des: "The goal of this project is to design and construct a PCB milling machine. The design part consists of four steps: machine specifications, machine frame blue print, programming and electronics design. A PCB Mill is a device that etches out a pattern on a copper clad board such that it makes a Printed Circuit Board (PCB). PCBs are used everywhere in the field of electrical engineering to connect electrical components to one another. The advantage of the PCB Mill is its ability to create a prototype in less than a couple hours and at a much reduced cost compared to outsourcing. The current price of a commercial PCB Milling device is around 1 LAKH which is a significant investment for most small labs or individuals wishing to quickly prototype. The solution would be - Make a PCB Mill at low cost.",
    aosdelay: "",
  },
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

const CompletedProjects = () => {
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
              <p className="text-base2 md:text-sm text-xs py-2 opacity-95 font-light">{project.des}</p>
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
                      <div></div>
                      <div className="relative w-full h-full">
                        <Image src={project.img} fill className="object-fill"/>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CompletedProjects;
