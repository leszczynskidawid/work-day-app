import { Alert, Snackbar } from "@mui/material";

export const Toast = ({ message, open, variant, onClose }) => {
  return (
    <Snackbar open={open} autoHideDuration={5000} onClose={onClose}>
      <Alert severity={variant}>{message}</Alert>
    </Snackbar>
  );
};
