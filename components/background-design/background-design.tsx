import { createRef, useEffect, useMemo, useRef } from "react";
import classes from "./background-design.module.scss";

export default function BackgroundDesign() {
  const sectionRefs = useMemo(() => {
    const classList = [
      classes.First,
      classes.Second,
      classes.Third,
      classes.Fourth,
    ];
    return Array(4)
      .fill(1)
      .map((_, i) => ({
        className: classList[i],
        ref: createRef<HTMLDivElement>(),
      }));
  }, []);

  useEffect(() => {
    console.log(sectionRefs);

    sectionRefs.forEach((section, index) => {
      if (section.ref.current) {
        const height = section.ref.current.clientHeight;
        console.log(height, index);
        const width = height * 2.1;
        section.ref.current.style.width = `${width}px`;
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={classes.Container}>
      {sectionRefs.map((ref, i) => (
        <div key={i} ref={ref.ref} className={ref.className}></div>
      ))}
    </div>
  );
}
