import { IoSettingsSharp } from "react-icons/io5";
import { PiStudentFill, PiPathFill, PiVideoFill } from "react-icons/pi"; // Improved icons
import { SiGoogleclassroom } from "react-icons/si";
import { IoIosLogOut } from "react-icons/io";
import { MdHome } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Sidebar() {
  // Common base classes for the links
  const baseStyle = "flex items-center justify-start pl-4 gap-3 py-3 rounded-lg transition-all group";
  
  // Logic to return active or normal classes
  const getNavStyle = ({ isActive }) => 
    isActive 
      ? `${baseStyle} bg-white/20 shadow-sm` 
      : `${baseStyle} hover:bg-white/10`;

  return (
    <div className="w-64 h-screen bg-blue-950 text-white p-6 flex flex-col shadow-xl fixed left-0 top-0">
      
      {/* Top Section */}
      <div className="text-center mb-8">
        <h1 className="text-5xl mb-2">🎓</h1>
        <h2 className="font-bold text-xl tracking-wider">ETEC CENTER</h2>
      </div>

      {/* Middle Section: Links */}
      <nav className="flex-1 flex flex-col">
        <ul className="space-y-2">

          <li>
            <NavLink to="/dashboard" end className={getNavStyle}>
              <MdHome className="text-2xl group-hover:scale-110"/>
              <span className="font-medium">Overview</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/courses" className={getNavStyle}>
              <SiGoogleclassroom className="text-xl group-hover:scale-110" />
              <span className="font-medium">Courses</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/users" className={getNavStyle}>
              <PiStudentFill className="text-2xl group-hover:scale-110" />
              <span className="font-medium">Users</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/roadmaps" className={getNavStyle}>
              <PiPathFill className="text-2xl group-hover:scale-110" />
              <span className="font-medium">Road Maps</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/vdoguide" className={getNavStyle}>
              <PiVideoFill className="text-2xl group-hover:scale-110" />
              <span className="font-medium">Video Guide Line</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/settings" className={getNavStyle}>
              <IoSettingsSharp className="text-2xl group-hover:scale-110" />
              <span className="font-medium">Settings</span>
            </NavLink>
          </li>

        </ul>
      </nav>

      {/* Bottom Section: Logout */}
      <div className="mt-auto pt-4 border-t border-white/10">
        <button className="flex items-center justify-between w-full bg-red-500 hover:bg-red-600 text-white py-2.5 px-4 rounded-lg font-semibold transition-all hover:shadow-lg active:scale-95 cursor-pointer">
          <span>Log out</span>
          <IoIosLogOut className="text-2xl" />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;