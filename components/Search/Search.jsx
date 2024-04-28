
import React, { useState } from 'react';
import styles from "./Search.module.scss";

const Search = ({ setSearch, setPageNumber }) => {
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value); // Update the searchQuery state with the input value
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission

    // Pass the searchQuery to setSearch
    setSearch(searchQuery);
    // Reset the page number to 1 when search is submitted
    setPageNumber(1);
  };

  return (
    <form onSubmit={handleSubmit} className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}>
      <input
        placeholder="Search for characters"
        type="text"
        className={styles.input}
        value={searchQuery} // Controlled input value
        onChange={handleInputChange} // Handle input change
      />
      <button type="submit" className={`${styles.btn} btn btn-primary fs-5`}>Search</button>
    </form>
  );
};

export default Search;



// import React from "react";
// import styles from "./Search.module.scss";

// const Search = ({ setSearch, setPageNumber }) => {
//   const handleSearch = (e) => {
//     e.preventDefault();
//     const searchQuery = e.target.previousElementSibling.value; // Get the value of the search input field

//   // Update the search state and reset the page number
//   setSearch(searchQuery);
//   setPageNumber(1);

//   // Optionally, you can perform additional search-related logic here, such as fetching data based on the search query
// };
    

//   return (
//     <form
//       className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
//     >
//       <input
//         onChange={(e) => {
//           setPageNumber(1);
//           setSearch(e.target.value);
//         }}
//         placeholder="Search for characters"
//         className={styles.input}
//         type="text"
//       />
//       <button
//         onClick={handleSearch} // Call handleSearch function on button click
//         className={`${styles.btn} btn btn-primary fs-5`}
//       >
//         Search
//       </button>
//     </form>
//   );
// };

// export default Search;