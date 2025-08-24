import React from 'react';
import Header from '../components/header/Header';
import SideNavigation from '../components/sidenav/SideNav';
import { useState } from 'react';
import './mainlayout.css';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isSideNavExpanded, setIsSideNavExpanded] = useState(true)
  return (
    <div className="background-base">
      <div className="background">
        <Header setIsSideNavExpanded={setIsSideNavExpanded} />
        <div className="main-layout">
          <SideNavigation isSideNavExpanded={isSideNavExpanded} setIsSideNavExpanded={setIsSideNavExpanded} />
          <main>
            {/* NOTE: This is where the main content of the page will be rendered */}
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
