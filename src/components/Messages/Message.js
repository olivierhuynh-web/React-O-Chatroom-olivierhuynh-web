import "./styles.scss";

import { useSelector } from "react-redux";

/** Ici, on souhaite afficher un message
 * 1- On veut afficher une div qui contiendra notre message
 * 2- On veut afficher l'auteur du message
 * 3- On veut afficher le contenu du message
 */

const Message = ({author, content}) => {

  const {pseudo} = useSelector((state) => state);

  return (
    <div className={pseudo !== author ? "message-received" : "message-sent"}>
      <div className="message-author">{author}</div>
      <div className="message-content">{content}</div>
    </div>
  )
}

export default Message;
