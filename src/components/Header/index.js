import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import IconButton from "@material-ui/core/IconButton";
import scroll from "scroll";
import getPage from "scroll-doc";

import listOfLink from "./constants";
import useStyles from "./styles";

const page = getPage();

const Header = ({ currentSection }) => {
  const [selectedMenu, setSelectedMenu] = useState("#home");
  const { ref, inView, entry } = useInView({
    threshold: 0.75,
  });
  const classes = useStyles({
    height: window.innerHeight,
    navBackground: inView ? "none" : "#333",
  });

  useEffect(() => {
    if (inView) {
      setSelectedMenu("#home");
    } else {
      setSelectedMenu(currentSection);
    }
  }, [inView, currentSection]);

  const handleExpandMore = () => {
    scroll.top(page, window.innerHeight);
  };

  return (
    <header id="home" className={classes.header} ref={ref}>
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
              onClick={() => {
                setSelectedMenu(list.href);
              }}
              TypographyClasses={{
                colorPrimary:
                  selectedMenu === list.href
                    ? classes.currentLink
                    : classes.link,
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
      <div className={classes.expandMore}>
        <IconButton aria-label="expandMore" onClick={handleExpandMore}>
          <KeyboardArrowDownIcon className={classes.icon} />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
