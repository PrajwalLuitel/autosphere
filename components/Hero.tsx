"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  const handleScroll = () => {
    router.push("/#catalogue");
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Discover the Stats of Your Favorite Cars !!
        </h1>

        <p className="hero__subtitle">
          Explore from a wide variety of cars and learn more about them !! A
          page for car enthusiasts !!
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
