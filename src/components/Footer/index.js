import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="caption">
            &copy; Copyright {new Date().getFullYear()}&nbsp; Ankit Patel
            <span className={classes.bull}>&bull;</span>Designed and developed
            by Ankit Patel
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
