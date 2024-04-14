import React, { useState } from 'react'
import SearchBar from './Components/SearchBar'
import './App.css'
import SearchResult from './Components/SearchResult';
const App = () => {

  const [results, setResults] = useState([]);


  return (
    <div className='App'>
      <div className="container">
      <SearchBar  setResult={setResults}/>
      <SearchResult/>
      </div>
    </div>
  )
}

export default App
