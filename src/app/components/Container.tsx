"use client";
import Image from "next/image";

const Container = () => {
  return (
    <div className="flex justify-center py-10 md:flex-row md:justify-start">
      <div>
        <Image
          src="/cafesketch.png"
          alt="Cafe Sketch"
          width={400}
          height={400}
          className="px-10 w-[400px] h-[400px] md:w-[600px] md:h-[600px] "
        />
      </div>
    </div>
  );
};

export default Container;
