import { useEffect, useState } from "react";

const useBreakPoint = () => {
  const [device, setDevice] = useState("desktop");
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDevice("mobile");
      } else {
        setDevice("desktop");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return device;
};

export default useBreakPoint;
