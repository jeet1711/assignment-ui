import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import SmsFailedIcon from "@material-ui/icons/SmsFailed";
import UsageGraph from "./UsageGraph";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  cardStyle: {
    backgroundColor: "#f0f4f8",
    borderRadius: "1.5rem",
    marginTop: ".5rem",
    //padding: ".5rem",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    textAlign: "center",
    margin: "auto",
  },
  nestedCards: {
    borderRadius: "1rem",
    height: "4.5rem",
    width: "100%",
    //width: "fit-content",
    blockSize: "fit-content",
    overflowX: "auto"
    //overflow: ""
  },
}));

const UsageDetails = () => {
  const classes = useStyles();

  return (
    <Grid lg={12} sm={12}>
      <Grid item lg={12} className={classes.root}>
        <Card className={classes.cardStyle}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item lg={6} sm={3} xs={12}>
                <Card className={classes.nestedCards}>
                  <CardContent
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      //padding: "1rem",
                      backgroundColor: "#80d8ff",
                    }}
                  >
                    <AccessTimeIcon color="primary" fontSize="large" />
                    <Grid direction="column">
                      <Typography style={{ marginLeft: "1rem" }}>
                        <strong>13 hrs</strong>
                      </Typography>
                      <Typography style={{ marginLeft: "1rem" }}>
                        Time
                      </Typography>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item lg={6} sm={3} xs={12}>
                <Card className={classes.nestedCards}>
                  <CardContent
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      //padding: "1rem",
                      backgroundColor: "#a5d6a7",
                    }}
                  >
                    <PeopleOutlineIcon color="action" fontSize="large" />
                    <Grid direction="column">
                      <Typography style={{ marginLeft: "1rem" }}>
                        <strong>188</strong>
                      </Typography>
                      <Typography style={{ marginLeft: "1rem" }}>
                        Attended
                      </Typography>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item lg={6} sm={3} xs={12}>
                <Card className={classes.nestedCards}>
                  <CardContent
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      padding: "1rem",
                      backgroundColor: "#ce93d8",
                    }}
                  >
                    <EventAvailableIcon color="disabled" fontSize="large" />
                    <Grid direction="column">
                      <Typography style={{ marginLeft: "1rem" }}>
                        <strong>119</strong>
                      </Typography>
                      <Typography style={{ marginLeft: "1rem" }}>
                        Meetings
                      </Typography>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item lg={6} sm={3} xs={12}>
                <Card className={classes.nestedCards}>
                  <CardContent
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      padding: "1rem",
                      backgroundColor: "#ef9a9a",
                    }}
                  >
                    <SmsFailedIcon color="error" fontSize="large" />
                    <Grid direction="column">
                      <Typography style={{ marginLeft: "1rem" }}>
                        <strong>41</strong>
                      </Typography>
                      <Typography style={{ marginLeft: "1rem" }}>
                        Rejected
                      </Typography>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item lg={12} sm={12} md={12}>
                <Typography>
                  <strong>Current week Activity</strong>
                </Typography>
                <Grid item lg={12} md={12} sm={12} style={{ marginTop: "1rem" }}>
                  <UsageGraph />
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default UsageDetails;
