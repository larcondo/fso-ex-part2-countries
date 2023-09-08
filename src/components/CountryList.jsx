const CountryList = ({ list, setSelected }) => {
  if (list.length > 10 ) return <p>Too many matches, specify another filter</p>

  if (list.length < 2) return null

  return (
    list.map( (c, i) => 
      <p key={i}>{ c.name.common } <button onClick={() => setSelected(c)}>show </button></p>
    )
  )
}

export default CountryList