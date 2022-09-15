import type { NextPage } from "next";
import Box from "../components/box/box";
import JumpiLetters from "../components/jumbi-letters/jumpi-letters";
import { LeftContent } from "../components/layout/content";
import { Github, LinkedIn } from "../components/links/social-media";
import List from "../components/list/list";
import TypewriterText from "../components/typewriter-text/typewriter-text";
import H1 from "../components/Typography/h1/h1";
import H3 from "../components/Typography/h3/h3";

const Home: NextPage = () => {
  const frontEnd = [
    "React JS",
    "Vue JS",
    "Flutter",
    "Material UI",
    "JQuery",
    "Tailwind CSS",
    "Ant Design",
    "HTML",
    "CSS",
    "SCSS",
    "Bootstrap",
  ];
  const backEnd = ["Node JS", "Python", "Django", "Express JS", "Docker"];
  const others = ["PostgreSQL", "MongoDB", "SQLite"];
  return (
    <LeftContent>
      <div style={{ padding: "15px" }}>
        <H1>
          <JumpiLetters text="Hi," />
        </H1>
        <H1>
          <JumpiLetters text="I'm Prince Thomas" />
        </H1>
        <br />
        <H3>
          <TypewriterText text="Fullstack Developer" />
        </H3>
        <br />
        <Box>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Imagine-Me"
          >
            <Github />
          </a>
          <a
            style={{ marginLeft: "10px" }}
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/prince-thomas-396b0a16a/"
          >
            <LinkedIn />
          </a>
        </Box>
        <br />
        <br />
        <Box>
          {frontEnd.map((val, index) => {
            return (
              <List key={`list_frontend_${index}`} color="front-end">
                {val}
              </List>
            );
          })}
        </Box>
        <Box>
          {backEnd.map((val, index) => {
            return (
              <List key={`list_backend_${index}`} color="back-end">
                {val}
              </List>
            );
          })}
        </Box>
        <Box>
          {others.map((val, index) => {
            return (
              <List key={`list_others_${index}`} color="others">
                {val}
              </List>
            );
          })}
        </Box>
        <Box>
          <List>Git</List>
        </Box>
      </div>
    </LeftContent>
  );
};

export default Home;
