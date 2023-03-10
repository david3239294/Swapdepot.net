"use client"

import { motion } from "framer-motion";
import { navVariants } from "../animation/motion";

const Navbar = () => {
  return (
    <>
  

      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`sm:px-16 px-6 py-8 relative`}
      >
        <div className="absolute w-[50%] inset-0 gradient-01" />
        <div className="2xl:max-w-[1280px] w-full mx-auto flex justify-between gap-8" >   
          <h2 className="font-extrabold text-[24px] leading-[10px] text-white uppercase">SwapDepot.net</h2>
        </div>
       
      </motion.nav>
    </>
  )
}

export default Navbar;