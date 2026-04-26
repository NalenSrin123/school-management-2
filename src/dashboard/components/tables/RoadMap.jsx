import React, { useState, useEffect } from 'react';
import { CheckCircle, Calendar, Plus, Pencil, Trash2, Image as ImageIcon } from "lucide-react";

function RoadMap() {
  const API_URL = "http://school-management-2-5-main-cdrucp.laravel.cloud/api/roadmaps";
  
  const [courses, setCourses] = useState([]);
  const [editing, setEditing] = useState(null);
  const [formData, setFormData] = useState({ title: "", description: "", image: "" });
  const [loading, setLoading] = useState(false);
  const [usingLocalStorage, setUsingLocalStorage] = useState(false);
  const [imagePreview, setImagePreview] = useState("");

  // LOAD data
  const loadData = async () => {
    setLoading(true);
    const test='';
    try {
      const res = await fetch(API_URL);
      
      if (res.ok) {
        const data = await res.json();
        const roadmapData = data.data || data;
        if (Array.isArray(roadmapData) && roadmapData.length > 0) {
          setCourses(roadmapData);
          setUsingLocalStorage(false);
          console.log("Using API data");
          setLoading(false);
          return;
        }
      }
      throw new Error("API failed");
      
    } catch (error) {
      console.log(" API failed, using localStorage");
      const savedData = localStorage.getItem('roadmaps');
      if (savedData) {
        setCourses(JSON.parse(savedData));
      } else {
        const sampleData = [
          { id: 1, title: "Getting Started", description: "Learn the basics", image: "https://picsum.photos/id/1/200/150" },
          { id: 2, title: "Web Development", description: "HTML, CSS, JavaScript", image: "https://picsum.photos/id/0/200/150" }
        ];
        setCourses(sampleData);
        localStorage.setItem('roadmaps', JSON.stringify(sampleData));
      }
      setUsingLocalStorage(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Handle image URL input
  const handleImageChange = (e) => {
    const imageUrl = e.target.value;
    setFormData({ ...formData, image: imageUrl });
    setImagePreview(imageUrl);
  };

  // Handle image upload from computer
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check if file is an image
      if (!file.type.startsWith('image/')) {
        alert("Please select an image file (jpg, png, gif, etc.)");
        return;
      }
      
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("Image size should be less than 5MB");
        return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result;
        setFormData({ ...formData, image: imageUrl });
        setImagePreview(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const saveToLocalStorage = (newCourses) => {
    localStorage.setItem('roadmaps', JSON.stringify(newCourses));
    setCourses(newCourses);
  };

  const createRoadmap = async () => {
    if (!formData.title.trim()) {
      alert("Please enter a title");
      return;
    }
    
    setLoading(true);
    
    const newRoadmap = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      image: formData.image || "https://picsum.photos/id/20/200/150" // Default image if none provided
    };
    
    if (usingLocalStorage) {
      const updated = [...courses, newRoadmap];
      saveToLocalStorage(updated);
      resetForm();
      alert(" Roadmap added successfully!");
      setLoading(false);
      return;
    }
    
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          title: formData.title, 
          description: formData.description,
          image: formData.image,
          steps: [] 
        })
      });

      if (res.ok) {
        await loadData();
        resetForm();
        alert(" Roadmap created successfully!");
      } else {
        throw new Error("API failed");
      }
    } catch (error) {
      const updated = [...courses, newRoadmap];
      saveToLocalStorage(updated);
      resetForm();
      alert(" Added locally!");
      setUsingLocalStorage(true);
    } finally {
      setLoading(false);
    }
  };

  const updateRoadmap = async (id) => {
    if (!formData.title.trim()) {
      alert("Please enter a title");
      return;
    }
    
    setLoading(true);
    
    if (usingLocalStorage) {
      const updated = courses.map(course => 
        course.id === id ? { 
          ...course, 
          title: formData.title, 
          description: formData.description,
          image: formData.image || course.image
        } : course
      );
      saveToLocalStorage(updated);
      resetForm();
      setEditing(null);
      alert("Updated locally!");
      setLoading(false);
      return;
    }
    
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          title: formData.title, 
          description: formData.description,
          image: formData.image,
          steps: [] 
        })
      });

      if (res.ok) {
        await loadData();
        resetForm();
        setEditing(null);
        alert(" Updated successfully!");
      } else {
        throw new Error("API failed");
      }
    } catch (error) {
      const updated = courses.map(course => 
        course.id === id ? { 
          ...course, 
          title: formData.title, 
          description: formData.description,
          image: formData.image || course.image
        } : course
      );
      saveToLocalStorage(updated);
      resetForm();
      setEditing(null);
      alert(" Updated locally!");
      setUsingLocalStorage(true);
    } finally {
      setLoading(false);
    }
  };

  const deleteRoadmap = async (id) => {
    if (!window.confirm("Are you sure you want to delete?")) return;
    
    setLoading(true);
    
    if (usingLocalStorage) {
      const updated = courses.filter(course => course.id !== id);
      saveToLocalStorage(updated);
      alert("Deleted locally!");
      setLoading(false);
      return;
    }
    
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      
      if (res.ok) {
        setCourses(prev => prev.filter(item => item.id !== id));
        alert(" Deleted successfully!");
      } else {
        throw new Error("API failed");
      }
    } catch (error) {
      const updated = courses.filter(course => course.id !== id);
      saveToLocalStorage(updated);
      alert(" Deleted locally!");
      setUsingLocalStorage(true);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({ title: "", description: "", image: "" });
    setImagePreview("");
    setEditing(null);
  };

  return (
    <div className="md:ml-64 min-h-screen bg-gray-100 p-6">
      <div className="max-w-[95%] mx-auto">
        
        {usingLocalStorage && (
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-4">
             Working in offline mode (data saved in your browser)
          </div>
        )}
        
        <div className="bg-white rounded-xl shadow border border-gray-200 p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold text-gray-800">RoadMaps Overview</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card icon={<CheckCircle size={20} />} title="Status" value="Active" color="bg-green-100 text-green-700" />
            <Card icon={<Calendar size={20} />} title="Start Date" value="2026-03-22" color="bg-blue-100 text-blue-700" />
            <Card icon={<Calendar size={20} />} title="End Date" value="Not Set" color="bg-purple-100 text-purple-700" />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6">
          <Card icon={<CheckCircle />} title="Status" value="Active" color="bg-green-100 text-green-700" />
          <Card icon={<Calendar />} title="Start Date" value="2026-03-22" color="bg-blue-100 text-blue-700" />
          <Card icon={<Calendar />} title="End Date" value="0000-00-00" color="bg-purple-100 text-purple-700" />
        </div>
      </div>

      {/* Form with Image Upload */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="font-semibold text-lg mb-3">{editing ? "Edit Roadmap" : "Create Roadmap"}</h2>
        
        <div className="space-y-4">
          <div className="flex gap-4 flex-wrap">
            <input
              type="text"
              placeholder="Title"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="border p-2 rounded flex-1 min-w-[200px]"
              disabled={loading}
            />
            <input
              type="text"
              placeholder="Description"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="border p-2 rounded flex-1 min-w-[200px]"
              disabled={loading}
            />
          </div>
          
          {/* Image Upload Section */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 flex-wrap">
                <label className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200 transition">
                  <ImageIcon size={18} />
                  Upload Image
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    disabled={loading}
                  />
                </label>
                
                {/* hate or in box img */}
                {/* <span className="text-gray-500">or</span>
                
                <input
                  type="text"
                  placeholder="Enter image URL (https://...)"
                  value={formData.image}
                  onChange={handleImageChange}
                  className="border p-2 rounded flex-1 min-w-[250px]"
                  disabled={loading}
                /> */}
              </div>
              
              {/* Image Preview */}
              {(imagePreview || formData.image) && (
                <div className="mt-2">
                  <p className="text-sm text-gray-600 mb-2">Image Preview:</p>
                  <img 
                    src={imagePreview || formData.image} 
                    alt="Preview" 
                    className="h-32 w-32 object-cover rounded-lg border"
                    onError={(e) => {
                      e.target.src = "https://picsum.photos/id/20/200/150";
                      e.target.alt = "Default image";
                    }}
                  />
                </div>
              )}
              
              <div className="text-xs text-gray-500">
              Tip: You can upload from computer or paste any image URL from the internet
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => editing ? updateRoadmap(editing) : createRoadmap()}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Processing..." : (editing ? "Update" : "Add")}
            </button>
            {editing && (
              <button
                onClick={resetForm}
                className="bg-gray-400 text-white px-4 py-2 rounded-lg"
                disabled={loading}
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow p-10">
        <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
          <h2 className="font-semibold text-lg">RoadMaps</h2>
        </div>

        {loading && courses.length === 0 ? (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
            <p className="mt-2 text-gray-500">Loading...</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-gray-500 border-b">
                <tr className="text-left">
                  <th className="w-[5%] py-2">No</th>
                  <th className="w-[20%]">Title</th>
                  <th className="w-[20%]">Image</th>
                  <th className="w-[40%]">Description</th>
                  <th className="w-[15%] text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {courses.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-8 text-gray-500">
                      No data found. Add your first roadmap above!
                    </td>
                  </tr>
                ) : (
                  courses.map((course, index) => (
                    <tr key={course.id || index} className="border-b hover:bg-gray-50">
                      <td className="py-3">{index + 1}</td>
                      <td className="py-3 font-medium">{course.title}</td>
                      <td className="py-3">
                        <img
                          src={course.image || "https://picsum.photos/id/20/200/150"}
                          alt={course.title}
                          className="h-12 w-12 object-cover rounded-lg"
                          onError={(e) => {
                            e.target.src = "https://picsum.photos/id/20/200/150";
                          }}
                        />
                      </td>
                      <td className="py-3">{course.description || "-"}</td>
                      <td className="py-4">
                        <div className="flex gap-2 justify-center">
                          <button
                            className="flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition"
                            onClick={() => {
                              setEditing(course.id);
                              setFormData({ 
                                title: course.title, 
                                description: course.description || "",
                                image: course.image || ""
                              });
                              setImagePreview(course.image || "");
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            disabled={loading}
                          >
                            <Pencil size={14} /> Edit
                          </button>

                          <button
                            className="flex items-center gap-1 px-3 py-1.5 text-sm bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition"
                            onClick={() => deleteRoadmap(course.id)}
                            disabled={loading}
                          >
                            <Trash2 size={14} /> Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function Card({ icon, title, value, color }) {
  return (
    <div className={`p-4 rounded-xl ${color} flex items-center gap-4 border border-blue-200 shadow-sm`}>
      <div className="p-2 bg-white/50 rounded-lg">{icon}</div>
      <div>
        <p className="text-[11px] uppercase font-bold tracking-wider">{title}</p>
        <p className="font-bold text-lg">{value}</p>
      </div>
    </div>
  )
}

export default RoadMap;