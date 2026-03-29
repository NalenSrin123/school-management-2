import { CheckCircle, Calendar, Plus, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const courses = [
    {
      id: "1",
      name: "Web Design",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSGNC7VRvaV_vIMuSS399Ou-LNG_yTz5RjdQ&s",
      des: "Html, css, js",
    },
    {
      id: "2",
      name: "Web Design",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSGNC7VRvaV_vIMuSS399Ou-LNG_yTz5RjdQ&s",
      des: "Html, css, js",
    },
    {
      id: "3",
      name: "Web Design",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSGNC7VRvaV_vIMuSS399Ou-LNG_yTz5RjdQ&s",
      des: "Html, css, ",
    },
  ];

  return (
    <div className="w-[80%] min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">RoadMaps</h1>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-4 gap-4">
          <Card
            icon={<CheckCircle />}
            title="Status"
            value="Active"
            color="bg-green-100 text-green-700"
          />
          <Card
            icon={<Calendar />}
            title="Start Date"
            value="2026-03-22"
            color="bg-blue-100 text-blue-700"
          />
          <Card
            icon={<Calendar />}
            title="End Date"
            value="0000-00-00"
            color="bg-purple-100 text-purple-700"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">RoadMaps</h2>
          <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg">
            <Plus size={16} /> Create RoadMap
          </button>
        </div>

        <table className="w-full text-sm">
          <thead className="text-gray-500 border-b">
            <tr className="text-left">
              <th className="w-[5%] py-2">No</th>
              <th className="w-[25%]">Subject</th>
              <th className="w-[20%]">Image</th>
              <th className="w-[35%]">Description</th>
              <th className="w-[15%] text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {courses.map((course, i) => (
              <tr key={i} className="border-b">
                <td className="py-3">{course.id}</td>
                <td className="py-3">{course.name}</td>
                <td className="py-3">
                  <img
                    src={course.image}
                    className=" h-10 object-fill rounded"
                  />
                </td>
                <td className="py-3">{course.des}</td>
                <td className="py-4 space-x-4 flex">
                  <button className="flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition">
                    <Pencil size={14} />
                    Edit
                  </button>

                  <button className="flex items-center gap-1 px-3 py-1.5 text-sm bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition">
                    <Trash2 size={14} />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* Reusable Card */
function Card({ icon, title, value, color }) {
  return (
    <div className={`p-4 rounded-xl ${color} flex items-center gap-3`}>
      <div>{icon}</div>
      <div>
        <p className="text-xs uppercase">{title}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}
