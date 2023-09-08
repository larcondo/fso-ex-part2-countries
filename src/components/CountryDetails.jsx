import { useEffect, useState } from 'react'
import weatherService from '../services/weather'

const CountryDetails = ({ country }) => {
  const [weather, setWeather] = useState(null)

  const imgStyle = { border: '2px solid #dedede' }

  useEffect(() => {
    weatherService
      .getWeather(country.capital)
      .then( data => {
        setWeather(data) 
      })
  }, [])

  return(
    <div>
      <h1>{country.name.common}</h1>
      <p><b>capital</b> { country.capital }</p>
      <p><b>area</b> { country.area.toLocaleString('us-EN') } km<sup>2</sup></p>

      <h3>languages</h3>
      <ul>
        { Object
          .entries(country.languages)
          .map((entry, index) => {
            return <li key={index}>{entry[1]}</li>
          })
        }
      </ul>

      {/* <img src={list[0].flags.png} alt="Flag" width="200px" style={imgStyle} /> */}
      <img src={country.flags.svg} alt="Flag" width="200px" style={imgStyle} />

      <h2>Weather in { country.capital }</h2>
      { weather &&
        <>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <img src={weather.current.condition.icon} alt='Condition' />
            <p>{weather.current.condition.text}</p>
          </div>
          <p>temperature { weather.current.temp_c.toFixed(1) } °C</p>
          <p>wind { weather.current.wind_kph } m/s</p>
        </>
      }
    </div>
  )
}


export default CountryDetails