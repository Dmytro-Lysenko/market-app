import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/styles";
import { Cancel, Search } from "@mui/icons-material";
import { InputBase } from "@mui/material";
import { useHeaderStyles } from "./styles/header-styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const useStyles = makeStyles((theme) => ({
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
    width: "60%",
    // display: "flex",
    alignItems: "center",
    backgroundColor: "#6d8eeb",
    marginLeft: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    padding: "0.2rem 1rem",
    justifyContent: "Space-between",
    display: (props) => (props.isOpen ? "flex" : "none"),
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
  },

  input: {
    color: "#ffffff",
    marginLeft: theme.spacing(1),
  },

  icons: {
    alignItems: "center",
    display: (props) => (!props.isOpen ? "flex" : "none"),
  },

  icon: {
    marginRight: theme.spacing(1),
  },

  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles({ isOpen });

  return (
    <div>
      <Box>
        <AppBar color="primary">
          <Toolbar className={classes.toolbar}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.logoLg}>
              Market App Project
            </Typography>
            <Typography className={classes.logoSm}>Market</Typography>

            <div className={classes.search}>
              <Search />
              <InputBase placeholder="Search..." className={classes.input} />
              <Cancel
                onClick={() => setIsOpen(false)}
                className={classes.cancel}
              />
            </div>

            <div className={classes.icons}>
              <Search
                className={classes.icon}
                onClick={() => setIsOpen(true)}
              />
              <FavoriteBorderIcon className={classes.icon} />
              <ShoppingCartIcon className={classes.icon} />
            </div>

            <div className={classes.actions}>
              <Button
                onClick={() => setIsOpen(true)}
                variant="text"
                color="secondary"
              >
                SIGN UP
              </Button>
              <Button variant="text" color="secondary">
                LOGIN
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <div style={{ margin: "5rem 0 0 0" }}>
        <h1>Testing text</h1>
        <Button>SIGN UP</Button>
      </div>
    </div>
  );
};

export default Header;
