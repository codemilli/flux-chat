/**
 * Created by youngmoon on 2/26/16.
 */

import React from 'react';
import Immutable from 'immutable';
import chat from 'firechat';

import RoomInfoSection from './RoomInfoSection';
import MessageSection from './MessageSection';

import ChatRoomActionCreators from '../../infra/room/action';
import ChatUserActionCreators from '../../infra/user/action';

/**
 * Define React Component ChatApp
 */
class ChatApp extends React.Component {

    /**
     * Constructor for ChatApp
     * @constructs
     * @param {ChatApp.propTypes} props
     */
    constructor(props) {
        super(props);
    }
    
    _onClick() {
        const title = prompt('title ? ');
        ChatRoomActionCreators.createRoom(title);
    }

    componentDidMount() {
        chat.on('user-update', (response) => {
            ChatUserActionCreators
                .setCurrentUser(Immutable.fromJS(response));
        });
    }

    /**
     * Render ChatApp.
     * @returns {ReactElement|XML}
     */
    render() {
        return (
            <div>
                <button onClick={this._onClick}> create a room </button>
                <div className="chatapp">
                    <RoomInfoSection />
                    <MessageSection />
                </div>
            </div>
        );
    }
}

/**
 * Define Properties' type for ChatApp
 */
ChatApp.propTypes = {
};

/**
 * Define Default Props of ChatApp
 */
ChatApp.defaultProps = {
};

export default ChatApp;
