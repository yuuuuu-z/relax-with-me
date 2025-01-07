import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { PiCoffee, PiFlowerTulipLight } from "react-icons/pi";
import * as motion from "motion/react-client";
import Link from "next/link";
import { CiCoffeeCup } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="flex-col text-center md:flex md:flex-row-reverse md:justify-between md:items-center md:py-10 md:px-5">
      <div className="flex justify-center items-center gap-3 text-3xl py-5 ">
        <ThemeSwitch />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <PiCoffee />
        </motion.div>
        <div className="text-lg bg-amber-800 px-5 py-2 rounded-lg hover:scale-75 transform transition duration-500 ease-in-out">
          <Link
            href={
              "https://paypal.me/chuonsopheaktra?country.x=BH&locale.x=en_US"
            }
          >
            Buy me a coffee{" "}
            <span className="inline-flex text-3xl items-center align-middle">
              <CiCoffeeCup />
            </span>{" "}
          </Link>
        </div>
      </div>
      <div>
        <p className="text-2xl px-3 md:text-3xl ">
          Get a cup of coffee <br />
          and enjoy the moment with me{" "}
          <span className="inline-flex text-3xl items-center align-middle pb-2">
            {" "}
            <PiFlowerTulipLight />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
