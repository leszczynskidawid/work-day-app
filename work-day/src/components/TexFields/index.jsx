import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export const CustomTextField = ({ rules, label, control, name, type }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          error={!!error}
          helperText={error?.message}
          variant="outlined"
          fullWidth
        />
      )}
    ></Controller>
  );
};
