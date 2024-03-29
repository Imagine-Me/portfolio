import { motion } from "framer-motion";
import Image from "next/image";
import { DataProps } from "../../pages/project";
import LinkButton from "../link-button/link-button";
import List from "../list/list";
import H3 from "../Typography/h3/h3";
import H5 from "../Typography/h5/h5";
import classes from "./card.module.scss";

interface Props {
  delay: number;
  data: DataProps;
}

const animate = (delay: number) => {
  return {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        opacity: {
          delay,
        },
      },
    },
  };
};

export default function Card({ delay, data }: Props) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover={{
        scale: 1.03,
      }}
      variants={animate(delay)}
      className={classes.Card}
    >
      <div
        className={classes.Top}
        style={{ backgroundImage: `url(${data.image})` }}
      >
        {data.picture && (
          <div className={classes.Content}>
            <Image src={data.picture} alt={data.head} />
            <H3>{data.head}</H3>
          </div>
        )}
        <div className={classes.Tags}>
          {data.tags.map((tag) => (
            <List key={tag} color="normal" size="small">
              {tag}
            </List>
          ))}
        </div>
      </div>
      <div className={classes.Bottom}>
        <H5>{data.title}</H5>
        <div style={{ margin: "10px 0" }}>
          <LinkButton link={data.link} type="link">
            Link
          </LinkButton>
          {data.github && (
            <LinkButton link={data.github} type="github">
              Github
            </LinkButton>
          )}
        </div>
        <div className={classes.Description}>{data.description}</div>
      </div>
    </motion.div>
  );
}
