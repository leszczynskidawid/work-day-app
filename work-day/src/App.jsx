import { CircularProgress } from "@mui/material";
import LoginForm from "./components/LoginForm";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { SCircuralProgress } from "./components/CircuralProgress";

function App() {
  return (
    <AuthProvider>
      <SCircuralProgress />
      <LoginForm title={"Zaloguj się"} />
    </AuthProvider>
  );
}

export default App;
