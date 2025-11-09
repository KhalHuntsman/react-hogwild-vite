import React, { useState } from "react"; // Import React and useState for component state

// Functional component for displaying a single hog
function HogTile({ hog, onHide }) {
  const [showDetails, setShowDetails] = useState(false); // Track whether additional details are shown

  // Toggle function for showing/hiding hog details
  const handleToggle = () => setShowDetails(!showDetails);

  return (
    // Container card for each hog
    <div
      className="ui card pigTile"
      aria-label="hog card"       // Accessibility label
      onClick={handleToggle}      // Clicking card toggles details
    >
      {/* Hog name */}
      <h3>{hog.name}</h3>

      {/* Hog image */}
      <img
        className="ui image"
        alt={`Photo of ${hog.name}`} // Descriptive alt text for accessibility
        src={hog.image}              // Image URL from hog data
      />

      {/* Hide button */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent card click from toggling details
          onHide(hog.id);      // Call parent handler to remove hog
        }}
      >
        Hide Me
      </button>

      {/* Conditionally render hog details */}
      {showDetails && (
        <div className="hogDetails">
          <p>Specialty: {hog.specialty}</p>
          <p>{hog.weight}</p>
          <p>{hog.greased ? "Greased" : "Nongreased"}</p>
          <p>{hog["highest medal achieved"]}</p>
        </div>
      )}
    </div>
  );
}

export default HogTile; // Export component for use in other files
