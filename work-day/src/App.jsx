import LoginForm from "./components/LoginForm";
import { AuthProvider } from "./context/AuthContext";
import { SCircuralProgress } from "./components/CircuralProgress";

import { ToastProvider, useToast } from "./context/ToastContext";

function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <SCircuralProgress />
        <LoginForm title={"Zaloguj się"} />
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;
