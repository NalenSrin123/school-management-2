import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function DashboardLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
