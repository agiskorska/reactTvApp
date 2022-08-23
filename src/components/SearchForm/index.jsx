import React, {useState} from 'react'

function SearchForm( { handleSearchSubmission }) {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e) => {
    const newInput = e.target.value;
    setInputValue(newInput);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSearchSubmission(inputValue)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchbox"></label>
        <input type="text" onChange={handleInput} value={inputValue} id="searchbox" required/>
        <input type="submit" value="Search"/>
    </form>
  )
}

export default SearchForm;