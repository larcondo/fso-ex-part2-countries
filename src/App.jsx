import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import CountryList from './components/CountryList'
import CountryDetails from './components/CountryDetails'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('')
  const [selected, setSelected] = useState(null)
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

  useEffect(() => {
    (list.length === 1)
      ? setSelected(list[0])
      : setSelected(null) 
  }, [list])

  const handleCountryChange = (event) => {
    setCountry(event.target.value)
  }

  return (
    <>
    { isLoading
      ? <p>loading...</p>
      : <div>
          <Filter 
            country={country} 
            onChange={handleCountryChange} 
          />

          <CountryList list={list} setSelected={setSelected} />
         
          { selected && 
            <CountryDetails country={selected} /> 
          }
          
      </div>
    }
    </> 
  )
}

export default App