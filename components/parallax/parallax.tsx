import { HTMLAttributes, useRef, MouseEvent, useEffect } from "react";
import classes from "./parallax.module.scss";

interface RefProps {
  width: number;
  height: number;
}

const Parallax = (props: HTMLAttributes<HTMLDivElement>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animateData = useRef<RefProps>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (containerRef.current) {
      animateData.current.width = containerRef.current.clientWidth;
      animateData.current.height = containerRef.current.clientHeight;
    }
  }, []);

  const onMouseMove = (e: MouseEvent) => {
    if (containerRef.current) {
      const containerPosition = containerRef.current.getBoundingClientRect();
      const mouseX =
        e.pageX - containerPosition.x - animateData.current.width / 2;
      const mouseY =
        e.pageY -
        containerRef.current.clientTop -
        animateData.current.height / 2;

      const PX = mouseX / animateData.current.width;
      const PY = mouseY / animateData.current.height;
      const rX = PX * 30;
      const rY = PY * -30;
      const oldRange =
        containerRef.current.clientWidth - e.pageX - containerPosition.x;
      const newRange = 20;
      let left = 0;
      if (window.innerWidth > 720) {
        left = ((e.pageX - containerPosition.x) * newRange) / oldRange;
      }
      containerRef.current.style.transform = `rotateY(${rX}deg) rotateX(${rY}deg) scale(1.1) translateX(${left}px)`;
    }
  };
  const onMouseLeave = () => {
    if (containerRef.current) containerRef.current.style.transform = `none`;
  };

  let { className } = props;
  className = className ? `${classes.Wrapper} ${className}` : classes.Wrapper;
  return (
    <div
      {...props}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
      ref={containerRef}
    />
  );
};

export default Parallax;
