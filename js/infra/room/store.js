/**
 * Created by youngmoon on 2/26/16.
 */

import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';

import ChatAppDispatcher from 'dispatcher';
import ChatConstants from 'constant';
import MessageStore from '../message/store';
import Room from './model';

const { ActionTypes } = ChatConstants;

const RoomListRecord = Immutable.Record({
    fetchedRoomList: false,
    currentID: undefined,
    rooms: Immutable.OrderedMap()
});

class RoomInfoStore extends ReduceStore {
    getInitialState() {
        return new RoomListRecord();
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.GET_ROOM:
                return state.set('rooms', state.get('rooms').set(action.key, action.room));
            case ActionTypes.GET_ROOM_LIST:
                return state.set('rooms', action.list || Immutable.Map()).set('fetchedRoomList', true);
            case ActionTypes.CREATE_ROOM:
                return state.setIn(['rooms', action.newRoom.get('id')], action.newRoom);
            case ActionTypes.ENTER_ROOM:
                return state.set('currentID', action.roomId);
            case ActionTypes.ADD_MESSAGE:
                ChatAppDispatcher.waitFor([
                    MessageStore.getDispatchToken()
                ]);
                return state.setIn(['rooms', action.roomId, 'lastMessage'], action.message);
            default:
                return state;
        }
    }

    getRoomById(id) {
        return this.getState().getIn(['rooms', id]) || new Room();
    }

    getCurrentRoom() {
        return this.getRoomById(this.getCurrent());
    }

    getRooms() {
        return this.getState().get('rooms');
    }

    getCurrent() {
        return this.getState().get('currentID');
    }

    getFetchState() {
        return this.getState().get('fetchedRoomList');
    }
}

const addRoom = (state, { newRoom }) => {
    if (!state.get(newRoom.get('id'))) {
        state = state.set(newRoom.get('id'))
    }
    return state;
};

const instance = new RoomInfoStore(ChatAppDispatcher);
export default instance;