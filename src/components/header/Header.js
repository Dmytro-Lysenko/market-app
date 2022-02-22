import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/styles";
import { Cancel, Search } from "@mui/icons-material";
import { InputBase, Menu, MenuItem } from "@mui/material";
import { useHeaderStyles } from "./styles/header-styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SignUpModal from "../UI/SignUpModal";
import MuiAlert from "@mui/material/Alert";
import LoginModal from "../UI/LoginModal";

const useStyles = makeStyles((theme) => ({
  bars: {
    color: "#FFFFFF",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

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
    width: "50%",
    // display: "flex",
    alignItems: "center",
    backgroundColor: "#6d8eeb",
    marginLeft: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    padding: "0.2rem 1rem",
    justifyContent: "Space-between",
    display: (props) => (props.isOpen ? "flex" : "none"),
    [theme.breakpoints.down("sm")]: {
      width: "40%",
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

  products: {
    color: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Header = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.ui.login);
  const userLogin = useSelector((state) => state.ui.userLogin);

  const [isOpen, setIsOpen] = useState(false);
  const [login, setLogin] = useState(null);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    setLogin(userLogin);
  }, [userLogin]);

  console.log(userLogin);
  console.log(login);

  const isLoginHandler = (event) => {
    setLogin(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const loginHandler = () => {
    dispatch(uiActions.toogle(true));
    setIsLoginModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsSignUpModalOpen(false);
    setIsLoginModalOpen(false);
  };

  const classes = useStyles({ isOpen });

  useEffect(() => {}, []);

  return (
    <div>
      <AppBar color="primary">
        <Toolbar className={classes.toolbar}>
          {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}

          <div className={classes.bars}>
            <Button
              color="secondary"
              id="basic-button"
              aria-controls={isMenuOpen ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={isMenuOpen ? "true" : undefined}
              onClick={handleClick}
            >
              <MenuIcon className={classes.bars} />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>TV Devices</MenuItem>
              <MenuItem onClick={handleClose}>Smartphones</MenuItem>
              <MenuItem onClick={handleClose}>Dishwashers</MenuItem>
            </Menu>
          </div>

          <Typography className={classes.logoLg}>Market App Project</Typography>
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
            <Search className={classes.icon} onClick={() => setIsOpen(true)} />
            <FavoriteBorderIcon className={classes.icon} />
            <ShoppingCartIcon className={classes.icon} />
          </div>

          {isLogin && (
            <div className={classes.products}>
              <Button
                color="secondary"
                id="basic-button"
                aria-controls={isMenuOpen ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={isMenuOpen ? "true" : undefined}
                onClick={handleClick}
              >
                Products
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>TV Devices</MenuItem>
                <MenuItem onClick={handleClose}>Smartphones</MenuItem>
                <MenuItem onClick={handleClose}>Dishwashers</MenuItem>
              </Menu>
            </div>
          )}

          <div className={classes.actions}>
            {!userLogin && (
              <Button
                onClick={() => setIsSignUpModalOpen(true)}
                variant="text"
                color="secondary"
              >
                SIGN UP
              </Button>
            )}
            {!login && (
              <Button onClick={loginHandler} variant="text" color="secondary">
                LOGIN
              </Button>
            )}
            {login && (
              <Button variant="text" color="secondary">
                {login}
              </Button>
            )}
            {login && (
              <Button onClick={isLoginHandler} variant="text" color="secondary">
                LOGOUT
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>

      <div style={{ margin: "5rem 0 0 0" }}>
        {isSignUpModalOpen && <SignUpModal onClose={closeModalHandler} />}
        {isLoginModalOpen && <LoginModal onClose={closeModalHandler} />}
      </div>
    </div>
  );
};

export default Header;
