import type { NextPage } from "next";
import Layout from "../components/layout/layout";
import H1 from "../components/Typography/h1/h1";

const Home: NextPage = () => {
  return (
    <Layout>
      <H1>Hi,</H1>
      <H1>{'I\'m Prince Thomas'}</H1>
    </Layout>
  );
};

export default Home;
