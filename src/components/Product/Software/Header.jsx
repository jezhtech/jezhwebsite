
import { motion } from "framer-motion";
import ANim from "../../../ui/Anim.jsx";
import Pattern from "../../../ui/RandomPatterns3.jsx"
import Background from "../../../assets/image2/background/banner-bg1.jpg"
import Swipable from "../../../ui/SwipeButton.jsx/Swipe1.jsx"

function Header() {
  const onScroll = () => {
    const scrollAmount = window.innerHeight * 0.60; 
    window.scrollBy({
      top: scrollAmount, 
      behavior: "smooth", 
    });
  };
  const sentence =
    "Our wide range of software solutions cater to diverse business needs, empowering efficiency and growth.";

  return (
    <div 
    className="relative pt-20 flex flex-col justify-center items-center gap-10 font-jakarta  overflow-hidden">
      <div className="absolute w-full h-full object-cover  z-[-1]">
        <img src={Background} alt="" />
      </div>
      <Pattern/>
      <div className="flex flex-col items-center justify-center p-6 gap-6 mt-20 text-neutral-900  ">
        <ANim>
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold ">
          Software Services 
          </h1>
        </ANim>
        <motion.div
          className="text-lg md:text-xl max-w-[560px] text-center text-gray-600 leading-relaxed"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.03,
                delayChildren: 1,
              },
            },
          }}
        >
          {sentence.split("").map((char, index) => (
            <motion.span
              key={index}
              className="inline-block font-montserrat"
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
        <ANim delay={5}>
          <div onClick={onScroll}>
          <Swipable textColor="text-white">Know More</Swipable>
          </div>
        </ANim>
      </div>
    </div>
  );
}

export default Header;


