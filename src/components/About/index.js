import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";

const About = ({ setCurrentSection }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  const classes = useStyles();

  useEffect(() => {
    if (inView) {
      setCurrentSection("#about");
    }
  }, [setCurrentSection, inView]);
  return (
    <section id="about" ref={ref}>
      <Grid container spacing={3} className={classes.root}>
        <Hidden xsDown>
          <Grid item xs={6} className={classes.imageRoot}>
            <img src="images/Ankit.jpeg" className={classes.image} />
          </Grid>
        </Hidden>
        <Grid item xs={6}>
          <Typography variant="h2" className={classes.title}>
            A bit about me
          </Typography>
          <p className={classes.subHeader}>
            Hello there! I am internationally educated Software Developer. I
            graduated with advance diploma in computer programming. I am into
            software development since young age.I am a life long learner. I am
            very good at fixing the bugs, helping products and design to plan
            the development of feature or project.
          </p>
          <p className={classes.resume}>
            <Button
              variant="contained"
              color="primary"
              href="#resume"
              className={classes.button}
              classes={{ label: classes.label }}
            >
              My Resume
            </Button>
            <Button
              variant="contained"
              color="secondary"
              href="#skills"
              className={classes.button}
              classes={{ label: classes.label }}
              label="My Skills"
            >
              My Skills
            </Button>
          </p>
        </Grid>
      </Grid>
    </section>
  );
};

export default About;
