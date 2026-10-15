
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState("");

  function handleSearch() {
    if (searchTerm.trim() === "") {
      setMessage("Please enter a cafe name or location.");
    } else {
      setMessage(`Searching for: ${searchTerm}`);
    }
  }

  return (
    <div>
      <Navbar />

      <main>
        <h1>Find Your Perfect Cafe</h1>
        <p>Discover cafes around you.</p>

        <div>
          <input
            type="text"
            placeholder="Search for a cafe..."
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
          />

          <button onClick={handleSearch}>
            Search
          </button>
        </div>

        {message && <p>{message}</p>}
      </main>
    </div>
  );
}

export default App;
