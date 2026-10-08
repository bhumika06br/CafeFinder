import "./App.css";
import Navbar from "./components/Navbar";
function App() {
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
          />

          <button>Search</button>
        </div>
      </main>
    </div>
  );
}

export default App;