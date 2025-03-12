import { AuthProvider } from "./context/AuthContext";
import { SCircuralProgress } from "./components/CircuralProgress";
import { ToastProvider } from "./context/ToastContext";
import MyRoutes from "./Routes/routes";

function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <SCircuralProgress />
        <MyRoutes />
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;
