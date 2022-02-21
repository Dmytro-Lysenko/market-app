import { makeStyles } from "@material-ui/styles";

export const useHeaderStyles = makeStyles((theme) => ({
  actions: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },

  logoLg: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  logoSm: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },

  search: {
    width: "70%",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#6d8eeb",
    marginLeft: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    padding: "0.2rem 1rem",
    justifyContent: "Space-between",
    [theme.breakpoints.up("sm")]: {
      width: "50%",
    },
  },

  input: {
    color: "#ffffff",
    marginLeft: theme.spacing(1),
  },
}));
