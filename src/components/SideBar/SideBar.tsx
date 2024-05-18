import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import YellowOwlLogo from '../../assets/icons/yellow-owl-logo.jpg'

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setCollapsed(true);
    }
  }, [isMobile]);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`h-screen ${collapsed ? 'w-16' : 'w-64'} transition-width duration-300 bg-gradient-to-r from-blue-800 to-purple-600 p-4 relative`}>
      {isMobile && (
        <button 
          className="absolute top-4 right-4 text-white md:hidden" 
          onClick={toggleSidebar}
        >
          <FaBars size={24} />
        </button>
      )}
      {!collapsed && (
        <div className="flex flex-col items-center mt-16">
          <img 
            src={YellowOwlLogo} 
            alt="Profile" 
            className="w-24 h-24 rounded-full mb-4"
          />
          <h3 className="text-white text-xl">YellowOwl</h3>
          <h5 className="text-purple-200 text-sm">Admin</h5>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
