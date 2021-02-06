import { useEffect, useState } from "react";

export function useElementPosition(el) {
  const [elementPosition, setElementPosition] = useState({
    x: undefined,
    y: undefined,
    isResized: false,
  });

  useEffect(() => {
    const handlePosition = (isResized) => {
      let element = el.current;
      let x =
        element.getBoundingClientRect().left +
        document.documentElement.scrollLeft +
        element.offsetWidth / 2;
      let y =
        element.getBoundingClientRect().top +
        document.documentElement.scrollTop +
        element.offsetHeight / 2;

      setElementPosition({ x, y, isResized });
    };

    const handleResize = () => {
      handlePosition(true);
    };

    handlePosition(false);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [el]);

  return elementPosition;
}
