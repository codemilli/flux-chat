/**
 * Created by youngmoon on 2/27/16.
 */

import React from 'react';

/**
 * Define React Component MessageListItem
 */
class MessageListItem extends React.Component {

    /**
     * Constructor for MessageListItem
     * @constructs
     * @param {MessageListItem.propTypes} props
     */
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.message !== this.props.message;
    }

    /**
     * Render MessageListItem.
     * @returns {ReactElement|XML}
     */
    render() {
        const { message } = this.props;
        const date = new Date(message.get('timestamp'));

        //console.log('item rendered');

        return (
            <li className="message-list-item">
                <h5 className="message-author-name">{message.get('name')}</h5>
                <div className="message-time">
                    { date.toLocaleString() }
                </div>
                <div className="message-text">{ message.get('message') }</div>
            </li>
        );
    }
}

/**
 * Define Properties' type for MessageListItem
 */
MessageListItem.propTypes = {
};

/**
 * Define Default Props of MessageListItem
 */
MessageListItem.defaultProps = {
};

export default MessageListItem;
