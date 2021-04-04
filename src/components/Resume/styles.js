import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    background: "#fff",
    paddingTop: 90,
    overflow: "hidden",
  },
  container: {
    marginBottom: 48,
    paddingBottom: 24,
    borderBottom: "1px solid #E8E8E8",
  },
  lastElement: {
    marginBottom: 48,
    paddingBottom: 24,
  },
  header: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "100px !important",
  },
  headerText: {
    textTransform: "uppercase",
    letterSpacing: "1px",
    borderBottom: "3px solid #F06000",
    paddingBottom: 6,
    fontSize: 18,
  },
  description: {
    fontSize: 16,
    lineHeight: "24px",
    color: "#6E7881",
    marginBottom: 18,
    marginTop: 9,
    fontStyle: "italic",
  },
  date: {
    fontStyle: "normal",
  },
  bull: {
    marginRight: 5,
    marginLeft: 5,
  },
  rightSection: {
    paddingRight: "10% !important",
  },
  jobDescription: {
    fontSize: 16,
    lineHeight: "24px",
    color: "#6E7881",
    margin: "0 0 30px 0",
  },
}));
