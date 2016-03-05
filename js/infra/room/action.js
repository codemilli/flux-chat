/**
 * Created by youngmoon on 2/26/16.
 */

import chat from 'firechat';
import Immutable from 'immutable';

import { dispatch } from '../ChatAppDispatcher';
import ChatConstants from '../ChatConstants';

import Room from './model';

const { ActionTypes } = ChatConstants;

class ChatRoomActions {

    getRooms(list) {
        dispatch({
            type: ActionTypes.GET_ROOM_LIST,
            list
        });
    }

    getRoom(key, room) {
        dispatch({
            type: ActionTypes.GET_ROOM,
            key,
            room
        });
    }

    createRoom(name) {
        chat.createRoom(name).then(newRoom => {
            newRoom = Immutable.fromJS(newRoom);
            dispatch({
                type: ActionTypes.CREATE_ROOM,
                newRoom: newRoom.set('name', name).set('createdAt', Date.now())
            });
        });
    }

    clickRoom(roomId, currentRoom) {
        if (currentRoom) {
            chat.leaveRoom(currentRoom).then(() => {
                chat.enterRoom(roomId);
            });
        }
        chat.enterRoom(roomId);
    }

    enterRoom(roomId) {
        dispatch({
            type: ActionTypes.ENTER_ROOM,
            roomId
        });
    }
}

const instance = new ChatRoomActions();
export default instance;

