



import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import InputGroups from "../components/Filter/Category/InputGroups";


const Episodes = () => {
    let [results, setResults] = React.useState([]);
    let [info, setInfo] = useState([]);
    let { air_date, name } = info;
    let [id, setID] = useState(1);
  
  
  
  let api = `https://rickandmortyapi.com/api/episode/${id}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);
  
      let a = await Promise.all(
        data.characters.map(async (x) => {
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
              Episode name :{" "}
              <span className="text-primary">{name === "" ? "Unknown" : name}</span>
            </h1>
            <h5 className="text-center">
              Air Date: {air_date === "" ? "Unknown" : air_date}
            </h5>
          </div>
          <div className="row">
          <div className="col-lg-3 col-12 mb-4">
            <h4 className="text-center mb-4">Pick Episode</h4>
            <InputGroups name="Episode" changeID={setID} total={51} />
          </div>
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card page="/Episodes/" results={results} />
            </div>
          </div>
          </div>
        </div>
        );
};

export default Episodes