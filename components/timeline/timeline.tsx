import { motion } from "framer-motion";
import H5 from "../Typography/h5/h5";
import classes from "./timeline.module.scss";

export default function Timeline() {
  const data = [
    {
      year: 2013,
      card: {
        title: "Engineering - Computer",
        date: "apr-2013 jun-2017",
        desc: "",
      },
    },
    {
      year: 2017,
      card: {
        title: "Freelancing",
        date: "jul-2017 may-2018",
        desc: "",
      },
    },
    {
      year: 2018,
      card: {
        title: "Keleno",
        date: "jun-2018 mar-2021",
        desc: "Software Engineer",
      },
    },
    {
      year: 2021,
      card: {
        title: "QBurst",
        date: "jun-2021 present",
        desc: "Senior Software Engineer",
      },
    },
  ];

  const getHeight = (year: number, endYear: number) => {
    const difference = endYear - year;
    return difference * 35;
  };

  return (
    <div className={classes.Container}>
      <div>
        {data.map((val, key) => {
          const height = getHeight(
            val.year,
            data[key + 1] ? data[key + 1].year : new Date().getFullYear()
          );
          return (
            <div
              className={classes.TimelineContainer}
              style={{ height: `${20 + height}px` }}
              key={key}
            >
              <Year
                year={val.year}
                delay={key * 1.6 + 1}
                position={key % 2 == 0 ? "left" : "right"}
              />
              <Line delay={key * 1.6 + 1.8} height={height} />
              <Card
                position={key % 2 != 0 ? "left" : "right"}
                title={val.card.title}
                date={val.card.date}
                description={val.card.desc}
                delay={key * 1.6 + 1.4}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

type position = "left" | "right";

interface YearProps {
  year: number;
  delay: number;
  position: position;
}

const animation = (delay: number, height = 0, duration = 0.8) => {
  return {
    initial: {
      height: 0,
    },
    visible: {
      height,
      transition: {
        height: {
          type: "linear",
          delay,
        },
      },
    },
    yearInitial: {
      opacity: 0,
    },
    yearVisible: {
      opacity: 1,
      transition: {
        delay,
      },
    },
  };
};

export function Year({ year, delay, position }: YearProps) {
  const classNames = [
    classes.Content,
    position == "left" ? classes.Left : classes.Right,
  ];
  return (
    <>
      <motion.div
        variants={animation(delay, 20)}
        initial="initial"
        animate="visible"
        className={classes.Item}
      ></motion.div>
      <motion.div
        variants={animation(delay)}
        initial="yearInitial"
        animate="yearVisible"
        className={classNames.join(" ")}
      >
        {year}
      </motion.div>
    </>
  );
}

interface LineProps {
  height: number;
  delay: number;
}

export function Line({ height, delay }: LineProps) {
  return (
    <motion.div
      initial="initial"
      animate="visible"
      variants={animation(delay, height)}
      className={classes.Line}
    ></motion.div>
  );
}

interface CardProps {
  title: string;
  date: string;
  description: string;
  position: position;
  delay: number;
}

const cardAnimation = (delay: number) => {
  return {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        opacity: {
          duration: 1,
          delay,
        },
      },
    },
  };
};

export function Card({ title, date, description, position, delay }: CardProps) {
  const className = [
    classes.Card,
    position == "left" ? classes.Left : classes.Right,
  ];
  return (
    <motion.div
      className={className.join(" ")}
      animate="animate"
      initial="initial"
      variants={cardAnimation(delay)}
    >
      <H5 className={classes.H5}>{title}</H5>
      <p className={classes.Date}>{date}</p>
      {description && <p className={classes.Description}>{description}</p>}
    </motion.div>
  );
}
