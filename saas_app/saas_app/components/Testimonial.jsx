import { motion } from "framer-motion";
import { BiSolidQuoteLeft } from "react-icons/bi";

import { fadeInOnScroll } from "@/motion/motionVariants";

const testimonial = [
    {
        name: "John Destiny",
        message: "This service was incredible! It exceeded all my expectations and I couldn't be happier with the results.",
    },
    {
        name: "Dorathy Akpan",
        message: "This service was incredible! It exceeded all my expectations and I couldn't be happier with the results.",
    },
    {
        name: "Stella Green",
        message: "This service was incredible! It exceeded all my expectations and I couldn't be happier with the results.",
    },
    {
        name: "Momodu Precious",
        message: "This service was incredible! It exceeded all my expectations and I couldn't be happier with the results.",
    },
    {
        name: "Lawkin Showers",
        message: "This service was incredible! It exceeded all my expectations and I couldn't be happier with the results.",
    },
    {
        name: "Daniel Garvey",
        message: "This service was incredible! It exceeded all my expectations and I couldn't be happier with the results.",
    },
    {
        name: "Pamela Timidi",
        message: "This service was incredible! It exceeded all my expectations and I couldn't be happier with the results.",
    },
    {
        name: "Anita Lucky",
        message: "This service was incredible! It exceeded all my expectations and I couldn't be happier with the results.",
    },
    {
        name: "Ruth Reuben",
        message: "This service was incredible! It exceeded all my expectations and I couldn't be happier with the results.",
    },
];

const Testimonial = () => {
  return (
    <section className="w-full mb-24 xl:mb-32 flex justify-center items-center">
        <div className="overflow-hidden">
            {/* text */}
            <motion.div variants={fadeInOnScroll(0.2, 0.4)} initial="hidden" whileInView="visible">
                <h2 className="h2 mb-4 text-center">
                    What People Are Saying
                </h2>
            </motion.div>
            {/* card list */}
            
                <motion.div variants={fadeInOnScroll(0.2, 0.6)} initial="hidden"  whileInView="visible" className="flex">
                    <motion.div initial={{x:0}} animate={{x:"-100%"}} transition={{duration: 30, repeat: Infinity, ease: "linear"}}   
                        className="flex">{testimonial.map((item, index)=> {
                        return <div key={index} className="relative w-[460px] h-[300px] bg-[#0e11354e] mr-12 rounded-2xl flex flex-col justify-center px-14"> 
                            <BiSolidQuoteLeft className="text-accent mb-3 text-3xl" />
                            <p className="mb-4 text-lg text-white/80">{item.message}</p>
                            <p className="text-xl">{item.name}</p>
                        </div>
                    })}</motion.div>

                    <motion.div initial={{x:0}} animate={{x:"-100%"}} transition={{duration: 30, repeat: Infinity, ease: "linear"}}   
                        className="flex">{testimonial.map((item, index)=> {
                        return <div key={index} className="relative w-[460px] h-[300px] bg-[#0e11354e] mr-12 rounded-2xl flex flex-col justify-center px-14"> 
                            <BiSolidQuoteLeft className="text-accent mb-3 text-3xl" />
                            <p className="mb-4 text-lg text-white/80">{item.message}</p>
                            <p className="text-xl">{item.name}</p>
                        </div>
                    })}</motion.div>
                </motion.div>
            
        </div>
    </section>
  );
};

export default Testimonial;