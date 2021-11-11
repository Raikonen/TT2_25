import Background from "./dbs-bank-logo.jpg";
import React, { useState } from "react";
import { Button, Form, Segment, Grid, Header, Icon } from "semantic-ui-react";
import { sha256 } from "js-sha256";
import axios from "axios";
import HomePage from "./Home";

const FormExampleForm = () => {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [logIn, setLogIn] = useState(true);
  const [signedIn, setSignedIn] = useState(false);

  const handleUsername = (event) => {
    console.log("handle usename");
    console.log(event);
    setUsername(event.target.value);
  };

  const handlePwd = (event) => {
    setPwd(event.target.value);
  };

  /* const handleSubmitSignUp = (event) => {
    event.preventDefault();
  };*/

  const handleSubmitSignIn = async (event) => {
    event.preventDefault();
    console.log(`Form submitted, Username: ${username}, Password: ${pwd}`);
    const hashedPwd = sha256(pwd);

    const body = { username: username, password: hashedPwd };
    axios
      .post("/api/login", body)
      .then((response) => {
        const { data } = response;

        console.log(response);

        setUsername(data.username);
        setPwd(data.password);
      })
      .catch((error) => {
        console.log(error.code + error.message);
      });
  };

  /* const setSignUp = () => {
    console.log("set sign up");
    setLogIn(false);
  }; */

  if (!signedIn) {
    if (logIn) {
      return (
        <Grid>
          <Grid.Column width={8} centered>
            <Segment
              fluid
              placeholder
              style={{ minWidth: "100%", minHeight: "200%" }}
            >
              <Header style={{ fontSize: "400%" }} icon color="red">
                Budget Management
              </Header>
              <Header style={{ fontSize: "250%" }} icon color="blue">
                <Icon name="sign in" circular />
                Sign in to your Account
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
                    value={username}
                    onChange={handleUsername}
                    placeholder="Username"
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
                {/* <Form.Field>
                  <a id="text" onClick={setSignUp}>
                    {" "}
                    Don't have an account? Sign Up!{" "}
                  </a>
                </Form.Field>  */}
                <Button primary size="huge" type="submit">
                  Log In
                </Button>
              </Form>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8} centered>
            <div
              style={{
                background: `url(${Background})`,
                minHeight: "200%",
                marginLeft: "0%",
              }}
            ></div>
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
                <p>Budget Management</p>
                Sign up for your account
                <Header.Subheader style={{ fontSize: 20 }}>
                  Manage and view your project expenses.
                </Header.Subheader>
              </Header>
              {/* <Form onSubmit={handleSubmitSignUp}>
                <Form.Field>
                  <input
                    style={{
                      fontSize: "140%",
                      marginLeft: "-30%",
                      minWidth: "180%",
                    }}
                    value={username}
                    onChange={handleUsername}
                    placeholder="Username"
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
                </Form> */}
            </Segment>
          </Grid.Column>
          <Grid.Column width={8} centered>
            <div
              style={{
                background: `url(${Background})`,
                minHeight: "250%",
                marginLeft: "0%",
              }}
            ></div>
          </Grid.Column>
        </Grid>
      );
    }
  } else {
    return <HomePage />;
  }
};

export default FormExampleForm;
