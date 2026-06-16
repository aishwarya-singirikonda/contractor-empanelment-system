import { useEffect, useState } from "react";
import api from "../services/api";
import Sidebar from "../components/Sidebar";
function Contractors() {
  const [contractors, setContractors] = useState([]);

  useEffect(() => {
    fetchContractors();
  }, []);

  const fetchContractors = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get("/contractors", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setContractors(response.data.contractors);
    } catch (error) {
      console.log(error);
    }
  };

  return (
  <div className="flex">
    <Sidebar />

    <div className="flex-1 bg-gray-100 p-8">
      <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Contractors</h1>

      <div className="bg-white rounded-lg shadow">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Company</th>
              <th className="p-3">Status</th>
              <th className="p-3">Department</th>
            </tr>
          </thead>

          <tbody>
            {contractors.map((contractor) => (
              <tr key={contractor.id} className="border-b">
                <td className="p-3">{contractor.id}</td>
                <td className="p-3">{contractor.name}</td>
                <td className="p-3">{contractor.companyName}</td>
                <td className="p-3">{contractor.status}</td>
                <td className="p-3">
                  {contractor.department
                    ? contractor.department.name
                    : "Not Assigned"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  </div>
);
}

export default Contractors;