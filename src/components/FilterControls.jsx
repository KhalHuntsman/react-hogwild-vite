import React from "react"; // Import React to define the component

// Functional component with props for filtering and sorting behavior
function FilterControls({ 
  searchText,       // Current search text value
  onSearchChange,   // Function to handle search text updates
  greasedOnly,      // Boolean indicating if only greased hogs should show
  onGreasedChange,  // Function to toggle greased-only filter
  sortBy,           // Current sort option ("name", "weight", or "")
  onSortChange      // Function to handle sorting selection
}) {
  return (
    // Wrapper div for all filter controls
    <div className="filterWrapper">
      {/* Text input for searching hogs by name */}
      <label htmlFor="search">Search Hogs: </label>
      <input
        type="text"
        id="search"
        value={searchText}
        onChange={onSearchChange} // Calls the handler whenever text changes
      />

      {/* Checkbox to filter for greased hogs only */}
      <label htmlFor="greased">Greased Only</label>
      <input
        type="checkbox"
        id="greased"
        checked={greasedOnly}     // Reflects current greased-only state
        onChange={onGreasedChange} // Calls the handler when toggled
      />

      {/* Dropdown for sorting hogs by chosen criteria */}
      <label htmlFor="sort">Sort By: </label>
      <select 
        id="sort" 
        value={sortBy}            // Reflects the current sort selection
        onChange={onSortChange}   // Calls the handler when option changes
      >
        <option value="">None</option>     {/* No sorting applied */}
        <option value="name">Name</option> {/* Sort alphabetically */}
        <option value="weight">Weight</option> {/* Sort numerically */}
      </select>
    </div>
  );
}

export default FilterControls; // Export component for use elsewhere
