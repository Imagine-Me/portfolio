import type { NextPage } from "next";
import Card from "../components/card/card";
import Column from "../components/grid/column";
import Row from "../components/grid/row";
import JumpiLetters from "../components/jumbi-letters/jumpi-letters";
import { LeftContent, LeftFullContent } from "../components/layout/content";
import H1 from "../components/Typography/h1/h1";
import useHeight from "../hooks/useHeight";
import { DataProps } from "./project";
import classes from "./project.module.scss";

interface Props {
  posts: DataProps[];
}

const Blogs: NextPage<Props> = ({ posts }) => {
  const containerRef = useHeight();
  return (
    <>
      <LeftContent></LeftContent>
      <LeftFullContent>
        <H1>
          <JumpiLetters text="Blogs" />
        </H1>
        <div ref={containerRef} className={classes.ProjectContainer}>
          <Row>
            {posts.map((val, index) => {
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

export default Blogs;
export async function getStaticProps() {
  let posts = [];
  try {
    const res = await fetch("https://dev.to/api/articles/me", {
      headers: {
        "api-key": process.env.DEV_API_TOKEN ?? "",
      },
    });
    posts = await res.json();
    posts = posts.map(
      (post: any) =>
        ({
          picture: null,
          head: "",
          tags: post.tag_list,
          image: post.cover_image,
          title: post.title,
          link: post.url,
          github: "",
          description: post.description,
        } as DataProps)
    );
  } catch (e) {
    console.log(e);
  }
  return {
    props: {
      posts,
    }, // will be passed to the page component as props
  };
}
