import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/header/Header.jsx'
import Footer from './component/Footer/Footer.jsx';
import Main from './component/Page/Main.jsx';
import Profile from './component/Page/Profile.jsx';
import Summary from './component/Page/Summary.jsx';
import Education from './component/Education/Education.jsx';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/education" element={<Education />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
