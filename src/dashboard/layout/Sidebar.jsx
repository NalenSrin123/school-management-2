import { IoSettingsSharp } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
import { IoIosLogOut } from "react-icons/io";
import { MdHome } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Sidebar() {
  // បង្កើត Style សម្រាប់ប៊ូតុងដែលកំពុង Active (ចុចជាប់)
  const activeStyle = "flex items-center justify-center gap-3 py-3 rounded-lg bg-white/20 transition-all group";
  const normalStyle = "flex items-center justify-center gap-3 py-3 rounded-lg hover:bg-white/10 transition-all group";
  return (
    <div className="w-64 h-screen fixed bg-blue-950 text-white p-8 flex flex-col shadow-xl">
      {/* Top Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl mb-2">🎓</h1>
        <h2 className="font-bold text-xl tracking-wider">ETEC CENTER</h2>
      </div>

      {/* Middle Section: Links */}
      <nav className="flex-1 flex flex-col justify-center">
        <ul className="space-y-4">
          <li>
            <NavLink to="/overview" className="flex items-center justify-center gap-3 py-3 rounded-lg hover:bg-white/20 transition-all group">
              <MdHome className="text-xl group-hover:scale-110"/>
              <span className="font-medium">Overview</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses" className="flex items-center justify-center gap-3 py-3 rounded-lg hover:bg-white/20 transition-all group">
              <SiGoogleclassroom className="text-xl group-hover:scale-110" />
              <span className="font-medium">Courses</span>
            </NavLink>
          </li>
          <li>
            <Link to="/dashboard/user" className="flex items-center justify-center gap-3 py-3 rounded-lg hover:bg-white/20 transition-all group">
              <PiStudentFill className="text-xl group-hover:scale-110" />
              <span className="font-medium">Users</span>
            </Link>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center gap-3 py-3 rounded-lg hover:bg-white/20 transition-all group">
              <PiStudentFill className="text-xl group-hover:scale-110" />
              <span className="font-medium">Road Maps</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center gap-3 py-3 rounded-lg hover:bg-white/20 transition-all group">
              <PiStudentFill className="text-xl group-hover:scale-110" />
              <span className="font-medium">Video Guide Line</span>
            </a>
          </li>
          <li>
            <NavLink to="/roadmaps" className="flex items-center justify-center gap-3 py-3 rounded-lg hover:bg-white/20 transition-all group">
              <PiStudentFill className="text-xl group-hover:scale-110" />
              <span className="font-medium">Road Maps</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Video" className="flex items-center justify-center gap-3 py-3 rounded-lg hover:bg-white/20 transition-all group">
              <PiStudentFill className="text-xl group-hover:scale-110" />
              <span className="font-medium">Video Guide Line</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className="flex items-center justify-center gap-3 py-3 rounded-lg hover:bg-white/20 transition-all group">
              <IoSettingsSharp className="text-xl group-hover:scale-110" />
              <span className="font-medium">Settings</span>
            </NavLink>
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