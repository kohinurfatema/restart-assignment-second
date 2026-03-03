import { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import './App.css';

function App() {
  const [inProgress, setInProgress] = useState(0);
  const [resolved, setResolved] = useState(0);

  return (
    <>
      <Navbar />
      <Banner inProgress={inProgress} resolved={resolved} />
    </>
  );
}

export default App;
