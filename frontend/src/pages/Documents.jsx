import { useEffect, useState } from "react";
import api from "../services/api";
import Sidebar from "../components/Sidebar";

function Documents() {
const [documents, setDocuments] = useState([]);

useEffect(() => {
fetchDocuments();
}, []);

const fetchDocuments = async () => {
try {
const token = localStorage.getItem("token");

  const response = await api.get("/documents", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  setDocuments(response.data.documents);
} catch (error) {
  console.log(error);
}


};

return ( <div className="flex">
    <Sidebar />

    <div className="flex-1 bg-gray-100 p-8">
      <div className="min-h-screen bg-gray-100 p-8"> <h1 className="text-3xl font-bold mb-6">
Documents </h1>


  <div className="bg-white rounded-lg shadow overflow-hidden">
    <table className="w-full">
      <thead>
        <tr className="bg-blue-900 text-white">
          <th className="p-3">ID</th>
          <th className="p-3">Title</th>
          <th className="p-3">File URL</th>
          <th className="p-3">Contractor ID</th>
        </tr>
      </thead>

      <tbody>
        {documents.map((document) => (
          <tr
            key={document.id}
            className="border-b hover:bg-gray-50"
          >
            <td className="p-3">{document.id}</td>
            <td className="p-3">{document.title}</td>
            <td className="p-3">{document.fileUrl}</td>
            <td className="p-3">{document.contractorId}</td>
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

export default Documents;