/**
 * Created by youngmoon on 2/27/16.
 */

import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';

import Message from './model';
import RoomStore from '../room/store';
import ChatAppDispatcher from 'dispatcher';
import ChatConstants from 'constant';

const { ActionTypes } = ChatConstants;

class MessageStore extends ReduceStore {
    getInitialState() {
        return new Immutable.Map();
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.ENTER_ROOM:
                ChatAppDispatcher.waitFor([
                    RoomStore.getDispatchToken()
                ]);
                return state.set(action.roomId, Immutable.List());
            case ActionTypes.ADD_MESSAGE:
                return state.set(action.roomId, addMessage(state, action));
            default:
                return state;
        }
    }

    getMessages() {
        return this.getState();
    }

    getCurrentRoomMessages(roomID) {
        return this.getState().get(roomID) || Immutable.List();
    }
}

const addMessage = (state, { roomId, message }) => {
    if (!state.get(roomId)) {
        state = state.set(roomId, Immutable.List());
    }

    return state.get(roomId).push(message);
};

const instance = new MessageStore(ChatAppDispatcher);
export default instance;
