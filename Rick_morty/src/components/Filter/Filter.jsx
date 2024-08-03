
import React from 'react'
import Gender from '../Filter/Category/Gender';
import Species from '../Filter/Category/Species';
import Status from '../Filter/Category/Status';

const Filter = ({pageNumber, setStatus, setPageNumber,setGender, setSpecies}) => {

let clear =() => {
  setStatus(""); 
  setPageNumber("");
  setGender("");
  setSpecies("");
  window.location.reload(false)
  }

  return (
    <div className='col-lg-3 col-12 mb-5'>
      <div className="text-center fw-bold fs-4 mb-2">Filter</div>
      <div onClick={clear} style ={{cursor: "pointer"}} 
        className="text-center text-primary text-decoration-underline">
          Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status setStatus={setStatus} setPageNumber={setPageNumber} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber}/>
        <Gender setGender={setGender} setStatus={setStatus} setPageNumber={setPageNumber}/>
      </div>
    </div>
  );
};

export default Filter



