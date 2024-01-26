import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import BusTrackingUI from './components/BusTrackingUI';
import Buses from './components/Dropdown';
import Maps from "./components/maps";
import Footer from './components/Footer';
function App() {
  const [theme, setTheme] = useState('light');

  function toggleMode() {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  return (
    <div className={`app-container ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
      <Navbar theme={theme} toggleMode={toggleMode} />
      {/* Your other components testing */}

      <BusTrackingUI/>
      <Buses/>
      <Maps/>
      <Footer theme={theme} toggleMode={toggleMode} />
    </div>
    
  );
}
export default App;
