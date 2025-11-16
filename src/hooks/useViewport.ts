import { useEffect, useState } from "react";

export const useViewport = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { width, isMobile: width < 768, isPC: width >= 768 };
};

export default useViewport;
