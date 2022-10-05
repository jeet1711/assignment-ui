import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Avatar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EmailIcon from "@material-ui/icons/Email";
import ArchiveIcon from "@material-ui/icons/Archive";
import avt from "../../../static/batman_hero_avatar_comics-512.webp";

const useStyles = makeStyles((theme) => ({
  cardStyle: {
    backgroundColor: "#f0f4f8",
    borderRadius: "1.5rem",
    marginTop: ".5rem",
    width: "100%"
    //padding: ".5rem",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    textAlign: "center",
    margin: "auto",
  },
}));

const AccountDetail = () => {
  const classes = useStyles();

  return (
    <Grid lg={12} sm={12}>
      <Card className={classes.cardStyle}>
        <CardContent style={{ textAlign: "center" }}>
          <Avatar className={classes.large} alt="Remy Sharp" src={avt} />
          <Typography style={{ marginTop: "1rem" }}>
            <Grid container direction="row">
              <Grid item>
                <EmailIcon color="disabled" fontSize="medium" />
              </Grid>
              <Grid item style={{ color: "grey" }}>
                anusri@gmail.com
              </Grid>
            </Grid>
          </Typography>
          <Typography>
            <Grid container direction="row">
              <Grid item>
                <AccountCircleIcon color="disabled" fontSize="medium" />
              </Grid>
              <Grid item style={{ color: "grey" }}>
                Anurag Srivastava
              </Grid>
            </Grid>
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            endIcon={<ArchiveIcon />}
            style={{ marginTop: "1rem" }}
          >
            Archive
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default AccountDetail;
