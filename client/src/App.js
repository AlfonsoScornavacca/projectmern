import AppRouter from "./routers/AppRouter";
import AuthProvider from "./auth/AuthProvider";
import {BrowserRouter as Router} from "react-router-dom"
function App() {
  return (
    <div>
      <Router>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
      </Router>
      
    </div>
  );
}

export default App;
