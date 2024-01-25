import './index.css';
import Silderbar from './Sidebar.jsx';
import Topbar from './Topbar.jsx';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex-start layout">
      <div className="silder">
        <Silderbar />
      </div>
      <div className="main">
        <Topbar />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
