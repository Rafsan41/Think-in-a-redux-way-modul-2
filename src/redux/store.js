import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer';

import myLogger from './middleware/mylogger';


import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, myLogger)));
export default store;