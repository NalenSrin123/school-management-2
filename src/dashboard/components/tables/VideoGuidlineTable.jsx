import React from "react";

const videoData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357",
    title: "ជម្រៀបសួរពិភពលោក 1",
    description: "Description 1",
    uploadedBy: "Admin",
    uploadDate: "2026-03-22",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357",
    title: "ជម្រៀបសួរពិភពលោក 2",
    description: "Description 2",
    uploadedBy: "User A",
    uploadDate: "2026-03-21",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357",
    title: "ជម្រៀបសួរពិភពលោក 3",
    description: "Description 3",
    uploadedBy: "User B",
    uploadDate: "2026-03-20",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357",
    title: "ជម្រៀបសួរពិភពលោក 4",
    description: "Description 4",
    uploadedBy: "Admin",
    uploadDate: "2026-03-19",
  },
];

const VideoGuidlineTable = () => {
  return (
    <div className="w-full mx-auto mt-6 bg-white rounded-xl shadow border border-blue-500 overflow-hidden">
      <table className="w-full border-collapse">
        
        {/* HEADER */}
        <thead className="bg-gray-100 text-gray-600 text-sm">
          <tr>
            <th className="p-3 text-left">No</th>
            <th className="p-3 text-left">Image</th>
            <th className="p-3 text-left w-[15%]">Title</th>
            <th className="p-3 text-left w-[20%]">Description</th>
            <th className="p-3 text-left">Uploaded By</th>
            <th className="p-3 text-left">Upload Date</th>
            <th className="p-3 text-center w-[120px]">Action</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody className="text-sm text-gray-700">
          {videoData.map((item) => (
            <tr
              key={item.id}
              className="border-t border-gray-300 hover:bg-gray-200 transition"
            >
              <td className="p-4">{item.id}</td>

              <td className="p-4">
                <img
                  className="h-[45px] w-[70px] object-cover rounded"
                  src={item.image}
                  alt=""
                />
              </td>

              <td className="p-4 font-medium">{item.title}</td>
              <td className="p-4 text-gray-500">{item.description}</td>
              <td className="p-4">{item.uploadedBy}</td>
              <td className="p-4">{item.uploadDate}</td>

              <td className="p-4">
                <div className="flex gap-2 justify-center">
                  <button className="px-4 py-1.5 text-sm border rounded bg-red-500 text-white hover:bg-red-700 transition">
                    Delete
                  </button>
                  <button className="px-4 py-1.5 text-sm border rounded bg-blue-500 text-white hover:bg-blue-700 transition">
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default VideoGuidlineTable;