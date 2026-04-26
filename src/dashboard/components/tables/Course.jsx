import React from "react";
import { MdAdd } from "react-icons/md";

function Course() {
  const courses = [
    {
      id: 1,
      name: "Web Development",
      description: "Learn HTML, CSS, JS",
      image: "https://i.pinimg.com/1200x/22/bc/8e/22bc8ebef610eb881071e1a7007a7a80.jpg",
      created_at: "2026-03-01",
      updated_at: "2026-03-10",
    },
    {
      id: 2,
      name: "Database",
      description: "Learn SQL & Access",
      image: "https://i.pinimg.com/736x/09/7b/34/097b349ab1d78c15744c3a89ff457939.jpg",
      created_at: "2026-03-02",
      updated_at: "2026-03-12",
    },
    {
      id: 3,
      name: "Networking",
      description: "Computer Network Basics",
      image: "https://i.pinimg.com/1200x/6c/bd/6f/6cbd6fba4b311be43812613d0fdb1762.jpg",
      created_at: "2026-03-05",
      updated_at: "2026-03-15",
    },
  ];

  return (
    /* ADDED 'md:ml-64' to push content to the right of the sidebar on desktop */
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen md:ml-64">
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
          <h2 className="text-2xl font-semibold text-center sm:text-left">
            Course List
          </h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center justify-center gap-2 w-full sm:w-auto transition">
            <MdAdd /> Create Course
          </button>
        </div>

        {/* Table for medium+ screens */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-blue-500 text-white text-left">
                <th className="p-3">ID</th>
                <th className="p-3">Image</th>
                <th className="p-3">Name</th>
                <th className="p-3">Description</th>
                <th className="p-3">Created</th>
                <th className="p-3">Updated</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((c) => (
                <tr key={c.id} className="border-b hover:bg-gray-50 transition">
                  <td className="p-3">{c.id}</td>
                  <td className="p-3">
                    <img
                      src={c.image}
                      alt="course"
                      className="w-12 h-12 rounded-md object-cover"
                    />
                  </td>
                  <td className="p-3 font-medium">{c.name}</td>
                  <td className="p-3 text-gray-600">{c.description}</td>
                  <td className="p-3 text-sm text-gray-500">{c.created_at}</td>
                  <td className="p-3 text-sm text-gray-500">{c.updated_at}</td>
                  <td className="p-3 text-center space-x-2">
                    <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                      Edit
                    </button>
                    <button className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Card layout for small screens and tablet */}
        <div className="lg:hidden grid gap-4">
          {courses.map((c) => (
            <div
              key={c.id}
              className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="flex items-center gap-4 mb-2">
                <img
                  src={c.image}
                  alt="course"
                  className="w-16 h-16 rounded-md object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">{c.name}</h3>
                  <p className="text-gray-500 text-sm">{c.description}</p>
                </div>
              </div>
              <div className="flex justify-between text-gray-500 text-sm mb-2">
                <span>Created: {c.created_at}</span>
                <span>Updated: {c.updated_at}</span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  Edit
                </button>
                <button className="flex-1 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Course;