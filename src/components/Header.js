import React, { Component } from "react";
import { Typography, withStyles } from "@material-ui/core";

const styles = () => ({
  description: {
    height: "120px",
    verticalAlign: "middle"
  },
  header: {
    display: "flex"
  },
  headerLeft: {
    display: "flex",
    flex: "50%",
    margin: "0px 0px 10px 20px"
  },
  headerRight: {
    display: "flex",
    margin: "0px 30px 0px 0px"
  },
  playlistImage: {
    height: "120px",
    width: "120px"
  },
  songCount: {
    color: "#AAAAAA",
    margin: "0px 0px 0px 0px"
  },
  titleLeft: {
    color: "white",
    fontWeight: "bold",
    margin: "42px 0px 0px 8px"
  },
  titleRight: {
    color: "white",
    fontWeight: "bold",
    margin: "42px 8px 0px 0px"
  }
});

class Header extends Component {
  render() {
    const { classes, playlist1, playlist2 } = this.props;
    return (
      <div className={classes.header}>
        <div className={classes.headerLeft}>
          <img
            className={classes.playlistImage}
            src={playlist1.images[0].url}
            alt="Playlist"
          />
          <div className={classes.description}>
            <Typography className={classes.titleLeft} variant="h4">
              {playlist1.name}
            </Typography>
            <Typography className={classes.songCount} variant="subtitle2">
              {playlist1.tracks.total} songs
            </Typography>
          </div>
        </div>
        <div className={classes.headerRight}>
          <div className={classes.description}>
            <Typography className={classes.titleRight} variant="h4">
              {" "}
              {playlist2.name}{" "}
            </Typography>
            <Typography className={classes.songCount} variant="subtitle2">
              {" "}
              {playlist2.tracks.total} songs{" "}
            </Typography>
          </div>
          <img
            className={classes.playlistImage}
            src={playlist2.images[0].url}
            alt="Playlist"
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
