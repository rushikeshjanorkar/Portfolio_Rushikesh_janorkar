import React from 'react';
import Header from './header/header';

function Footer() {
  return (
    <footer>
      <p>This is the Footer</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Main Content Goes Here</h2>
        {/* Your main content components */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
