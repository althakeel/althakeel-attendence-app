import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // simulate loading delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="Preloader" role="alert" aria-busy="true" aria-live="polite">
        <img
          src="https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748511497/Comp_1_cfobvc.gif"
          alt="Loading..."
        />
      </div>
    );
  }

  return (
    <div className="App-window" role="main">
      <iframe
        title="Embedded Website"
        src="https://attatence-next.vercel.app/"
        frameBorder="0"
        className="App-iframe"
        sandbox="allow-scripts allow-same-origin allow-forms"
      />
    </div>
  );
}

export default App;
