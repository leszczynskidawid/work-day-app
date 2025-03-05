import { Button } from "@mui/material";
import { theme } from "../../theme/theme";

export const CustomButton = ({ text, onClick, ...props }) => {
  return (
    <Button onClick={onClick} {...props} variant="contained">
      {text}
    </Button>
  );
};
