import type { NextPage } from "next";
import Head from "next/head";
import { FormEvent, useReducer, useState } from "react";
import Button from "../components/button/button";
import Column from "../components/grid/column";
import Row from "../components/grid/row";
import { SendIcon } from "../components/icons/icon";
import InputComponent, { TextAreaComponent } from "../components/input/input";
import JumpiLetters from "../components/jumbi-letters/jumpi-letters";
import { LeftContent } from "../components/layout/content";
import TypewriterText from "../components/typewriter-text/typewriter-text";
import H1 from "../components/Typography/h1/h1";
import P from "../components/Typography/p/p";

interface ValueProps {
  value: string;
  error: string;
}
interface FormData {
  name: ValueProps;
  email: ValueProps;
  description: ValueProps;
}

interface Action {
  type: "name" | "email" | "description";
  payload: ValueProps;
}

const initialState = {
  name: { value: "", error: "" },
  email: { value: "", error: "" },
  description: { value: "", error: "" },
} as FormData;

const slackNotificationBlock = (formData: FormData) => ({
  blocks: [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*Someone contacted you!*",
      },
    },
    {
      type: "section",
      block_id: "section567",
      text: {
        type: "mrkdwn",
        text: `\`Name\`: ${formData.name.value}`,
      },
    },
    {
      type: "section",
      block_id: "section568",
      text: {
        type: "mrkdwn",
        text: `\`Email\`: ${formData.email.value}`,
      },
    },
    {
      type: "section",
      block_id: "section570",
      text: {
        type: "mrkdwn",
        text: `\`Description\`: ${formData.description.value}`,
      },
    },
  ],
});

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "name": {
      return { ...state, name: action.payload };
    }
    case "email": {
      return { ...state, email: action.payload };
    }
    case "description": {
      return { ...state, description: action.payload };
    }
  }
};

const About: NextPage = () => {
  const [formData, dispatch] = useReducer(reducer, initialState);
  const [showMessage, setShowMessage] = useState(false);

  const validate = () => {
    let flag = true;
    const name = { ...formData.name };
    if (name.value.length < 3) {
      name.error = "Name required";
      flag = false;
      dispatch({ type: "name", payload: name });
    }

    const email = { ...formData.email };
    if (
      !String(email.value)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      email.error = "Not a valid email";
      flag = false;
      dispatch({ type: "email", payload: email });
    }

    const description = { ...formData.description };
    if (description.value.length < 3) {
      description.error = "Description required";
      flag = false;
      dispatch({ type: "description", payload: description });
    }
    return flag;
  };

  const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      try {
        const result = await fetch("/api/contact", {
          method: "post",
          body: JSON.stringify(slackNotificationBlock(formData)),
        });
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 3000);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <LeftContent>
      <Head>
        <title>Prince Thomas - Contact</title>
      </Head>
      <div style={{ padding: "15px" }}>
        <H1>
          <JumpiLetters text="Contact" />
        </H1>
        <form onSubmit={onFormSubmit}>
          <Row>
            <Column col={6} md={12} mt={4}>
              <InputComponent
                placeholder="Name"
                value={formData.name.value}
                error={formData.name.error}
                onChange={(e) =>
                  dispatch({
                    type: "name",
                    payload: { value: e.target.value, error: "" },
                  })
                }
              />
            </Column>

            <Column col={6} md={12} mt={4}>
              <InputComponent
                placeholder="Email"
                value={formData.email.value}
                error={formData.email.error}
                onChange={(e) =>
                  dispatch({
                    type: "email",
                    payload: { value: e.target.value, error: "" },
                  })
                }
              />
            </Column>

            <Column col={12} mt={4}>
              <TextAreaComponent
                placeholder="Description"
                rows={5}
                value={formData.description.value}
                error={formData.description.error}
                onChange={(e) =>
                  dispatch({
                    type: "description",
                    payload: { value: e.target.value, error: "" },
                  })
                }
              />
            </Column>
            <Column col={12} mt={4}>
              <Button Icon={SendIcon} fullWidth size="lg">
                <TypewriterText text="send" duration={0.2} />
              </Button>
            </Column>
            {showMessage && (
              <Column col={12} mt={4}>
                <P>
                  Thank you for contacting. I will reach you as soon as possible
                </P>
              </Column>
            )}
          </Row>
        </form>
      </div>
    </LeftContent>
  );
};

export default About;
