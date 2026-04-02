import { Calendar, CheckCircle, Plus } from "lucide-react";
import VideoGuidlineTable from "../components/tables/VideoGuidlineTable";
import Sidebar from "./Sidebar";

const VideoGuidlineLayout = () => {
  const handleAddNew = () => {
    alert("Add clicked");
  };

  return (
    <div >
      {/* <Sidebar /> */}

      <div className="w-[100%] ml-64 p-6 bg-gray-100 min-h-screen ">
        {/* Header + Cards */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold">Video Guideline</h1>

                   
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card
              icon={<CheckCircle size={20} />}
              title="Title"
              value="Text"
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
              value="0000-00-00"
              color="bg-purple-100 text-purple-700"
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow p-6">
            <button
              onClick={handleAddNew}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition-all active:scale-95"
            >
              <Plus size={18} />
              <span>Add New</span>
            </button>
          <VideoGuidlineTable />
        </div>
      </div>
    </div>
  );
};

/* Card Component */
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

export default VideoGuidlineLayout;