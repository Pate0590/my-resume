import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";

const Resume = ({ setCurrentSection }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  const classes = useStyles();

  useEffect(() => {
    if (inView) {
      setCurrentSection("#resume");
    }
  }, [setCurrentSection, inView]);
  return (
    <>
      <section id="resume" ref={ref} className={classes.root}>
        <Grid container spacing={3} className={classes.container}>
          <Grid item xs={6} className={classes.header}>
            <Typography variant="h6" className={classes.headerText}>
              Education
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.rightSection}>
            <Typography variant="h5">Algonquin College</Typography>
            <p className={classes.description}>
              Advance Diploma in Computer Programmer
              <span className={classes.bull}>&bull;</span>
              <em className={classes.date}>April 2020</em>
            </p>
            <Typography variant="h5">L.J Polytechnic</Typography>
            <p className={classes.description}>
              Diploma in Computer Engineering
              <span className={classes.bull}>&bull;</span>
              <em className={classes.date}>June 2017</em>
            </p>
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.container}>
          <Grid item xs={6} className={classes.header}>
            <Typography variant="h6" className={classes.headerText}>
              Work
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.rightSection}>
            <Typography variant="h5">...</Typography>
            <p className={classes.description}>
              ....
              <span className={classes.bull}>&bull;</span>
              <em className={classes.date}>...</em>
            </p>
            <p className={classes.jobDescription}>...</p>
            <Typography variant="h5">Safal InfoTech</Typography>
            <p className={classes.description}>
              Web developer
              <span className={classes.bull}>&bull;</span>
              <em className={classes.date}>Dec 2014 - Aug 2019</em>
            </p>
            <p className={classes.jobDescription}>
              Developed various applications using ASP .NET, MVC 4.0, C#,
              jQuery, JSON, ES6, JavaScript, React, redux, Semantic UI, Material
              UI, Styled components, Visual Studio 2015, MS SQL Server 2012, web
              storm, intellij
            </p>
            <p className={classes.description}>
              Web developer - Intern
              <span className={classes.bull}>&bull;</span>
              <em className={classes.date}>Jul 2014 - Dec 2014</em>
            </p>
            <p className={classes.jobDescription}>
              Developed the application using ASP.NET, C# with MVC 4,
              JavaScript, jQuery, HTML5, CSS3, SQL Server 2012 and Visual Studio
              2015.
            </p>
          </Grid>
        </Grid>
      </section>
      <section id="skills">
        <Grid container spacing={3} className={classes.lastElement}>
          <Grid item xs={6} className={classes.header}>
            <Typography variant="h6" className={classes.headerText}>
              Skills
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.rightSection}>
            <Typography variant="h5">Front-End Development</Typography>
            <p className={classes.jobDescription}>
              HTML5, CSS3, C#, ASP.NET, Java, PHP, JavaScript, React, Angular,
              Redux, Redux toolkit, jQuery, ES6, Semantic UI, Material UI,
              typescript, react-router 4 and prettier
            </p>
            <Typography variant="h5">Back-End Development</Typography>
            <p className={classes.jobDescription}>
              C#, ASP.NET MVC, JAVA, PHP and Entity Framework
            </p>
            <Typography variant="h5">Database</Typography>
            <p className={classes.jobDescription}>SQL, MySQL, MongoDB</p>
            <Typography variant="h5">Unit Testing Frameworks</Typography>
            <p className={classes.jobDescription}>
              Jest, React Testing Library, Jasmine, csUnit, J-Unit Framework
            </p>
            <Typography variant="h5">Library/Framework</Typography>
            <p className={classes.jobDescription}>
              Google Firebase, Bootstrap, Materialize, Material UI (For React),
              Tilt.
            </p>
            <Typography variant="h5">Development Tools</Typography>
            <p className={classes.jobDescription}>
              Microsoft Visual Studio, Microsoft Visual Studio Code, Eclipse,
              Dreamweaver, NetBeans, JSFiddle, Oracle Developer 11g, WebStorm,
              Notepad++.
            </p>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default Resume;
