import { useEffect, useState } from "react";

export default function useWindow() {
  const [bounds, setBounds] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setBounds({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return bounds;
}
