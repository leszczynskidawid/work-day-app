import React, { createContext, useState, useContext } from "react";
import { Toast } from "../components/SnackBar";

const ToastContext = createContext();

export const useToast = () => {
  return useContext(ToastContext);
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState({
    message: "",

    variant: "",
    open: false,
  });

  ///showToast("message", variant)
  const showToast = (message, variant) => {
    setToasts({ message, variant, open: true });
  };

  const closeToast = () => {
    setToasts((prev) => ({ ...prev, open: false }));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast
        message={toasts.message}
        open={toasts.open}
        variant={toasts.variant}
        onClose={closeToast}
      />
    </ToastContext.Provider>
  );
};
