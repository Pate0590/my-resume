import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    background: "#2B2B2B",
    paddingTop: 96,
    paddingBottom: 66,
    display: "flex",
  },
  imageRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: 100,
    width: 100,
    marginRight: 24,
    padding: 0,
    borderRadius: "100%",
  },
  label: {
    fontWeight: 600,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: "100%",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: "30px",
  },
  resume: {
    display: "flex",
  },
  subHeader: {
    lineHeight: "30px",
    color: "#7A7A7A",
  },
}));
