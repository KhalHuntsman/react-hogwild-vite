import React, { useState } from "react"; // Import React and the useState hook for managing state
import hogsData from "../porkers_data.js"; // Import initial hog data
import HogTile from "./HogTile"; // Import the HogTile component for displaying individual hogs

function App() {
  // Initialize hogs with unique IDs added to each hog object
  const [hogs, setHogs] = useState(
    hogsData.map((hog, index) => ({ ...hog, id: index + 1 }))
  );

  // State variables for the Add Hog form
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [greased, setGreased] = useState(false);
  const [weight, setWeight] = useState("");
  const [medal, setMedal] = useState("");
  const [image, setImage] = useState("");

  // State variables for filtering and sorting
  const [search, setSearch] = useState("");
  const [greasedOnly, setGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("");

  // Function to add a new hog
  const handleAddHog = (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    const newHog = {
      id: Date.now(), // Unique ID based on current timestamp
      name,
      specialty,
      greased,
      weight,
      "highest medal achieved": medal,
      image,
    };
    setHogs([...hogs, newHog]); // Add new hog to the list

    // Reset all input fields after submission
    setName("");
    setSpecialty("");
    setGreased(false);
    setWeight("");
    setMedal("");
    setImage("");
  };

  // Function to hide (remove) a hog by ID
  const handleHideHog = (id) => setHogs(hogs.filter((hog) => hog.id !== id));

  // Filter and sort logic for hog display
  const filteredHogs = hogs
    // Filter by name search (case-insensitive)
    .filter((hog) => hog.name.toLowerCase().includes(search.toLowerCase()))
    // Filter by greased status if enabled
    .filter((hog) => (greasedOnly ? hog.greased : true))
    // Sort by name or weight based on user selection
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "weight") return a.weight - b.weight;
      return 0; // No sorting if sortBy is empty
    });

  return (
    <div className="App">
      {/* App Header / Navigation */}
      <div className="navWrapper">
        <span className="headerText">HogWild</span>
        <div className="TwirlyPig">
          <img alt="piggy" className="App-logo" src="/src/assets/porco.png" />
        </div>
        <span className="normalText">A React App for County Fair Hog Fans</span>
      </div>

      {/* Add Hog Form */}
      <form onSubmit={handleAddHog}>
        {/* Name Input */}
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Specialty Input */}
        <label htmlFor="specialty">Specialty:</label>
        <input
          id="specialty"
          type="text"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
        />

        {/* Greased Checkbox */}
        <label htmlFor="greased">Greased?</label>
        <input
          id="greased"
          type="checkbox"
          checked={greased}
          onChange={(e) => setGreased(e.target.checked)}
        />

        {/* Weight Input */}
        <label htmlFor="weight">Weight:</label>
        <input
          id="weight"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        {/* Medal Input */}
        <label htmlFor="medal">Highest Medal:</label>
        <input
          id="medal"
          type="text"
          value={medal}
          onChange={(e) => setMedal(e.target.value)}
        />

        {/* Image URL Input */}
        <label htmlFor="image">Image URL:</label>
        <input
          id="image"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        {/* Submit Button */}
        <button type="submit">Add Hog</button>
      </form>

      {/* Filter & Sort Controls */}
      <div className="filterWrapper">
        {/* Search Input */}
        <label htmlFor="search">Search Hogs:</label>
        <input
          id="search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Greased Filter Checkbox */}
        <label htmlFor="greasedFilter">Greased Pigs Only?</label>
        <input
          id="greasedFilter"
          type="checkbox"
          checked={greasedOnly}
          onChange={(e) => setGreasedOnly(e.target.checked)}
        />

        {/* Sort Dropdown */}
        <label htmlFor="sort">Sort by:</label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>

      {/* Render Hog List */}
      <div className="ui grid container">
        <div className="ui eight wide column">
          <div className="hogList">
            {filteredHogs.map((hog) => (
              // Render a HogTile for each filtered hog
              <HogTile key={hog.id} hog={hog} onHide={handleHideHog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; // Export the component as default
