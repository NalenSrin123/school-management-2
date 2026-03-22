import { IoSettingsSharp } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
import { IoIosLogOut } from "react-icons/io";
import { MdHome } from "react-icons/md";
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-950 text-white p-8 flex flex-col shadow-xl">
      {/* Top Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl mb-2">🎓</h1>
        <h2 className="font-bold text-xl tracking-wider">ETEC CENTER</h2>
      </div>

      {/* Middle Section: Links */}
      <nav className="flex-1 flex flex-col justify-center">
        <ul className="space-y-4">
          <li>
            <Link to="/dashboard" className="flex items-center justify-center gap-3 py-3 rounded-lg hover:bg-white/20 transition-all group">
              <MdHome className="text-xl group-hover:scale-110"/>
              <span className="font-medium">Overview</span>
            </Link>
          </li>
          {/* Courses */}
          <li>
            <Link to="/dashboard/courses" className="flex items-center justify-center gap-3 py-3 rounded-lg hover:bg-white/20 transition-all group">
              <SiGoogleclassroom className="text-xl group-hover:scale-110" />
              <span className="font-medium">Courses</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/users" className="flex items-center justify-center gap-3 py-3 rounded-lg hover:bg-white/20 transition-all group">
              <PiStudentFill className="text-xl group-hover:scale-110" />
              <span className="font-medium">Users</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/roadmaps" className="flex items-center justify-center gap-3 py-3 rounded-lg hover:bg-white/20 transition-all group">
              <PiStudentFill className="text-xl group-hover:scale-110" />
              <span className="font-medium">Road Maps</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/vdoguide" className="flex items-center justify-center gap-3 py-3 rounded-lg hover:bg-white/20 transition-all group">
              <PiStudentFill className="text-xl group-hover:scale-110" />
              <span className="font-medium">Video Guide Line</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/settings" className="flex items-center justify-center gap-3 py-3 rounded-lg hover:bg-white/20 transition-all group">
              <IoSettingsSharp className="text-xl group-hover:scale-110" />
              <span className="font-medium">Settings</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Bottom Section: Logout */}
      <div className="mt-auto pt-6 border-t border-white/10">
        <button className="flex items-center justify-center gap-2 w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-md font-semibold transition-all hover:shadow-lg active:scale-95 cursor-pointer">
          <span>Log out</span>
          <IoIosLogOut className="text-2xl" />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
