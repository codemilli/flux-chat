/**
 * Created by youngmoon on 2/27/16.
 */

import React from 'react';
import { Container } from 'flux/utils';

import chat from 'firechat';

import RoomInfoStore from '../../infra/room/store';
import MessageStore from '../../infra/message/store';

import MessageComposer from '../components/message/MessageComposer';
import MessageList from '../components/message/MessageList';
import MessageListItem from '../components/message/MessageListItem';
import MessageEmpty from '../components/message/MessageEmpty';

import Message from '../../infra/message/model';
import MessageAction from '../../infra/message/action';

/**
 * Define React Component MessageSection
 */
class MessageSection extends React.Component {

    static getStores() {
        return [
            MessageStore,
            RoomInfoStore
        ];
    }

    static calculateState() {
        return {
            currentID: RoomInfoStore.getCurrent(),
            currentRoom: RoomInfoStore.getCurrentRoom(),
            messages: MessageStore.getCurrentRoomMessages(RoomInfoStore.getCurrent())
        };
    }

    componentDidMount() {
        chat.on('message-add', (roomId, message) => {
            //console.log('message-add => ', roomId, message);
            MessageAction.addMessage(roomId, new Message(message));
        });
    }


    /**
     * Render MessageSection.
     * @returns {ReactElement|XML}
     */
    render() {
        const { currentID, messages } = this.state;

        return (
            currentID && messages.size ?

            <div className="message-section">
                <h3 className="message-thread-heading"></h3>
                <MessageList messages={messages} />
                <MessageComposer currentID={currentID} />
            </div>

            :

            <MessageEmpty currentID={currentID} />
        );
    }
}

/**
 * Define Properties' type for MessageSection
 */
MessageSection.propTypes = {
};

/**
 * Define Default Props of MessageSection
 */
MessageSection.defaultProps = {
};

const MessageSectionContainer = Container.create(MessageSection);
export default MessageSectionContainer;