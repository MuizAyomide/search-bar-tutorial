import React from "react";
import "./SearchResult.css";
const SearchResult = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <div key={id}>{result.name}</div>;
      })}
    </div>
  );
};

export default SearchResult;
