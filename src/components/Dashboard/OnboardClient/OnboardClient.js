import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  makeStyles,
  CardActions,
  Button,
} from "@material-ui/core";
import LinkIcon from "@material-ui/icons/Link";

const useStyles = makeStyles((theme) => ({
  cardStyle: {
    backgroundColor: "#f0f4f8",
    borderRadius: "1.5rem",
    marginTop: ".5rem",
  },
}));

const OnboardClients = () => {
  const classes = useStyles();

  return (
    <Grid lg={12} sm={12}>
      <Card className={classes.cardStyle}>
        <CardContent style={{ textAlign: "center", padding: "1.5rem" }}>
          <Typography gutterBottom variant="h5" component="h2">
            Onboard Clients
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Share the Link with prospects and discuss all stuff
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button variant="contained" color="primary" endIcon={<LinkIcon />}>
            Copy Link
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default OnboardClients;
