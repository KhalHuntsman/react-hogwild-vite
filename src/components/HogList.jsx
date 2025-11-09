import React from "react"; // Import React to define the component
import HogCard from "./HogCard"; // Import the HogCard component for individual hogs

// Functional component that renders a list of hogs
function HogList({ hogs, onHideHog }) {
  return (
    // Container div for all hog cards
    <div className="hogList">
      {/* Map over the hogs array and render a HogCard for each hog */}
      {hogs.map((hog) => (
        <HogCard 
          key={hog.name}     // Unique key for React's reconciliation; here using hog name
          hog={hog}          // Pass the hog object as a prop
          onHideHog={onHideHog} // Pass down the hide function to each card
        />
      ))}
    </div>
  );
}

export default HogList; // Export component for use elsewhere
