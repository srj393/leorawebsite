import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import botox from "../../assets/botox.png";
import nailart from "../../assets/nailart.png";
import panchakarma from "../../assets/panchakarma.png";
import iv from "../../assets/iv.png";
import hydra from "../../assets/hydra.png";
import acne from "../../assets/acne.png";
import lipreduction from "../../assets/lipreduction.png";
import hairstyle from "../../assets/hairstyle.png";

// Define the slide animation using framer-motion
const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

// List of cards data to be displayed
const CardsData = [
  {
    id: 1,
    title: "Botox and Filler injection",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
    image: botox,
      
    link: "#",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Acne/Scar Treatment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
    image:acne,
    link: "",
    delay: 0.3,
  },
  {
    id: 3,
    title: "Nail Art",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
    image: nailart,
    link: "",
    delay: 0.4,
  },
  {
    id: 4,
    title: "Panchkarma",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
    image: panchakarma,
    link: "",
    delay: 0.5,
  },
  {
    id: 5,
    title: "Lip Augmentation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
    image: lipreduction,
    link: '',
    delay: 0.5,
  },
  {
    id: 6,
    title: "Hair styling",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
    image: hairstyle,
    link: "",
    delay: 0.5,
  },
  {
    id: 7,
    title: "IV Drip Therapy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
    image: iv,
    link: "",
    delay: 0.5,
  },
  {
    id: 8,
    title: "Hydra Facial Treatment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
    image: hydra,
    link: "",
    delay: 0.5,
  },  
];

const Cards = () => {
  return (
    <div className="bg-neutral-800">
      <h1 className="text-white text-center text-4xl p-4">Our Latest Treatments</h1>
      <div className="flex min-h-screen items-center justify-center bg-neutral-800">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 m-3">
          {CardsData.map((card) => (
            <motion.div
              key={card.id}
              variants={SlideLeft(card.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
            >
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={card.image}
                  alt={card.title}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  {card.title}
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {card.description}
                </p>
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-cyan-600">
                  <Link to={card.link}>See More</Link>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
