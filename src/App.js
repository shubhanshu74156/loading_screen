import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { PreLoader } from './components/preLoader/preLoader';
import { Home } from './components/Home/Home';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Change 3000 to the time you want your PreLoader to be visible (in milliseconds)

    return () => clearTimeout(timeout);
  }, []);
  return (
<>
      {isLoading ? (
        <PreLoader />
      ) : (
        <Home />
      )}
    </>

  );
}

export default App;
