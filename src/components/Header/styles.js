import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  header: {
    display: "block",
    position: "relative",
    height: (props) => props.height,
    resize: "both",
    width: "100%",
    background:
      "#161415 url(images/header-background.jpg) no-repeat center center",
    backgroundSize: "cover !important",
    "-webkit-background-size": "cover !important",
    textAlign: "center",
    overflow: "hidden",
    objectFit: "contain",
    "&::before": {
      content: '""',
      display: "inline-block",
      verticalAlign: "middle",
      height: "100%",
    },
  },
  link: {
    color: theme.palette.primary.contrastText,
  },
  introduction: {
    maxWidth: 1020,
    display: "inline-block",
    verticalAlign: "middle",
    margin: "0 auto",
    width: "85%",
    paddingBottom: 30,
    textAlign: "center",
    color: theme.palette.primary.contrastText,
    "&::before": {
      content: '""',
      display: "table",
    },
    "&::after": {
      content: '""',
      display: "table",
    },
  },
  introductionText: {
    width: "100%",
  },
  firstHeader: {
    fontSize: 76.9,
    color: theme.palette.primary.contrastText,
    letterSpacing: -2,
    fontWeight: "normal",
    margin: "0 auto 18px auto",
    textShadow: "0px 1px 3px rgba(0, 0, 0, .8)",
  },
  gridRoot: {
    fontSize: 12,
    width: "100%",
    letterSpacing: 2.5,
    margin: "0 auto",
    zIndex: 100,
    position: "fixed",
    left: 0,
    top: 0,
  },
  typographyRoots: {
    fontWeight: 600,
  },
  secondHeader: {
    fontSize: 25,
    lineHeight: "1.9em",
    color: "#A8A8A8",
    margin: "0 auto",
    width: "70%",
    textShadow: "0px 1px 2px rgba(0, 0, 0, .5)",
  },
}));
