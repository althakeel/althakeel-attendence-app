import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="Preloader">
        <img
          src="https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748511497/Comp_1_cfobvc.gif"
          alt="Loading..."
        />
      </div>
    );
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
