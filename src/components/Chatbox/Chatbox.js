import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import ChatBot from "react-simple-chatbot";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& > *": {
      margin: theme.spacing(1),
      height: "100%",
    },
  },
}));

function Chatbox(props) {
  const classes = useStyles();
  const { selectedChat } = props;

  const steps = [
    {
      id: "0",
      user: true,
      trigger: "1",
    },
    {
      id: "1",
      message: `Creating fake chats!!!!!`,
      trigger: "0",
    },
    {
      id: "4",
      user: true,
    },
  ];

  return (
    <Grid container className={classes.root}>
      <Grid item lg={12}>
        <ChatBot
          headerTitle={selectedChat}
          steps={steps}
          contentStyle={{ height: "80vh" }}
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>
    </Grid>
  );
}

export default Chatbox;
