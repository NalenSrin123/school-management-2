import React, { useState, useEffect } from 'react';
import { CheckCircle, Calendar, Plus, Pencil, Trash2 } from "lucide-react";

function RoadMap() {
  const API_URL = "http://school-management-2-5-main-cdrucp.laravel.cloud/api/roadmaps";

  const [courses, setCourses] = useState([]);
  const [editing, setEditing] = useState(null);
  const [formData, setFormData] = useState({ title: "", description: "" });

  // get
  const fetchRoadmaps = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setCourses(data); // if API returns 
    } catch (err) {
      console.error("GET error:", err);
    }
  };

  useEffect(() => {
    fetchRoadmaps();
  }, []);

  // post
  const createRoadmap = async () => {
    try {
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, steps: [] })
      });
      fetchRoadmaps();
      setFormData({ title: "", description: "" });
    } catch (err) {
      console.error("POST error:", err);
    }
  };

  // put_update
  const updateRoadmap = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, steps: [] })
      });
      fetchRoadmaps();
      setEditing(null);
      setFormData({ title: "", description: "" });
    } catch (err) {
      console.error("UPDATE error:", err);
    }
  };

  // delete
  const deleteRoadmap = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setCourses(prev => prev.filter(item => item.id !== id));
    } catch (err) {
      console.error("DELETE error:", err);
    }
  };

  return (
    <div className="w-[80%] min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">RoadMaps</h1>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-4 gap-4">
          <Card icon={<CheckCircle />} title="Status" value="Active" color="bg-green-100 text-green-700" />
          <Card icon={<Calendar />} title="Start Date" value="2026-03-22" color="bg-blue-100 text-blue-700" />
          <Card icon={<Calendar />} title="End Date" value="0000-00-00" color="bg-purple-100 text-purple-700" />
        </div>
      </div>

      {/* Form */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="font-semibold text-lg mb-3">{editing ? "Edit Roadmap" : "Create Roadmap"}</h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            className="border p-2 rounded w-1/3"
          />
          <input
            type="text"
            placeholder="Description"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            className="border p-2 rounded w-2/3"
          />
          <button
            onClick={() => editing ? updateRoadmap(editing) : createRoadmap()}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
          >
            {editing ? "Update" : "Add"}
          </button>
          {editing && (
            <button
              onClick={() => { setEditing(null); setFormData({ title: "", description: "" }); }}
              className="bg-gray-400 text-white px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* Table */}
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
              <th className="w-[25%]">Title</th>
              <th className="w-[20%]">Image</th>
              <th className="w-[35%]">Description</th>
              <th className="w-[15%] text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {courses.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-4">No data found</td>
              </tr>
            ) : (
              courses.map((course, index) => (
                <tr key={course.id} className="border-b">
                  <td className="py-3">{index + 1}</td>
                  <td className="py-3">{course.title}</td>
                  <td className="py-3">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSGNC7VRvaV_vIMuSS399Ou-LNG_yTz5RjdQ&s"
                      alt="img"
                      className="h-10 object-fill rounded"
                    />
                  </td>
                  <td className="py-3">{course.description}</td>
                  <td className="py-4 space-x-4 flex">
                    <button
                      className="flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition"
                      onClick={() => { setEditing(course.id); setFormData({ title: course.title, description: course.description }); }}
                    >
                      <Pencil size={14} /> Edit
                    </button>

                    <button
                      className="flex items-center gap-1 px-3 py-1.5 text-sm bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition"
                      onClick={() => deleteRoadmap(course.id)}
                    >
                      <Trash2 size={14} /> Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
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
  )
}

export default RoadMap;