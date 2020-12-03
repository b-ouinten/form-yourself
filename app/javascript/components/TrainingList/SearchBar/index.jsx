import React from 'react'

const SearchBar = () => {

  return (
    <form>
      <input className="form-control mr-sm-2" type="text" placeholder="Saississez votre recherche..." />
      <button className="btn btn-secondary mt-3" type="submit">Rechercher</button>
    </form>
  )
}

export default SearchBar