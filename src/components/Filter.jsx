const Filter = ({ country, onChange, isLoading}) => {
  return(
    <div>
      find countries <input value={country} onChange={onChange} disabled={isLoading} />
    </div>
  )
}

export default Filter