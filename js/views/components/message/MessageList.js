/**
 * Created by youngmoon on 3/4/16.
 */

import React from 'react';
import Immutable from 'immutable';

import MessageListItem from './MessageListItem';

/**
 * Define React Component MessageList
 */
class MessageList extends React.Component {

    /**
     * Constructor for MessageList
     * @constructs
     * @param {MessageList.propTypes} props
     */
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        const node = this.refs.messageList;
        node.scrollTop = node.scrollHeight;
    }

    /**
     * Render MessageList.
     * @returns {ReactElement|XML}
     */
    render() {
        const { messages } = this.props;
        const messageList = [];

        if (messages) {
            messages.map(message => messageList.push(
                <MessageListItem
                    key={message.get('id')}
                    message={message} />)
            );
        }

        return (
            <ul className="message-list" ref="messageList">
                { messageList }
            </ul>
        );
    }
}

/**
 * Define Properties' type for MessageList
 */
MessageList.propTypes = {
};

/**
 * Define Default Props of MessageList
 */
MessageList.defaultProps = {
};

export default MessageList;
