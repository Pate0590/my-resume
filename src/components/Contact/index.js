import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";

const Contact = ({ setCurrentSection }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  const classes = useStyles();

  useEffect(() => {
    if (inView) {
      setCurrentSection("#contact");
    }
  }, [setCurrentSection, inView]);
  return (
    <section id="contact" ref={ref}>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={6} className>
          <Typography variant="h2" className={classes.title}>
            Contact Details
          </Typography>
          <Typography variant="subtitle1" className={classes.subHeader}>
            Ankit Patel
            <br />
            Ottawa, ON
            <br />
            +1 (873) 688-4189
            <br />
            patel.ankit595@gmail.com
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
};

export default Contact;
