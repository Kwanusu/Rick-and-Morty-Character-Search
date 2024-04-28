import { useState, useEffect } from "react"
import {Link} from 'react-router-dom'

const Characters = () => { 
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);
    const [currentCharactersPage, setCurrentCharactersPage] = useState([]);
    const [charactersPerPage] = useState(20);
    const [page, setPage] = useState(1)
   

    useEffect(() => {

        const fetchCharacters = async () => {
            const response = await fetch(`https://rickandmortyapi.com/api/character?pages=${page}`)
            const data = await response.json();
    
            setCharacters(data.results);
            setLoading(false);
        }

        fetchCharacters()
    }, [page]);

    const paginate = (pageNumber) => setCurrentCharactersPage(pageNumber);

    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1);
      };
    
      const handlePrevPage = () => {
        setPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
      };
        
return(
  <>
    <div className="mt-10">
    <Link to ="/Episodes" className="text-2xl pl-3 pr-3 border-x-1 rounded-lg border-slate-950 border-y-1 bg-red-400 text-white-#fff ml-20 mt-20">Episodes</Link>
         <h1 className="text-5xl pl-60 mb-16 p-2">Rick and Morty Characters</h1>
    </div> 
    <div className="mt-10 grid gap-4 grid-cols-4 grid-rows-3">
       
        {loading ? (
                <p className='text-2xl ml-4 text-green-700'>Loading...</p>
            ) : (
            characters.map((character) => {
              return (
                <div  key={character.id} className="text-2xl ml-6 mb-16 border-x-2 border-y-2  border-blue-800 rounded-lg ">
                  <div>
                    <div className="text-xl text-right bg-green-600 pr-2 justify-end z-20 rounded-lg">{character.status}</div>
                    <img className="object-cover" src={character.image}/>
                  </div>
                  <div className="ml-4 mr-2">{character.name}</div>
                  <div className="ml-4 mr-2">{character.species}</div>
                  <div className="ml-4 mr-2">{character.gender}</div>
                </div>
              )
            })
        )}
    </div>
    <div className="mt-4 flex justify-center">
        <button onClick={handlePrevPage} className="mx-1 px-4 py-2 bg-blue-500 text-white rounded mb-10">
          Previous
        </button>
    {[...Array(Math.ceil(characters.length / charactersPerPage)).keys()].map((pageNumber) => (
        <button
            key={pageNumber}
            onClick={() => paginate(pageNumber + 1)} 
            className={`mx-1 px-4 py-2 bg-blue-500 text-white rounded mb-10
            ${currentCharactersPage === pageNumber + 1 ? 'bg-blue-700' : ''}`} 
        >
            {pageNumber + 1}
        </button>
        
    ))}
        <button onClick={handleNextPage} className="mx-1 px-4 py-2 bg-blue-500 text-white rounded mb-10">
            Next
        </button>
</div>
 </>
    )
    
}
export default Characters


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Pagination from "./Pagination"; // Import the Pagination component

// const Characters = () => {
//   const [loading, setLoading] = useState(true);
//   const [characters, setCharacters] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1); // Initialize totalPages to 1

//   useEffect(() => {
//     const fetchCharacters = async () => {
//       const response = await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
//       const data = await response.json();

//       setCharacters(data.results);
//       setTotalPages(data.info.pages); // Set totalPages from API response
//       setLoading(false);
//     };

//     fetchCharacters();
//   }, [currentPage]);

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
//   };

//   const handlePrevPage = () => {
//     setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
//   };

//   return (
//     <>
//       <div className="mt-10">
//         <Link to="/Episodes" className="text-2xl pl-3 pr-3 border-x-1 rounded-lg border-slate-950 border-y-1 bg-red-400 text-white-#fff ml-20 mt-20">
//           Episodes
//         </Link>
//         <h1 className="text-5xl pl-60 mb-16 p-2">Rick and Morty Characters</h1>
//       </div>
//       <div className="mt-10 grid gap-4 grid-cols-4 grid-rows-3">
//         {loading ? (
//           <p className="text-2xl ml-4 text-green-700">Loading...</p>
//         ) : (
//           characters.map((character) => {
//             return (
//               <div key={character.id} className="text-2xl ml-6 mb-16 border-x-2 border-y-2 border-blue-800 rounded-lg">
//                 <div>
//                   <div className="text-xl text-right bg-green-600 pr-2 justify-end z-20 rounded-lg">{character.status}</div>
//                   <img className="object-cover" src={character.image} alt={character.name} />
//                 </div>
//                 <div className="ml-4 mr-2">{character.name}</div>
//                 <div className="ml-4 mr-2">{character.species}</div>
//                 <div className="ml-4 mr-2">{character.gender}</div>
//               </div>
//             );
//           })
//         )}
//       </div>
//       <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
//     </>
//   );
// };

// export default Characters;