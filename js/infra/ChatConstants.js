/**
 * Created by youngmoon on 2/26/16.
 */

import keyMirror from 'keymirror';

export default {
    ActionTypes: keyMirror({
        SET_CURRENT_USER: null,

        GET_ROOM_LIST: null,
        GET_ROOM: null,
        CREATE_ROOM: null,
        CLICK_ROOM: null,
        ENTER_ROOM: null,

        CREATE_MESSAGE: null,
        ADD_MESSAGE: null
    })
};