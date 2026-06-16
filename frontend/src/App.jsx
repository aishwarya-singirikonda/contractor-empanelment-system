import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Contractors from "./pages/Contractors";
import Departments from "./pages/Departments";
import Documents from "./pages/Documents";
import ProtectedRoute from "./components/ProtectedRoute";
import AddContractor from "./pages/AddContractor";
import AddDepartment from "./pages/AddDepartment";
import AddDocument from "./pages/AddDocument";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/contractors"
  element={
    <ProtectedRoute>
      <Contractors />
    </ProtectedRoute>
  }
/>

<Route
  path="/departments"
  element={
    <ProtectedRoute>
      <Departments />
    </ProtectedRoute>
  }
/>

<Route
  path="/documents"
  element={
    <ProtectedRoute>
      <Documents />
    </ProtectedRoute>
  }
/>
<Route
  path="/add-contractor"
  element={
    <ProtectedRoute>
      <AddContractor />
    </ProtectedRoute>
  }
/>
<Route
  path="/add-department"
  element={
    <ProtectedRoute>
      <AddDepartment />
    </ProtectedRoute>
  }
/>
<Route
  path="/add-document"
  element={
    <ProtectedRoute>
      <AddDocument />
    </ProtectedRoute>
  }
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;