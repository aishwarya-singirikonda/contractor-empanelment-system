import { useState } from "react";
import api from "../services/api";
import Sidebar from "../components/Sidebar";

function AddDepartment() {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await api.post(
        "/departments",
        { name },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Department Created Successfully");
      setName("");
    } catch (error) {
      console.log(error);
      alert("Failed to create department");
    }
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-6">
          Add Department
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow max-w-lg"
        >
          <input
            type="text"
            placeholder="Department Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-3 mb-4 rounded"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded"
          >
            Create Department
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddDepartment;