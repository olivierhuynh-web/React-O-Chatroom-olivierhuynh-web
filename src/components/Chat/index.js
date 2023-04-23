import Messages from '../Messages';
import Form from '../Form';
import Settings from '../Settings';

import { useSelector } from 'react-redux';

import "./styles.scss";



const Chat = ()  => {

  const { pseudo } = useSelector((state) => state);

  return (
    <div className='chat'>
      <Messages />
      {pseudo !== "" && <Form />}
      <Settings />
    </div>
  )
}

export default Chat;

// Ce composant nous retourne une div.app qui contient nos composants Message et Form
