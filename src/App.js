import './App.css'
import Silderbar from "./layout/Sidebar.jsx";
import Topbar from "./layout/Topbar.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from './router'

function App() {
  return (
    <div className="flex-start App">
      <div className='silder'>
        <Silderbar />
      </div>
      <div className='main'>
        <Topbar />
        <div className='content'>
          <RouterProvider router={router} />
        </div>
      </div>
    </div >
  );
}

export default App;
