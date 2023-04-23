import { createStore, applyMiddleware } from "redux";

import reducer from './reducer';
import authMiddleware from '../middlewares/authMiddleware';
import websocketMiddleware from '../middlewares/websocketMiddleware';

const store = createStore(reducer, applyMiddleware(authMiddleware, websocketMiddleware));

export default store;
