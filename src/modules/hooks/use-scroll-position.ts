import React from "react";

export const useScrollPosition = () => {
  const storedScrollPosition = Number(localStorage.getItem("scroll"));
  const [scrollPosition, setScrollPosition] =
    React.useState<number>(storedScrollPosition);

  React.useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();

    return () => {
      localStorage.setItem("scroll", String(scrollPosition));
      window.removeEventListener("scroll", updatePosition);
    };
  }, [scrollPosition]);

  return scrollPosition;
};
