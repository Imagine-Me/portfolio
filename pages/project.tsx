import type { NextPage } from "next";
import { StaticImageData } from "next/image";
import Card from "../components/card/card";
import Column from "../components/grid/column";
import Row from "../components/grid/row";
import JumpiLetters from "../components/jumbi-letters/jumpi-letters";
import { LeftContent, LeftFullContent } from "../components/layout/content";
import H1 from "../components/Typography/h1/h1";
import PollImage from "../public/chart.png";
import MeetImage from "../public/meet.png";
import TodoImage from "../public/todo.png";
import PortfolioImage from "../public/portfolio.png";
import classes from "./project.module.scss";
import useHeight from "../hooks/useHeight";

export interface DataProps {
  picture: StaticImageData | null;
  head: string;
  tags: string[];
  image: string;
  title: string;
  link: string;
  github: string;
  description: string;
}

const data: DataProps[] = [
  {
    picture: PollImage,
    head: "PollApp",
    tags: [
      "React JS",
      "Webpack",
      "Recoil JS",
      "Express JS",
      "Docker",
      "PostgreSQL",
      "Redis",
      "Sequelize",
    ],
    image: "",
    title: "PollApp",
    link: "https://pollapp-shell.netlify.app/",
    github: "https://github.com/Imagine-Me/pollapp",
    description:
      "A Microfrontend application for creating polls with MCQ questionnaire. User can authenticate using google, and create MCQ questions and share the poll.",
  },
  {
    picture: MeetImage,
    head: "Meet",
    tags: ["React JS", "WebRTC", "SocketIO", "Express JS"],
    image: "",
    title: "React Meet",
    link: "https://meet-p.netlify.app/",
    github: "https://github.com/Imagine-Me/meet",
    description:
      "A clone of google meet, created using webRTC and socket.io. Multiple users can join the meet using video and audio.",
  },
  {
    picture: TodoImage,
    head: "Todo",
    tags: ["Flutter", "BLoC"],
    image: "",
    title: "Todo",
    link: "https://play.google.com/store/apps/details?id=com.mindpalace.todo",
    github: "https://github.com/Imagine-Me/todo/settings",
    description:
      "A mobile application created using flutter, where user can save todos based on categories and get notifications.",
  },
  {
    picture: PortfolioImage,
    head: "Portfolio",
    tags: ["Next JS", "Framer motion"],
    image: "",
    title: "portfolio",
    link: "https://www.princethomas.dev/",
    github: "https://github.com/Imagine-Me/portfolio",
    description: "Portfolio created using NextJS and framer motion",
  },
];

const About: NextPage = () => {
  const containerRef = useHeight();
  return (
    <>
      <LeftContent></LeftContent>
      <LeftFullContent>
        <H1>
          <JumpiLetters text="Projects" />
        </H1>
        <div ref={containerRef} className={classes.ProjectContainer}>
          <Row>
            {data.map((val, index) => {
              return (
                <Column col={3} sm={12} md={4} key={index}>
                  <Card delay={index * 0.6} data={val} />
                </Column>
              );
            })}
          </Row>
        </div>
      </LeftFullContent>
    </>
  );
};

export default About;
