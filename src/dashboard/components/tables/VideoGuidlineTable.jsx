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
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357",
    title: "ជម្រៀបសួរពិភពលោក 5",
    description: "Description 5",
    uploadedBy: "User C",
    uploadDate: "2026-03-18",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357",
    title: "ជម្រៀបសួរពិភពលោក 6",
    description: "Description 6",
    uploadedBy: "Admin",
    uploadDate: "2026-03-17",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357",
    title: "ជម្រៀបសួរពិភពលោក 7",
    description: "Description 7",
    uploadedBy: "User D",
    uploadDate: "2026-03-16",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357",
    title: "ជម្រៀបសួរពិភពលោក 8",
    description: "Description 8",
    uploadedBy: "Admin",
    uploadDate: "2026-03-15",
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357",
    title: "ជម្រៀបសួរពិភពលោក 9",
    description: "Description 9",
    uploadedBy: "User E",
    uploadDate: "2026-03-14",
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357",
    title: "ជម្រៀបសួរពិភពលោកជម្រៀបសួរពិភពលោក 10",
    description: "Description 10",
    uploadedBy: "Admin",
    uploadDate: "2026-03-13",
  },
];

const VideoGuidlineTable = () => {
  return (
    <div className="w-[80%] mx-auto mt-6 bg-white rounded-xl shadow border border-blue-500 overflow-hidden">
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
            <th className="p-3 text-center w-[100px]">Action</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody className="text-sm text-gray-700">
          {videoData.map((item, index) => (
            <tr key={index} className="border-t border-blue-500 hover:bg-gray-200 transition">
              <td className="p-3">{item.id}</td>

              <td style={{ verticalAlign: "center" }}>
                <img
                  className="h-[40px] w-[60px] object-cover rounded"
                  src={item.image}
                  alt=""
                />
              </td>

              <td className="p-3">{item.title}</td>
              <td className="p-3 text-gray-500">{item.description}</td>
              <td className="p-3">{item.uploadedBy}</td>
              <td className="p-3">{item.uploadDate}</td>

              <td>
                <div className="flex gap-2 justify-center pr-2">
                  <button className="px-3 py-1 text-sm border rounded hover:shadow-black hover:bg-red-700 text-white transition bg-red-500">
                    Delete
                  </button>
                  <button className="px-3 py-1 text-sm border rounded bg-blue-500 text-white transition hover:bg-blue-700">
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
