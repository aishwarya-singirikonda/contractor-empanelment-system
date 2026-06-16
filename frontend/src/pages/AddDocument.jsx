import { useState } from "react";
import api from "../services/api";
import Sidebar from "../components/Sidebar";

function AddDocument() {
const [formData, setFormData] = useState({
title: "",
fileUrl: "",
contractorId: "",
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

  await api.post("/documents", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  alert("Document Uploaded Successfully");

  setFormData({
    title: "",
    fileUrl: "",
    contractorId: "",
  });
} catch (error) {
  console.log(error);
  alert("Failed to upload document");
}


};

return ( <div className="flex"> <Sidebar />

```
  <div className="flex-1 bg-gray-100 p-8">
    <h1 className="text-3xl font-bold mb-6">
      Upload Document
    </h1>

    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow max-w-xl"
    >
      <input
        type="text"
        name="title"
        placeholder="Document Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full border p-3 mb-4 rounded"
        required
      />

      <input
        type="text"
        name="fileUrl"
        placeholder="Document URL"
        value={formData.fileUrl}
        onChange={handleChange}
        className="w-full border p-3 mb-4 rounded"
        required
      />

      <input
        type="number"
        name="contractorId"
        placeholder="Contractor ID"
        value={formData.contractorId}
        onChange={handleChange}
        className="w-full border p-3 mb-4 rounded"
        required
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        Upload Document
      </button>
    </form>
  </div>
</div>

);
}

export default AddDocument;
