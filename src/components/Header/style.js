import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
    color: "black",
  },
  title: {
    fontSize: "1.38rem",
    color: "#ffff",
    marginLeft: "5px",
    cursor: "pointer",
  },
  appBar: {
    backgroundColor: "white",
    color: "black",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "white"
  },
  headerWrapper: {
    display: "flex",
    alignItems: "center",
  },
  header__wrapper__right: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    marginRight: "15px",
    // color: "#5f6368",
    color: "white",
    cursor: "pointer",
  },
}));