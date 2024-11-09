"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const brandsImages = [
    {
        src: "/assets/brands/brand-1.svg",
    },
    {
        src: "/assets/brands/brand-2.svg",
    },
    {
        src: "/assets/brands/brand-3.svg",
    },
    {
        src: "/assets/brands/brand-4.svg",
    },
    {
        src: "/assets/brands/brand-5.svg",
    },  
    {
        src: "/assets/brands/brand-6.svg",
    },  
    {
        src: "/assets/brands/brand-7.svg",
    },

];


const Brands = () => {
  return (
    <section className="w-full h-[24vh] pt-24 flex justify-center items-center">
        <div className="container mx-auto overflow-hidden">
            <div className="flex">
                <motion.div 
                    initial={{x: 0}} 
                    animate={{x: "-100%"}} 
                    transition={{duration: 20, repeat: Infinity, ease: "linear"}}
                    className="flex"
                >
                    {brandsImages.map((item, index)=> {
                        return <div className="relative w-52 h-20 mr-12" key={index}>
                            <Image src={item.src} fill alt="" className="object-contain"/>
                        </div>
                    })};
                </motion.div>
                {/* duplicated div */}
                <motion.div 
                    initial={{x: 0}} 
                    animate={{x: "-100%"}} 
                    transition={{duration: 20, repeat: Infinity, ease: "linear"}}
                    className="flex"
                >
                    {brandsImages.map((item, index)=> {
                        return <div className="relative w-52 h-20 mr-12" key={index}>
                            <Image src={item.src} fill alt="" className="object-contain"/>
                        </div>
                    })};
                </motion.div>
            </div>
        </div>
    </section>
  );
};

export default Brands;