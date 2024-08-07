
import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import InputGroups from "../components/Filter/Category/InputGroups";



const Locations = () => {
  let [results, setResults] = useState([]);
  let [info, setInfo] = useState([]);
  let { dimension, name } = info;
  let [number, setNumber] = useState(1);

  let api = `https://rickandmortyapi.com/api/location/${number}`;

useEffect(() => {
  (async function () {
    let data = await fetch(api).then((res) => res.json());
    setInfo(data);

    let a = await Promise.all(
      data.residents.map(async (x) => {
        const res = await fetch(x);
        return await res.json();
      })
    );
    setResults(a);
  })();
},[api]);

    return (
      <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-3">
          Location :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Dimension: {dimension === "" ? "Unknown" : dimension}
        </h5>
      </div>
      <div className="row">
      <div className="col-lg-3 col-12 mb-4">
        <h4 className="text-center mb-4">Pick location</h4>
        <InputGroups name="Location" changeID={setNumber} total={126} />
      </div>
      <div className="col-lg-8 col-12">
        <div className="row">
          <Card page="/Locations/" results={results} />
        </div>
      </div>
      </div>
    </div>
    );
};

export default Locations