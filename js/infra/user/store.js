/**
 * Created by youngmoon on 2/27/16.
 */

import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';

import ChatAppDispatcher from '../ChatAppDispatcher';
import ChatConstants from '../ChatConstants';

const { ActionTypes } = ChatConstants;

class UsersStore extends ReduceStore {
    getInitialState() {
        return new Immutable.Map();
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.SET_CURRENT_USER:
                return state.set('currentUser', action.auth);
            default:
                return state;
        }
    }

    getCurrentUser(id) {
        return this.getState().get('currentUser') || Immutable.Map();
    }
}

const instance = new UsersStore(ChatAppDispatcher);
export default instance;