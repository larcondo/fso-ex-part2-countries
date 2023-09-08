const CountryDetails = ({ country }) => {
  
  const imgStyle = {
    border: '2px solid #dedede'
  }

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
    </div>
  )
}


export default CountryDetails