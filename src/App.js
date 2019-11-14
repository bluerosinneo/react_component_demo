import React from 'react';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div>

        <Welcome name="Cramer" />
        <Clock />
        <Contact />

    </div>
  );
}

export default App;
