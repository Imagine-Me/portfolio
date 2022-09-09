import type { NextPage } from "next";
import JumpiLetters from "../components/jumbi-letters/jumpi-letters";
import H1 from "../components/Typography/h1/h1";

const Home: NextPage = () => {
  return (
    <>
      <H1>
        <JumpiLetters text="Hi," />
      </H1>
      <H1>
        <JumpiLetters text="I'm Prince Thomas" />
      </H1>
    </>
  );
};

export default Home;
