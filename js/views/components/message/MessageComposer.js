/**
 * Created by youngmoon on 2/27/16.
 */

import React from 'react';

import ChatMessageActionCreators from '../../../infra/message/action';

/**
 * Define React Component MessageComposer
 */
class MessageComposer extends React.Component {

    /**
     * Constructor for MessageComposer
     * @constructs
     * @param {MessageComposer.propTypes} props
     */
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
    }

    _onChange(e) {
        this.setState({text: e.target.value});
    }

    _onKeyDown(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            var text = this.state.text.trim();
            if (text) {
                ChatMessageActionCreators.createMessage(text, this.props.currentID);
            }
            this.setState({text: ''});
        }
    }

    /**
     * Render MessageComposer.
     * @returns {ReactElement|XML}
     */
    render() {
        return (
            <input
                autoFocus={true}
                className="message-composer"
                type="text"
                name="message"
                value={this.state.text}
                onChange={this._onChange.bind(this)}
                onKeyDown={this._onKeyDown.bind(this)}
            />
        );
    }
};

/**
 * Define Properties' type for MessageComposer
 */
MessageComposer.propTypes = {
};

/**
 * Define Default Props of MessageComposer
 */
MessageComposer.defaultProps = {
};

export default MessageComposer;
