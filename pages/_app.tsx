import "../styles/global.scss";

import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import { useEffect, useRef } from "react";
import debounce from "../utils/debounce";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const touchStartRef = useRef<number>(0);
  const router = useRouter();

  const routes = ["/", "/about", "/project", "/blogs", "/contact"];

  const slideUp = () => {
    const index = routes.findIndex((route) => route == router.pathname) - 1;
    const currentRoute = index < 0 ? 0 : index;
    router.push(routes[currentRoute]);
  };
  const slideDown = () => {
    const index = routes.findIndex((route) => route == router.pathname) + 1;
    const currentRoute = index > 4 ? 4 : index;
    router.push(routes[currentRoute]);
  };

  const onWheelEvent = debounce((e: WheelEvent) => {
    if (e.deltaY < 0) {
      slideUp();
    } else {
      slideDown();
    }
  });

  const onTouchStart = (e: TouchEvent) => {
    touchStartRef.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientY;
    if (touchStartRef.current > touchEnd + 5) {
      slideDown();
    } else if (touchStartRef.current < touchEnd - 5) {
      slideUp();
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", onWheelEvent);
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("wheel", onWheelEvent);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onWheelEvent]);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
