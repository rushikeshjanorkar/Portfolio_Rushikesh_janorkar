import React from 'react';
import Header from './component/header/header.jsx';
import Footer from './component/Footer/Footer.jsx'
import Main from './component/Page/main';


function App() {
  return (
    <div>
      <Header />
      <main>
      <Main name="Rushikesh Harikisan Janorkar"  role="Backend Devloper" avatarSrc="/images.jpg"/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
