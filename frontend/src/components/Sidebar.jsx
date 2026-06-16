import React from "react";

function Sidebar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="w-64 bg-blue-900 text-white min-h-screen p-5">
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
        <a
  href="/add-contractor"
  className="block hover:text-gray-300"
>
  Add Contractor
</a>

        <a href="/departments" className="block hover:text-gray-300">
          Departments
        </a>
        <a
  href="/add-department"
  className="block hover:text-gray-300"
>
  Add Department
</a>

        <a href="/documents" className="block hover:text-gray-300">
          Documents
        </a>
<a
  href="/add-document"
  className="block hover:text-gray-300"
>
  Add Document
</a>
        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-2 rounded mt-5"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;