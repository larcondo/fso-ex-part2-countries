const Filter = ({ country, onChange}) => {
  return(
    <div>
      find countries <input value={country} onChange={onChange} />
    </div>
  )
}

export default Filter