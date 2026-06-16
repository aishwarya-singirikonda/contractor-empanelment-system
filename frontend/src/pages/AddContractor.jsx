import { useState } from "react";
import api from "../services/api";
import Sidebar from "../components/Sidebar";

function AddContractor() {
const [formData, setFormData] = useState({
name: "",
companyName: "",
email: "",
phone: "",
address: "",
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = async (e) => {
e.preventDefault();

try {
  const token = localStorage.getItem("token");

  await api.post("/contractors", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  alert("Contractor Created Successfully");

  setFormData({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    address: "",
  });
} catch (error) {
  console.log(error);
  alert("Failed to create contractor");
}


};

return ( <div className="flex"> <Sidebar />


  <div className="flex-1 bg-gray-100 p-8">
    <h1 className="text-3xl font-bold mb-6">
      Add Contractor
    </h1>

    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow max-w-xl"
    >
      <input
        type="text"
        name="name"
        placeholder="Contractor Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border p-3 mb-4 rounded"
        required
      />

      <input
        type="text"
        name="companyName"
        placeholder="Company Name"
        value={formData.companyName}
        onChange={handleChange}
        className="w-full border p-3 mb-4 rounded"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border p-3 mb-4 rounded"
        required
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="w-full border p-3 mb-4 rounded"
        required
      />

      <textarea
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        className="w-full border p-3 mb-4 rounded"
        rows="4"
        required
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        Create Contractor
      </button>
    </form>
  </div>
</div>
);
}

export default AddContractor;
