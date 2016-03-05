/**
 * Created by youngmoon on 2/27/16.
 */

import db from '../../utils/firebase';

import { dispatch } from '../ChatAppDispatcher';
import ChatConstants from '../ChatConstants';

const { ActionTypes } = ChatConstants;

class ChatUserActions {

    setCurrentUser(auth) {
        dispatch({
            type: ActionTypes.SET_CURRENT_USER,
            auth
        });
    }
}

const instance = new ChatUserActions();
export default instance;

