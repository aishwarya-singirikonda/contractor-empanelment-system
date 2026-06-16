import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const navigate = useNavigate();

const handleLogin = async (e) => {
e.preventDefault();

try {
  const response = await api.post("/auth/login", {
    email,
    password,
  });

  localStorage.setItem("token", response.data.token);

  navigate("/dashboard");
} catch (error) {
  alert("Login Failed");
  console.log(error.response?.data);
}


};

return ( <div className="min-h-screen bg-gray-100 flex items-center justify-center"> <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"> <h1 className="text-3xl font-bold text-center text-blue-900 mb-2">
Contractor Empanelment System </h1>


    <p className="text-center text-gray-500 mb-6">
      Admin Login
    </p>

    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border border-gray-300 p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border border-gray-300 p-3 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <button
        type="submit"
        className="w-full bg-blue-900 text-white py-3 rounded hover:bg-blue-800 transition"
      >
        Login
      </button>
    </form>
  </div>
</div>

);
}

export default Login;
