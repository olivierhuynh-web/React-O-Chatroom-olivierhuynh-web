import { handleMessageReceived } from '../actions/chat';

let socket;

const websocketMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case "SAVE_SUCCESSFUL_AUTH":
      //Ici, on vient se connecter au websocket présent sur notre server
      socket = window.io('http://localhost:3001');
      // Quand websocket aperçoit un message ("send_message"), on lancera un traitement
      socket.on("send_message", (message)=> {
        store.dispatch(handleMessageReceived(message));
      })
      break;

    case "SEND_MESSAGE":
      // Ici, on va emettre un objet, qui aura pour titre "send_message", avec un payload (notre message)
      socket.emit("send_message", {
        author: store.getState().pseudo,
        content: store.getState().inputValue
      });
      break;
  
    default:
      break;
  }

  next(action);
}

export default websocketMiddleware;
