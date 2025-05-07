import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/registerPage";
import LoginPage from "./pages/loginPage";
import { AuthProvider } from "./context/AuthContext";

function App() {

  return (
    <AuthProvider>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/tasks" element={<h1>tasks page</h1>} />
          <Route path="/add-task" element={<h1>new task</h1>} />
          <Route path="/task/:id" element={<h1>update tasks</h1>} />
          <Route path="/profile" element={<h1>profile</h1>} />
        </Routes>
      </BrowserRouter>

    </AuthProvider>
  )
}

export default App
