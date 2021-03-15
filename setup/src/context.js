import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading,setLoading] = useState(true)
  const [searchTerm,setSearchTerm] = useState('a')
  const [cocktails,setCocktails] = useState([])

  const FetchData =useCallback( async ()=>{
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const {drinks} = data;
      if(drinks){
        const newDrink = drinks.map((item)=>{
          const {
            idDrink,
            strDrink,
            strAlcoholic,
            strGlass,
            strDrinkThumb
          } = item;
          return {
            id:idDrink,
            name:strDrink,
            image:strDrinkThumb,
            info:strAlcoholic,
            glass:strGlass}
        })
        setCocktails(newDrink)
      }else{
        setCocktails([])
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
   
  },[searchTerm])
  useEffect(()=>{
    FetchData()
  },[searchTerm,FetchData])

  return <AppContext.Provider 
  value={{
    loading,
    cocktails,
    setSearchTerm,
  }}>
  {children}
  </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () =>  {
  return useContext(AppContext)
}

export { AppContext, AppProvider }