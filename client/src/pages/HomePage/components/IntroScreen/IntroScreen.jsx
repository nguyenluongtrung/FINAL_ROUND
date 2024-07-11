import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import "./IntroScreen.css";
import { useTypewriter } from "react-simple-typewriter";

const IntroScreen = ({ onComplete }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const timer = setTimeout(() => {
        console.log("GO HOME PAGE")
      onComplete();
    }, 5000); // Duration of the intro animation

    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [onComplete]);

  const [typeEffect] = useTypewriter({
    words: ["CHÚC MỪNG 25 NĂM THÀNH LẬP HỆ THỐNG FPT EDUCATION !!!!!!!!"],
    loop: {},
    typeSpeed: 70,
    deleteSpeed: 40,
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 text-white">
      <Confetti
        width={width}
        height={height}
        numberOfPieces={300}
        recycle={false}
      />
      <div className="intro-animation w-full h-full flex items-center justify-center p-60 bg-white">
        <div className="font-bold text-primary text-7xl">{typeEffect}</div>
      </div>
    </div>
  );
};

export default IntroScreen;
