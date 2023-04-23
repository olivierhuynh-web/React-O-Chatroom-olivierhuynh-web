import { Plus } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSettings, updateSettingsField, submitLogin } from '../../actions/chat';
import Field from '../Field';

import './styles.scss';

const Settings = () => {
  const { isSettingsOpen } = useSelector((state) => state);
  const dispatch = useDispatch();



  return (
    <div className="settings">
      <button 
        type="button" 
        className={isSettingsOpen ? "settings-toggle settings-toggle--open" : "settings-toggle"} 
        onClick={() => dispatch(toggleSettings())}>
          <Plus />
        </button>
      {isSettingsOpen && (
        <form className='settings-form' onSubmit={(event) => {
          event.preventDefault();
          dispatch(submitLogin());
        }}>
          <Field 
            identifier="email" 
            placeholder="Votre Email"
            changeField={(newValue, identifier) => { dispatch(updateSettingsField(newValue, identifier))}}
          />
          <Field 
            identifier="password" 
            placeholder="Votre mot de passe"
            changeField={(newValue, identifier) => { dispatch(updateSettingsField(newValue, identifier))}}
          />
          <button type="submit" className='settings-submit'>Se connecter</button>
        </form>
      )}
    </div>


  )
}

export default Settings;
