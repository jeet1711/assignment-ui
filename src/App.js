import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import AccountPanelLayout from "./components/AccountInfoPanel/AccountPanelLayout";
import Chatbox from "./components/Chatbox/Chatbox";
import Dashbaord from "./components/Dashboard/Dashboard";

function App() {
  const [selectedChat, setSelectedChat] = useState("Anurag Srivastava");

  return (
    <Grid container spacing={1}>
      <Grid item lg={3} md={6} sm={12} xs={12}>
        <AccountPanelLayout
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
        />
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <Chatbox selectedChat={selectedChat} />
      </Grid>
      <Grid item lg={3} md={12} sm={12} xs={12}>
        <Dashbaord />
      </Grid>
    </Grid>
  );
}

export default App;
