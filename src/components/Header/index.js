import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

import listOfLink from "./constants";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles({ height: window.innerHeight });
  return (
    <header id="home" className={classes.header}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
        className={classes.gridRoot}
      >
        {listOfLink.map((list) => (
          <Grid item key={list.label}>
            <Link
              href={list.href}
              underline="none"
              variant="button"
              TypographyClasses={{
                colorPrimary: classes.link,
                button: classes.typographyRoots,
              }}
            >
              {list.label}
            </Link>
          </Grid>
        ))}
      </Grid>
      <div className={classes.introduction}>
        <div className={classes.introductionText}>
          <Typography variant="h1" className={classes.firstHeader}>
            I am Ankit Patel
          </Typography>
          <Typography variant="h3" className={classes.secondHeader}>
            I'm a Ottawa based Software Developer. I am a Self-driven learner
            and passionate about technology. Activly looking for new
            opportunities in web and mobile app development
          </Typography>
        </div>
      </div>
    </header>
  );
};

export default Header;
