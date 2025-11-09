import React from "react"; // Import React to define a functional component
import piggy from "../assets/porco.png"; // Import the pig image asset for display

// Define a functional component called Nav
const Nav = () => {
  return (
    // Container div for the navigation/header section
    <div className="navWrapper">
      {/* Main title text */}
      <span className="headerText">HogWild</span>

      {/* Animated or styled pig image container */}
      <div className="TwirlyPig">
        {/* Pig image with styling and accessible alt text */}
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>

      {/* Subtitle or tagline text */}
      <span className="normalText">
        A React App for County Fair Hog Fans
      </span>
    </div>
  );
};

// Export the Nav component for use in other files
export default Nav;
