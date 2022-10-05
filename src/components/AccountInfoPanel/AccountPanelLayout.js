import React, { useState } from "react";
import {
  Grid,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListSubheader,
  Collapse,
  Chip,
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import TelegramIcon from "@material-ui/icons/Telegram";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import avt1 from "../../static/download.jpeg";
import avt2 from "../../static/images.jpeg";
import avt3 from "../../static/batman_hero_avatar_comics-512.webp";
import avt4 from "../../static/download1.jpeg";
import ProfileDetail from "./ProfileDetail/ProfileDetail";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  root2: {
    display: "flex",
    flexDirection: "row",
    padding: ".5rem",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    textAlign: "center",
    margin: "auto",
  },
}));

function AccountPanelLayout(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [archiveOpen, setArchiveOpen] = useState(false);
  //const [selected, setSelected] = useState(1);
  const { selectedChat, setSelectedChat } = props;

  const handleActiveListClick = () => {
    setOpen(!open);
  };

  const handleArchiveListClick = () => {
    setArchiveOpen(!archiveOpen);
  };

  const handleChatClick = (e) => {
    setSelectedChat(e);
  };

  const Archivedinfo = [
    {
      name: "Abhishek Sharma",
      src: avt4,
    },
    {
      name: "Amit",
      src: avt3,
    },
    {
      name: "Pappy",
      src: avt2,
    },
  ];

  return (
    <Container>
      <Grid container className={classes.root}>
        <Grid item className={classes.root2}>
          <TelegramIcon color="primary" fontSize="large" />
          <Typography variant="h6" style={{ marginLeft: "1rem" }}>
            <strong>QuickChat</strong>
          </Typography>
        </Grid>
        <Grid item>
          <ProfileDetail />
        </Grid>
        <Grid item>
          <List
            component="nav"
            dense
            onClick={handleActiveListClick}
            style={{ cursor: "pointer" }}
            subheader={
              <Grid container justifyContent="space-between" spacing={2}>
                <ListSubheader component="div">
                  Active Conversations <Chip label="5" />
                </ListSubheader>
                <Grid item>{open ? <ExpandLess /> : <ExpandMore />}</Grid>
              </Grid>
            }
            className={classes.root}
          ></List>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                onClick={() => handleChatClick("Anurag Srivastava")}
                selected={selectedChat === "Anurag Srivastava"}
                button
                alignItems="flex-start"
              >
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={avt3} />
                </ListItemAvatar>
                <ListItemText primary="Anurag Srivastava" />{" "}
                <Chip color="secondary" label="2" />
              </ListItem>
              <ListItem
                onClick={() => handleChatClick("Vishal Batra")}
                selected={selectedChat === "Vishal Batra"}
                button
                alignItems="flex-start"
              >
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={avt4} />
                </ListItemAvatar>
                <ListItemText primary="Vishal Batra" />
              </ListItem>
              <ListItem
                onClick={() => handleChatClick("Jeet Ash")}
                selected={selectedChat === "Jeet Ash"}
                button
                alignItems="flex-start"
              >
                <ListItemAvatar>
                  <Avatar alt="Travis Howard" src={avt1} />
                </ListItemAvatar>
                <ListItemText primary="Jeet Ash" />
              </ListItem>
              <ListItem
                onClick={() => handleChatClick("Shrawani Singh")}
                selected={selectedChat === "Shrawani Singh"}
                button
                alignItems="flex-start"
              >
                <ListItemAvatar>
                  <Avatar alt="Cindy Baker" src={avt2} />
                </ListItemAvatar>
                <ListItemText primary="Shrawani Singh" />{" "}
                <Chip color="secondary" label="3" />
              </ListItem>
            </List>
          </Collapse>
        </Grid>

        <Grid item>
          <List
            component="nav"
            dense
            onClick={handleArchiveListClick}
            style={{ cursor: "pointer" }}
            subheader={
              <Grid container justifyContent="space-between" spacing={2}>
                <ListSubheader component="div">
                  Archived Conversations <Chip label="3" />
                </ListSubheader>
                <Grid item>
                  {archiveOpen ? <ExpandLess /> : <ExpandMore />}
                </Grid>
              </Grid>
            }
            className={classes.root}
          ></List>
          <Collapse in={archiveOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {Archivedinfo.map((info) => {
                return (
                  <ListItem
                    button
                    alignItems="flex-start"
                    className={classes.nested}
                  >
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={info.src} />
                    </ListItemAvatar>
                    <ListItemText primary={info.name} />
                  </ListItem>
                );
              })}
            </List>
          </Collapse>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AccountPanelLayout;
