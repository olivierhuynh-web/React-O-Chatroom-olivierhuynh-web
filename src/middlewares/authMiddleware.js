import axios from "axios";
import {saveSuccessfulAuth} from '../actions/chat';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case "SUBMIT_LOGIN":
      const { email, password } = store.getState();

      axios
        .post("http://localhost:3001/login", {
          email,
          password
        })
        .then((response) => {
          const { pseudo } = response.data;
          store.dispatch(saveSuccessfulAuth(pseudo))
        })
        .catch((error) => {
          console.log(error);
        })
      
      break;
  
  }
  next(action)
}

export default authMiddleware;



// function test(store) {
//   return function test2(next) {
//     return function test3(action) {
//       console.log(store)
//       console.log(next)
//       console.log(action)
//     }
//   }
// }
