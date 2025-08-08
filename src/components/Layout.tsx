import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

type Props = { children: React.ReactNode };

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
