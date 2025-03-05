import { CircularProgress } from "@mui/material";
import { useAuth } from "../../context/AuthContext";

export const SCircuralProgress = () => {
  const { loading } = useAuth();
  return !loading ? null : <CircularProgress />;
};
