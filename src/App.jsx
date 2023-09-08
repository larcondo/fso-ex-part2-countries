import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import CountryData from './components/CountryData'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('')
  const [list, setList] = useState([])

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/all`)
      .then( response => {
        setCountries(response.data)
        setIsLoading(false)
      })
  }, [])

  useEffect(() => {
    (country === '')
      ? setList([])
      : setList(countries.filter( entry => entry.name.common.toLowerCase().includes(country.toLowerCase())))
  }, [country])

  const handleCountryChange = (event) => {
    setCountry(event.target.value)
  }

  return (
    <div>
      <Filter 
        country={country} 
        onChange={handleCountryChange} 
        isLoading={isLoading} 
      />
      
      <div>
        { isLoading 
          ? <p>loading...</p>
          : <CountryData list={list} />
        }
      </div>
    
    </div>
  )
}

export default App