const CountryData = ({ list }) => {
  const imgStyle = {
    border: '2px solid #dedede'
  }

  if (list.length > 10) return <p>Too many matches, specify another filter</p>

  if (list.length === 1) 
  return (
    <>
      <h1>{list[0].name.common}</h1>
      <p><b>capital</b> { list[0].capital }</p>
      <p><b>area</b> { list[0].area.toLocaleString('us-EN') } km<sup>2</sup></p>

      <h3>languages</h3>
      <ul>
        { Object
          .entries(list[0].languages)
          .map((entry, index) => {
            return <li key={index}>{entry[1]}</li>
          })
        }
      </ul>
      {/* <img src={list[0].flags.png} alt="Flag" width="200px" style={imgStyle} /> */}
      <img src={list[0].flags.svg} alt="Flag" width="200px" style={imgStyle} />
    </>
  )

  return(
    <div>
      { list.map( (c, i) => 
        <p key={i}>{ c.name.common }</p>
      )}
    </div>
  )
}

export default CountryData