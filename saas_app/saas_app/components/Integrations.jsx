  " use client";
  import Image from "next/image";
  import { delay, motion } from "framer-motion";
  import Button from "./Button";

  const icons = [
    {
      src: "./assets/integrations/notion.svg"
    },
    {
      src: "./assets/integrations/slack.svg"
    },
    {
      src: "./assets/integrations/google_drive.svg"
    },
    {
      src: "./assets/integrations/intercom.svg"
    },
    {
      src: "./assets/integrations/jira.svg"
    },
    {
      src: "./assets/integrations/dropbox.svg"
    },
    {
      src: "./assets/integrations/stripe.svg"
    },
    {
      src: "./assets/integrations/zapier.svg"
    },
    {
      src: "./assets/integrations/figma.svg"
    },
    {
      src: "./assets/integrations/confluence.svg"
    },
    {
      src: "./assets/integrations/mailchimp.svg"
    },
    {
      src: "./assets/integrations/whatsapp.svg"
    },
    {
      src: "./assets/integrations/invision.svg"
    },
    {
      src: "./assets/integrations/evernote.svg"
    },
    {
      src: "./assets/integrations/bitbucket.svg"
    },
    {
      src: "./assets/integrations/g-calendar.svg"
    },
    {
      src: "./assets/integrations/zendesk.svg"
    }
  ];

  const iconAnimation = {
    initial: {
      opacity: 0,
      y: 60
    },
    animate: (index)=> ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.65 * index,
      }
    })
  }

  import { fadeInOnScroll } from "@/motion/motionVariants";
  import { fadeInUpSpring } from "@/motion/motionVariants";

const Integrations = () => {
  return (
    <section className="py-24 xl:py-32 min-h-[720px] xl:mt-32">
      <div className="container mx-auto flex flex-col juustify-center items-center gap-8 xl:gap-16">
        {/* text */}
        <motion.div variants={fadeInOnScroll(0.2, 0.6)} initial="hidden" whileInView="visible" className="text-center">
          <h2 className="h2 mb-3">Unified Workflows</h2>
          <p className="lead">Integrate with top apps to create a seamless, connected experience.</p>
        </motion.div>
        {/* icon list */}
        <div className="flex flex-wrap gap-8 w-full max-w-[1024px] mx-auto place-content-center mb-8">
          {icons.map((icon, index)=> {
            return (
              <motion.div className="relative w-[80px] h-[80px]" 
              key={index} 
              custom={index} 
              variants={iconAnimation}
              initial="initial"
              whileInView="animate"
              > 
                <Image src={icon.src} fill alt="" />
              </motion.div>
            )
          })}
        </div>
        {/* btn */}
        <motion.div  
          initial= {{ y: 60,  opacity: 0, scale: 0.8}} 
          whileInView={{ y: 0, opacity: 1, scale: 1}}
          transition={{
            delay: 0.6,
            duration: 0.4,
            ease: [0.6, -0.05, 0.01, 0.99],
            type: "spring",
            stiffness: 100
          }}
        >
          <Button btnText="See all" />
        </motion.div>
       
      </div>

    </section>
  )
};

export default Integrations;