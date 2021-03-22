import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const About = () => {
  return (
    <section id="about">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h2">About Me</Typography>
          <p>
            Hello there! I am internationally educated Software Developer. I
            graduated with advance diploma in computer programming. I am into
            software development since young age.I am a life long learner. I am
            very good at fixing the bugs, helping products and design to plan
            the development of feature or project.
          </p>
        </Grid>
      </Grid>
    </section>
  );
};

export default About;
