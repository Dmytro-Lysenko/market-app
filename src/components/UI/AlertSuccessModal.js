import React, { useEffect, useState } from "react";

import MuiAlert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={2} ref={ref} variant="filled" {...props} />;
});

const AlertSuccessModal = (props) => {
  console.log(props.isOpen);
  const [isOpenAlert, setIsOpenAlert] = useState(props.isOpen);
  const message = `${
    isOpenAlert
      ? "You added product to favorite"
      : "You delete product from favorite"
  } `;

  // console.log(message);

  useEffect(() => {
    setIsOpenAlert((prev) => {
      return (prev = props.isOpen);
    });

    setTimeout(() => {
      setIsOpenAlert((prev) => {
        return (prev = false);
      });
    }, 500);

  }, [props.isOpen]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsOpenAlert(false);
  };

  return (
    <Snackbar
      open={isOpenAlert}
      autoHideDuration={2000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertSuccessModal;
