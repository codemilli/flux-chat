/**
 * Created by youngmoon on 3/2/16.
 */

import React from 'react';
import MessageComposer from './MessageComposer';

/**
 * Define React Component MessageEmpty
 */
class MessageEmpty extends React.Component {

    /**
     * Constructor for MessageEmpty
     * @constructs
     * @param {MessageEmpty.propTypes} props
     */
    constructor(props) {
        super(props);

        this._NoRoomEntered = ' Please Enter the chat room. ';
        this._NoMessages = ' No Messages Found. ';
    }

    /**
     * Render MessageEmpty.
     * @returns {ReactElement|XML}
     */
    render() {
        const { currentID } = this.props;
        let errorMessage = this._NoMessages;

        if (!currentID) {
            errorMessage = this._NoRoomEntered;
        }

        return (
            <div className="message-section">
                <h3 className="message-thread-heading"> {errorMessage} </h3>
                <div className="message-list no-messages">
                </div>
                { currentID && <MessageComposer currentID={currentID} /> }
            </div>
        );
    }
}

/**
 * Define Properties' type for MessageEmpty
 */
MessageEmpty.propTypes = {
};

/**
 * Define Default Props of MessageEmpty
 */
MessageEmpty.defaultProps = {
};

export default MessageEmpty;
