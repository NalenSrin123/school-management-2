import { CheckCircle, Calendar, Plus, Pencil, Trash2 } from "lucide-react";

export default function App() {
  const courses = [
    {
      id: "1",
      name: "Web Design",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSGNC7VRvaV_vIMuSS399Ou-LNG_yTz5RjdQ&s",
      des: "Html, css, js",
    },
    {
      id: "2",
      name: "Web Design",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSGNC7VRvaV_vIMuSS399Ou-LNG_yTz5RjdQ&s",
      des: "Html, css, js",
    },
    {
      id: "3",
      name: "Web Design",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSGNC7VRvaV_vIMuSS399Ou-LNG_yTz5RjdQ&s",
      des: "Html, css, ",
    },
  ];

  return (
    /* md:ml-64 handles sidebar, max-w-[95%] makes it much bigger */
    <div className="md:ml-64 min-h-screen bg-gray-100 p-6">
      <div className="max-w-[95%] mx-auto">
        
        {/* Header Section */}
        <div className="bg-white rounded-xl shadow border border-gray-200 p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold text-gray-800">RoadMaps Overview</h1>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card
              icon={<CheckCircle size={20} />}
              title="Status"
              value="Active"
              color="bg-green-100 text-green-700"
            />
            <Card
              icon={<Calendar size={20} />}
              title="Start Date"
              value="2026-03-22"
              color="bg-blue-100 text-blue-700"
            />
            <Card
              icon={<Calendar size={20} />}
              title="End Date"
              value="Not Set"
              color="bg-purple-100 text-purple-700"
            />
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden">
          <div className="p-6 flex justify-between items-center bg-white border-b border-gray-200">
            <h2 className="font-semibold text-lg text-gray-700">RoadMaps List</h2>
            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition shadow">
              <Plus size={18} /> Create RoadMap
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100 text-gray-600">
                <tr className="text-left">
                  <th className="p-4 w-[5%]">No</th>
                  <th className="p-4 w-[20%]">Subject</th>
                  <th className="p-4 w-[15%]">Image</th>
                  <th className="p-4 w-[40%]">Description</th>
                  <th className="p-4 text-center w-[20%]">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y border-t border-gray-200">
                {courses.map((course, i) => (
                  <tr key={i} className="border-t border-gray-200 hover:bg-gray-200 transition">
                    <td className="p-4 font-medium">{course.id}</td>
                    <td className="p-4 font-semibold text-gray-800">{course.name}</td>
                    <td className="p-4">
                      <img
                        src={course.image}
                        alt={course.name}
                        className="h-10 w-16 object-cover rounded shadow-sm"
                      />
                    </td>
                    <td className="p-4 text-gray-600">{course.des}</td>
                    <td className="p-4">
                      <div className="flex justify-center items-center gap-3">
                        <button className="flex items-center gap-1 px-4 py-1.5 text-sm bg-blue-500 text-white rounded hover:bg-blue-700 transition shadow-sm">
                          <Pencil size={14} /> Edit
                        </button>
                        <button className="flex items-center gap-1 px-4 py-1.5 text-sm bg-red-500 text-white rounded hover:bg-red-700 transition shadow-sm">
                          <Trash2 size={14} /> Delete
                        </button>
                      </div>
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

function Card({ icon, title, value, color }) {
  return (
    <div className={`p-4 rounded-xl ${color} flex items-center gap-4 border border-blue-200 shadow-sm`}>
      <div className="p-2 bg-white/50 rounded-lg">{icon}</div>
      <div>
        <p className="text-[11px] uppercase tracking-wider font-bold opacity-80">{title}</p>
        <p className="font-bold text-lg">{value}</p>
      </div>
    </div>
  );
}