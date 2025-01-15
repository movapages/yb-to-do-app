import React from 'react';

interface MainAreaProps {
  children: React.ReactNode;
}

const MainArea: React.FC<MainAreaProps> = ({ children }) => {
  return (
    <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
      {children}
    </main>
  );
};

export default MainArea;

