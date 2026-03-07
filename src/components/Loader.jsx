import { useGSAP } from "@gsap/react";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const dismissLoader = () => {
  gsap.to(".loader-screen", {
    y: "-100%",
    duration: 1,
    ease: "power2.inOut",
  });
};

const Loader = () => {
  const { progress } = useProgress();
  const dismissed = useRef(false);

  // Dismiss as soon as progress reaches 100%
  useGSAP(() => {
    if (progress === 100 && !dismissed.current) {
      dismissed.current = true;
      dismissLoader();
    }
  }, [progress]);

  // Safety fallback: always dismiss after 5 seconds even if WebGL fails
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed.current) {
        dismissed.current = true;
        dismissLoader();
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loader-screen bg-black-100 w-screen h-dvh fixed top-0 left-0 z-[100]">
      <div className="flex-center w-full h-full">
        <img src="/images/loader.gif" alt="loader" />
      </div>
      <div className="text-white-50 font-bold text-7xl leading-none gradient-title absolute bottom-10 right-10">
        {Math.floor(progress)}%
      </div>
    </div>
  );
};

export default Loader;
