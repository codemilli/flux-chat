/**
 * Created by youngmoon on 2/27/16.
 */

import db from '../../utils/firebase';
import chat from '../../utils/firechat';
import Immutable from 'immutable';

import { dispatch } from '../ChatAppDispatcher';
import ChatConstants from '../ChatConstants';

const { ActionTypes } = ChatConstants;
const Rooms = db.child('rooms');
const Messages = db.child('messages');


class ChatMessageActions {
    createMessage(text, roomID) {
        chat.sendMessage(roomID, text);
        //const message = createMessage(text, roomID);
        //const created = Messages.push(message.toJS());
        //
        //created.then((response) => {
        //    Rooms.child(`${roomID}/messages`).push(created.key());
        //
        //    dispatch({
        //        type: ActionTypes.CREATE_MESSAGE,
        //        roomID,
        //        message: message.set('id', created.key())
        //    });
        //});
    }

    addMessage(roomId, message) {
        dispatch({
            type: ActionTypes.ADD_MESSAGE,
            roomId,
            message
        });
    }
}

const createMessage = (text, roomID) => {
    const timestamp = Date.now();
    return Immutable.Map({
        text,
        roomID,
        createdAt: timestamp
    });
};

const instance = new ChatMessageActions();
export default instance;
