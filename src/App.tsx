import { useState, useEffect } from 'react';
import Menu from './pages/Menu';
import ItemEquipGenerator from './apps/item-equip-generator';
import OcarinaMemorizer from './apps/ocarina-memo';
import OcarinaPopup from './apps/ocarina-memo/popup';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Simple client-side routing
  const renderPage = () => {
    switch (currentPath) {
      case '/item-equip-generator':
        return <ItemEquipGenerator />;
      case '/ocarina-memo':
        return <OcarinaMemorizer />;
      case '/ocarina-memo/popup':
        return <OcarinaPopup />;
      case '/':
      default:
        return <Menu />;
    }
  };

  return renderPage();
}

export default App;
