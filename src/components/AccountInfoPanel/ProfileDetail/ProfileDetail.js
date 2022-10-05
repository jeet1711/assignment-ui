import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  FormControlLabel,
  makeStyles,
  Switch
} from "@material-ui/core";
import avt1 from "../../../static/download.jpeg";
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    textAlign: "center",
    margin: "auto",
  },
  cardStyle: {
    backgroundColor: "#f0f4f8",
    borderRadius: "1.5rem",
  },
}));

const ProfileDetail = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Grid>
      <Card className={classes.cardStyle}>
        <CardContent style={{ textAlign: "center" }}>
          <Avatar alt="Remy Sharp" src={avt1} className={classes.large} />
          <Typography variant="h6">
            <strong>Sagnik Ash </strong>{" "}
            <SettingsIcon
              style={{ cursor: "pointer" }}
              onClick={handleMenuOpen}
              fontSize="small"
            />{" "}
          </Typography>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
          <Typography variant="body1" style={{ color: "grey" }}>
            Lead UI/UX Engineer
          </Typography>
          <FormControlLabel
            control={<Switch checked={true} name="checkedA" color="primary" />}
          />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProfileDetail;
