import { Box, CircularProgress, Paper } from "@mui/material";
import { useAuth } from "../../context/AuthContext";

export const SCircuralProgress = () => {
  const { loading } = useAuth();
  return !loading ? null : (
    <Paper
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
      }}
    >
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <CircularProgress />
      </Box>
    </Paper>
  );
};
