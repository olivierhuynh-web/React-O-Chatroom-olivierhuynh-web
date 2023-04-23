import { useSelector, useDispatch } from "react-redux";
import { Send } from "react-feather";
import { addInputValue, sendMessage } from "../../actions/chat";

import './styles.scss';

/** Je veux pouvoir envoyer un message dans le chat
 * 1- On va charger useDispatch()
 * 2- On va récupérer inputValue dans le state avec useSelector
 * 3- On va retourner le contenu du composant
 */

const Form = () => {
  const dispatch = useDispatch();

  const inputValue = useSelector((state) => state.inputValue);
  console.log(inputValue);

  return (
    <form 
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        if (inputValue.length < 1) return;

        dispatch(sendMessage());
      }}
    >
      <input 
        type="text"
        className="form-input"
        placeholder="Saisissez votre message..."
        value={inputValue}
        onChange={(event) => {
          dispatch(addInputValue(event.target.value))
        }}
      />
      <button type="submit" className="form-submit">
        <Send size={48}/>
      </button>
    </form>
  )
}

export default Form;
