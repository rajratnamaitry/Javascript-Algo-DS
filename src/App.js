import * as React from 'react';
import Dashboard from './dashboard/Dashboard.tsx'
import ContactForm from './form/contactForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <ContactForm/>
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
