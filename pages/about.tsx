import { AnimatePresence } from "framer-motion";
import type { NextPage } from "next";
import { useState } from "react";
import Button from "../components/button/button";
import { DownloadIcon, NextIcon } from "../components/icons/icon";
import JumpiLetters from "../components/jumbi-letters/jumpi-letters";
import { LeftContent, RightContent } from "../components/layout/content";
import TypewriterText from "../components/typewriter-text/typewriter-text";
import H1 from "../components/Typography/h1/h1";
import P from "../components/Typography/p/p";
import useWindow from "../hooks/useWindow";
import classes from "./about.module.scss";

interface Paragraph {
  text: string;
  duration: number;
  delay: number;
}

const About: NextPage = () => {
  const [timeLine, setTimeLine] = useState<boolean>(false);
  const { width } = useWindow();

  const paragraph1 = `I started my career right after completing my bachelor's degree in computer science over five years ago. Since then, I have created successful websites that are fast, easy to use, and built with best practices.`;
  const paragraph2 = `Even though I started as a front-end developer, I was always curious to learn new technologies, which made me explore other areas such as backend and deployments.`;
  const paragraph3 = `I'm always working on side projects (it takes time :D) that let me new technologies.`;

  const reducedParagraph = [paragraph1, paragraph2, paragraph3].reduce(
    (acc, value, index) => {
      return acc.concat({
        text: value,
        duration: 0.005,
        delay: acc[index - 1]
          ? acc[index - 1].delay + acc[index - 1].text.length * 0.005
          : 0,
      });
    },
    [] as Paragraph[]
  );

  let showLeftContent = true;
  if (width < 720 && timeLine) {
    showLeftContent = false;
  }
  return (
    <>
      <AnimatePresence>
        {showLeftContent && (
          <LeftContent>
            <div style={{ padding: "15px" }}>
              <H1>
                <JumpiLetters text="About" />
              </H1>
              <br />
              {reducedParagraph.map((paragraph, index) => (
                <P key={`paragraph_${index}`}>
                  <TypewriterText {...paragraph} />
                </P>
              ))}
              <br />
              <Button
                Icon={NextIcon}
                selected={timeLine}
                onClick={() => setTimeLine((prev) => !prev)}
              >
                <TypewriterText text="timeline" />
              </Button>
              <br />
              <Button Icon={DownloadIcon}>
                <TypewriterText text="resume" />
              </Button>
            </div>
          </LeftContent>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {timeLine && (
          <RightContent width={width}>
            <div className={classes.Close} onClick={() => setTimeLine(false)}>
              x
            </div>
            <H1>Time line</H1>
          </RightContent>
        )}
      </AnimatePresence>
    </>
  );
};

export default About;
