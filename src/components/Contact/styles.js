import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    background: "#2B2B2B",
    background: "#161415 url(images/contact-me.jpg) no-repeat center center",
    backgroundSize: "cover !important",
    "-webkit-background-size": "cover !important",
    height: 650,
    paddingTop: 100,
    paddingBottom: 66,
    paddingLeft: 66,
    display: "flex",
  },
  imageRoot: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    height: 250,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: "30px",
  },
  subHeader: {
    color: "#fff",
  },
}));
