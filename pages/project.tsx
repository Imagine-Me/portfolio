import type { NextPage } from "next";
import { StaticImageData } from "next/image";
import { useEffect, useRef } from "react";
import Card from "../components/card/card";
import Column from "../components/grid/column";
import Row from "../components/grid/row";
import JumpiLetters from "../components/jumbi-letters/jumpi-letters";
import { LeftContent, LeftFullContent } from "../components/layout/content";
import H1 from "../components/Typography/h1/h1";
import PollImage from "../public/chart.png";
import classes from "./project.module.scss";

export interface DataProps {
  picture: StaticImageData;
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
];

const About: NextPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const height = containerRef.current.clientHeight;
      const windowHeight = window.innerHeight - 150;
      if (height > windowHeight) {
        containerRef.current.style.height = `${windowHeight}px`;
      }
    }
  }, []);

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
