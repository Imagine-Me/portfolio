import type { NextPage } from "next";
import Button from "../components/button/button";
import Column from "../components/grid/column";
import Row from "../components/grid/row";
import InputComponent, { TextAreaComponent } from "../components/input/input";
import JumpiLetters from "../components/jumbi-letters/jumpi-letters";
import { LeftContent } from "../components/layout/content";
import H1 from "../components/Typography/h1/h1";

const About: NextPage = () => {
  return (
    <LeftContent>
      <H1>
        <JumpiLetters text="Contact" />
      </H1>
      <form>
        <Row>
          <Column col={6} md={12} mt={4}>
            <InputComponent placeholder="Name" />
          </Column>

          <Column col={6} md={12} mt={4}>
            <InputComponent placeholder="Email" />
          </Column>

          <Column col={12} mt={4}>
            <TextAreaComponent placeholder="Description" multiple rows={5} />
          </Column>
          <Column col={12} mt={4}>
            <Button fullWidth size="lg">Send</Button>
          </Column>
        </Row>
      </form>
    </LeftContent>
  );
};

export default About;
