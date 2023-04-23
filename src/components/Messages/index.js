import Message from './Message';
import { useSelector } from 'react-redux';

/**Que veut-on faire lorsqu'on veut afficher les messages ?
 * 1- On commence par récupérer notre state via useSelector
 * 2- On va retourner une div qui contiendra nos <Message />
 * 3- On utilise la méthode .map() pour afficher chaque message issu du state
 */

const Messages = () => {
  const messages = useSelector((state) => state.messages);

  return (
    <div className='messages'>
      {messages.map((message) => (
        <Message key={message.id} {...message}/>    // {...message} vaut content="blabla" author="SuperChat"
      ))}
    </div>
  )
}

export default Messages;
