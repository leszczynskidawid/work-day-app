import { Typography } from "@mui/material";

export const CustomTypography = ({ text, variant }) => {
  return (
    <Typography
      variant={variant}
      sx={{ display: "block", textAlign: "center" }}
    >
      {text}
    </Typography>
  );
};
