import React, { useState } from "react";
import { Button, Form, Segment, Grid, Header, Icon } from "semantic-ui-react";

const FormExampleForm = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [logIn, setLogIn] = useState(true);
  const [signedIn, setSignedIn] = useState(false);

  const handleEmail = (event) => {
    console.log("handle email");
    console.log(event);
    setEmail(event.target.value);
  };
  const handlePwd = (event) => {
    setPwd(event.target.value);
  };
  const handleSubmitSignUp = (event) => {
    event.preventDefault();
  };
  const handleSubmitSignIn = (event) => {
    event.preventDefault();
  };

  const setSignUp = () => {
    console.log("set sign up");
    setLogIn(false);
  };

  if (!signedIn) {
    if (logIn) {
      return (
        <Grid>
          <Grid.Column width={8} centered>
            <Segment
              fluid
              placeholder
              style={{ minWidth: "100%", minHeight: "250%" }}
            >
              <Header style={{ fontSize: "250%" }} icon color="blue">
                <Icon name="sign in" circular />
                Sign in to your account
                <Header.Subheader style={{ fontSize: 20 }}>
                  Manage and view your project expenses.
                </Header.Subheader>
              </Header>
              <Form onSubmit={handleSubmitSignIn}>
                <Form.Field>
                  <input
                    style={{
                      fontSize: "140%",
                      marginLeft: "-30%",
                      minWidth: "180%",
                    }}
                    value={email}
                    onChange={handleEmail}
                    placeholder="E-mail"
                  />
                </Form.Field>
                <Form.Field>
                  <input
                    style={{
                      fontSize: "140%",
                      marginLeft: "-30%",
                      minWidth: "180%",
                    }}
                    value={pwd}
                    onChange={handlePwd}
                    placeholder="Password"
                  />
                </Form.Field>
                <Form.Field>
                  <a id="text" onClick={setSignUp}>
                    {" "}
                    Don't have an account? Sign Up!{" "}
                  </a>
                </Form.Field>
                <Button primary size="huge" type="submit">
                  Log In
                </Button>
              </Form>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8} centered>
            <div></div>
          </Grid.Column>
        </Grid>
      );
    } else {
      return (
        <Grid>
          <Grid.Column width={8} centered>
            <Segment
              fluid
              placeholder
              style={{ minWidth: "100%", minHeight: "250%" }}
            >
              <Header style={{ fontSize: "250%" }} icon color="blue">
                <Icon name="sign in" circular />
                Sign up for your account
                <Header.Subheader style={{ fontSize: 20 }}>
                  Manage and view your project expenses.
                </Header.Subheader>
              </Header>
              <Form onSubmit={handleSubmitSignUp}>
                <Form.Field>
                  <input
                    style={{
                      fontSize: "140%",
                      marginLeft: "-30%",
                      minWidth: "180%",
                    }}
                    value={email}
                    onChange={handleEmail}
                    placeholder="E-mail"
                  />
                </Form.Field>
                <Form.Field>
                  <input
                    style={{
                      fontSize: "140%",
                      marginLeft: "-30%",
                      minWidth: "180%",
                    }}
                    value={pwd}
                    onChange={handlePwd}
                    placeholder="Password (min 6 characters)"
                  />
                </Form.Field>
                <Form.Field>
                  <a id="text" onClick={setLogIn}>
                    {" "}
                    Have an account? Sign In!{" "}
                  </a>
                </Form.Field>
                <Button primary size="huge" type="submit">
                  Sign Up
                </Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid>
      );
    }
  } else {
    return;
  }
};

export default FormExampleForm;
