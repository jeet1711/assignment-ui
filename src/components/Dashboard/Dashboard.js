import React from "react";
import {
  Grid,
  Container,
  makeStyles,
} from "@material-ui/core";
import UsageDetails from "./UsageInfo/UsageDetails";
import AccountDetail from "./AccountDetail/AccountDetail";
import OnboardClients from "./OnboardClient/OnboardClient";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

function Dashbaord() {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={1}>
        <Grid className={classes.root} item lg={12} md={12} sm={12}>
          <AccountDetail />
        </Grid>
        <Grid className={classes.root} item lg={12} sm={12}>
          <UsageDetails />
        </Grid>
        <Grid className={classes.root} item lg={12} sm={12}>
          <OnboardClients />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashbaord;
