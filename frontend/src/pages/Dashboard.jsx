import { useEffect, useState } from "react";
import api from "../services/api";
import StatusChart from "../components/StatusChart";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get("/dashboard/stats", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setStats(response.data.stats);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  if (!stats) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Loading Dashboard...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white p-5">
        <h1 className="text-2xl font-bold mb-8">
          Contractor System
        </h1>

        <div className="space-y-4">
          <a href="/dashboard" className="block hover:text-gray-300">
            Dashboard
          </a>

          <a href="/contractors" className="block hover:text-gray-300">
            Contractors
          </a>

          <a href="/departments" className="block hover:text-gray-300">
            Departments
          </a>

          <a href="/documents" className="block hover:text-gray-300">
            Documents
          </a>

          <button
            onClick={handleLogout}
            className="bg-red-500 px-4 py-2 rounded mt-5"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">
          Dashboard
        </h1>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-gray-500">
              Total Contractors
            </h2>

            <p className="text-3xl font-bold">
              {stats.totalContractors}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-gray-500">
              Approved
            </h2>

            <p className="text-3xl font-bold text-green-600">
              {stats.approved}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-gray-500">
              Pending
            </h2>

            <p className="text-3xl font-bold text-yellow-500">
              {stats.pending}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-gray-500">
              Rejected
            </h2>

            <p className="text-3xl font-bold text-red-500">
              {stats.rejected}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-gray-500">
              Departments
            </h2>

            <p className="text-3xl font-bold text-blue-600">
              {stats.departments}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-gray-500">
              Documents
            </h2>

            <p className="text-3xl font-bold text-purple-600">
              {stats.documents}
            </p>
          </div>
        </div>
        <StatusChart stats={stats} />
      </div>
    </div>
  );
}

export default Dashboard;