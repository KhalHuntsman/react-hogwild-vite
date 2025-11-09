import React, { useState } from "react"; // Import React and useState for managing form state

// Functional component for adding a new hog
function HogForm({ onAddHog }) {
  // Individual form state variables
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [greased, setGreased] = useState(false);
  const [weight, setWeight] = useState("");
  const [medal, setMedal] = useState("");
  const [image, setImage] = useState("");

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on submit

    // Create a new hog object from state values
    const newHog = {
      name,
      specialty,
      greased,
      weight: parseFloat(weight), // Convert weight to a number
      "highest medal achieved": medal,
      image
    };

    onAddHog(newHog); // Call parent handler to add the hog

    // Clear all form fields
    setName("");
    setSpecialty("");
    setGreased(false);
    setWeight("");
    setMedal("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Name input */}
      <label htmlFor="name">Name:</label>
      <input 
        id="name" 
        type="text" 
        value={name}               // Controlled input bound to state
        onChange={(e) => setName(e.target.value)} // Update state on change
      />

      {/* Specialty input */}
      <label htmlFor="specialty">Specialty:</label>
      <input 
        id="specialty" 
        type="text" 
        value={specialty} 
        onChange={(e) => setSpecialty(e.target.value)} 
      />

      {/* Greased checkbox */}
      <label htmlFor="greased">Greased?</label>
      <input 
        id="greased" 
        type="checkbox" 
        checked={greased}            // Controlled checkbox
        onChange={(e) => setGreased(e.target.checked)} 
      />

      {/* Weight input */}
      <label htmlFor="weight">Weight:</label>
      <input 
        id="weight" 
        type="number" 
        value={weight} 
        onChange={(e) => setWeight(e.target.value)} 
      />

      {/* Medal input */}
      <label htmlFor="medal">Highest Medal:</label>
      <input 
        id="medal" 
        type="text" 
        value={medal} 
        onChange={(e) => setMedal(e.target.value)} 
      />

      {/* Image URL input */}
      <label htmlFor="image">Image URL:</label>
      <input 
        id="image" 
        type="text" 
        value={image} 
        onChange={(e) => setImage(e.target.value)} 
      />

      {/* Submit button */}
      <button type="submit">Add Hog</button>
    </form>
  );
}

export default HogForm; // Export component for use in other parts of the app
