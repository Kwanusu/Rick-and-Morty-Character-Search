

import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
 import Search from "./components/Search/Search";
 import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import Episodes from "./Pages/Episodes";
import Locations from "./Pages/Locations";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetails from "./components/Card/CardDetails"

function App () {

return(
  <Router>
    <div className="App">
    <Navbar />
    </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:id" element={<CardDetails/>}/>

      <Route path="/Locations/:id" element={<CardDetails/>}/>
      <Route path="/Episodes/:id" element={<CardDetails/>}/>

      <Route path="/Episodes" element={<Episodes/>}/>
      <Route path="/Locations" element={<Locations/>}/>
    </Routes>
  </Router>
)

}


const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  let [search, setSearch] = useState("");
  const [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] =useState("");


  let api= `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  useEffect(() => {

    const fetchCharacters = async () => {
      try{
        const response = await fetch(api)
        const data = await response.json();
        updateFetchedData(data);
        console.log(data)
        setLoading(false);
      }catch(error) {
      console.error('Error fetching characters')}
        
    }

    fetchCharacters()
    
}, [api, status, gender, species, search, pageNumber]);

  return (
    <div className="App">
     
      <h1 className="text-center mb-4">Characters</h1>

      {loading ? (
        <p className='text-4xl ml-4 text-green-700'>Loading...</p>
        ):(" ")}

      <Search setPageNumber={setPageNumber} setSearch={setSearch} />

      <div className="container">
        <div className="row">
            <Filter 
            setStatus={setStatus}
            setSpecies={setSpecies} 
            setPageNumber={setPageNumber} 
            setGender={setGender}/>
          <div className="col-lg-8 col-12">
            <div className="row">
             <Card results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );

}
export default App
   