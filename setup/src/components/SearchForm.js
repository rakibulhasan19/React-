import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext()
  const searchValue = React.useRef('')
  
  const searchCocktail =(e)=>{
    setSearchTerm(searchValue.current.value)
  }
  React.useEffect(()=>{
    searchValue.current.focus()
  },[])
  const onSubmitHandler =(e)=>{
    e.preventDefatul()
  }
  return (
    <section className="section search">
      <form className="search-form" onSubmit={onSubmitHandler}>
        <div className="form-control">
          <label htmlFor="name">Search your favorite cocktail</label>
          <input type="text" id="name" ref={searchValue} onChange={searchCocktail}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
