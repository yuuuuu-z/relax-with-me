import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { PiCoffee } from "react-icons/pi";
import * as motion from "motion/react-client";

const Navbar = () => {
  return (
    <div className="flex-col text-center md:flex md:flex-row-reverse md:justify-between md:items-center md:py-10 md:px-5">
      <div className="flex justify-center items-center gap-3 text-3xl py-5">
        <ThemeSwitch />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <PiCoffee />
        </motion.div>
      </div>
      <div>
        <p className="text-2xl px-3 md:text-3xl ">
          Get a cup of coffee <br />
          and enjoy the moment with me.
        </p>
      </div>
    </div>
  );
};

export default Navbar;
