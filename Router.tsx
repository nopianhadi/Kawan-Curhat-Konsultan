import React, { useEffect, useState } from 'react';
import AppWithDetails from './AppWithDetails';
import AdminApp from './admin/AdminApp';

const Router: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Route untuk admin panel
  if (currentPath === '/admin' || currentPath === '/admin/') {
    return <AdminApp />;
  }

  // Route default untuk website utama
  return <AppWithDetails />;
};

export default Router;
