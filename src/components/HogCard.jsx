import React, { useState } from "react"; // Import React and useState for managing component state

// Functional component representing a single hog card
function HogCard({ hog, onHideHog }) {
  const [showDetails, setShowDetails] = useState(false); // Track whether hog details are shown

  return (
    // Container card for the hog
    <div
      aria-label="hog card"           // Accessibility label
      className="ui card pigTile"     // Semantic UI classes for styling
      onClick={() => setShowDetails(!showDetails)} // Toggle detail visibility on card click
    >
      {/* Hog name */}
      <h3>{hog.name}</h3>

      {/* Hog image */}
      <img src={hog.image} alt={hog.name} className="ui image" />

      {/* Conditional rendering: show details if toggled */}
      {showDetails && (
        <div className="hogDetails">
          <p>Specialty: {hog.specialty}</p>
          <p>Weight: {hog.weight}</p>
          <p>Greased: {hog.greased ? "Yes" : "No"}</p>
          <p>Highest Medal: {hog["highest medal achieved"]}</p>
        </div>
      )}

      {/* Hide button */}
      <button
        onClick={(e) => {
          e.stopPropagation();   // Prevent the card click from toggling details
          onHideHog(hog.name);   // Call parent handler to hide this hog
        }}
      >
        Hide Me
      </button>
    </div>
  );
}

export default HogCard; // Export component for use in other files
