import { useEffect, useState } from "react";
import api from "../services/api";
import Sidebar from "../components/Sidebar";

function Departments() {
const [departments, setDepartments] = useState([]);

useEffect(() => {
fetchDepartments();
}, []);

const fetchDepartments = async () => {
try {
const token = localStorage.getItem("token");


  const response = await api.get("/departments", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  setDepartments(response.data.departments);
} catch (error) {
  console.log(error);
}


};

return ( <div className="flex">
    <Sidebar />

    <div className="flex-1 bg-gray-100 p-8">
      <div className="min-h-screen bg-gray-100 p-8"> <h1 className="text-3xl font-bold mb-6">
Departments </h1>


  <div className="bg-white rounded-lg shadow overflow-hidden">
    <table className="w-full">
      <thead>
        <tr className="bg-blue-900 text-white">
          <th className="p-3">ID</th>
          <th className="p-3">Department Name</th>
        </tr>
      </thead>

      <tbody>
        {departments.map((department) => (
          <tr
            key={department.id}
            className="border-b hover:bg-gray-50"
          >
            <td className="p-3">{department.id}</td>
            <td className="p-3">{department.name}</td>
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

export default Departments;