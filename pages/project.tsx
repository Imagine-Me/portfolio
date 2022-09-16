import type { NextPage } from "next";
import JumpiLetters from "../components/jumbi-letters/jumpi-letters";
import { LeftContent, LeftFullContent } from "../components/layout/content";
import H1 from "../components/Typography/h1/h1";

const About: NextPage = () => {
  return (
    <>
      <LeftContent></LeftContent>
      <LeftFullContent>
        <H1>
          <JumpiLetters text="Projects" />
        </H1>
      </LeftFullContent>
    </>
  );
};

export default About;
