import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';

import feeds from '../feeds';
import login from '../login';

export default history =>
    combineReducers({
        router: connectRouter(history),
        [login.NAME]: login.reducer,
        [feeds.NAME]: feeds.reducer,
    });
