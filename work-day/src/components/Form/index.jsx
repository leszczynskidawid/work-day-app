import { FormControl, Typography } from "@mui/material";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { theme } from "../../theme/theme";
import { CustomTypography } from "../CustomTypography";

const Form = ({ children, onSubmit, methods, title }) => {
  console.log("methods", methods);
  return (
    <FormProvider {...methods}>
      <FormControl
        component={"form"}
        onSubmit={methods.handleSubmit(onSubmit)}
        variant="outlined"
        sx={{
          padding: "20px",
          border: `2px solid ${theme.palette.primary.light}`,
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          maxWidth: "80vw",
          gap: "10px",
        }}
      >
        <CustomTypography variant={"h5"} text={title} />

        {children}
      </FormControl>
    </FormProvider>
  );
};

export default Form;
