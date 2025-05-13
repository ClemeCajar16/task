import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/registerPage";
import LoginPage from "./pages/loginPage";
import HomePage from "./pages/homePage";
import TasksPage from "./pages/tasksPage";
import TasksFormPage from "./pages/taskFormPage";
import ProfilePage from "./pages/profilePage";
import Intruction from "./pages/instruction";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./protectedRoute";

function App() {
  return ( 
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/intruction" element={<Intruction />} />

          <Route element={<ProtectedRoute />}>
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/add-task" element={<TasksFormPage />} />
          <Route path="/task/id" element={<TasksFormPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

