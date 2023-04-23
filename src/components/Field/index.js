import './styles.scss';

const Field = ({identifier, placeholder, changeField}) => {

  const handleChange = (event) => {
    const inputValue = event.target.value;
    const name = event.target.name;
    changeField(inputValue, name)
  }

  return(
    <div className="field">
      <input 
        className="field-input" 
        type={identifier} 
        id={identifier} 
        placeholder={placeholder} 
        name={identifier}
        onChange={handleChange}
      ></input>
    </div>
  )
}

export default Field;


