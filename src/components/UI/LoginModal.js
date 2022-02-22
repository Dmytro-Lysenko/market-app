import { makeStyles } from "@material-ui/styles";
import {
  Button,
  Container,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import MuiAlert from "@mui/material/Alert";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";

const useStyles = makeStyles((theme) => ({
  //   modal: {
  //     padding: 0,
  //     display: "flex",
  //     border: "none",
  //   },

  container: {
    width: 400,
    height: 250,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },

  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    gap: theme.spacing(2),
  },

  text: {
    color: "grey",
  },

  input: {
    width: "100%",
  },

  actions: {
    display: "flex",
    marginTop: theme.spacing(2),
    gap: "1rem",
  },


}));


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={2} ref={ref} variant="filled" {...props} />;
});

const LoginModal = (props) => {
  const isLogin = useSelector((state) => state.ui.users);
  console.log(isLogin);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUserHandler = () => {
    setIsOpenAlert(true);
    setTimeout(() => {
      props.onClose();
    }, 1000);

    dispatch(
      uiActions.loginUser({
        ////modern way of name /// id:id
        email,
        password,
      })
    );
  };

  const handleClose = (event, reason) => {
    console.log(email);
    if (reason === "clickaway") {
      return;
    }

    setIsOpenAlert(false);
  };


  return (
    <>
      <Modal open={isOpen}>
        <Box className={classes.container}>
          <form className={classes.form} autoComplete="off">
            <Typography variant="h6" className={classes.text}>
              Please enter your email and password!
            </Typography>
            <TextField
              className={classes.input}
              id="standart-basic"
              label="EMAIL"
              size="small"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              className={classes.input}
              id="standart-basic"
              label="PASSWORD"
              size="small"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <div className={classes.actions}>
              <Button
                onClick={createUserHandler}
                variant="outlined"
                color="primary"
                style={{ marginRight: "1rem" }}
              >
                LOGIN
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={props.onClose}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Box>
      </Modal>

      <Snackbar
        className={classes.snackbar}
        open={isOpenAlert}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Login is success!
        </Alert>
      </Snackbar>
    </>
  );
};

export default LoginModal;
