import React from "react";
import "./SearchResult.css";
import Result from "./Result";
const SearchResult = ({ results }) => {
  return (
    <div className="results-list">
      {  results.map((result, id)=>{
        return <Result result={result} key={id}/>
        

      })  }
    </div>
  );
};

export default SearchResult;
