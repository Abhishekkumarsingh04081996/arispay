import React, { useEffect } from 'react';
import './App.css';
import Routes from './routes';

import 'aos/dist/aos.css';

import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
