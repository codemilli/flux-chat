/**
 * Created by youngmoon on 2/27/16.
 */

import React from 'react';
import classnames from 'classnames';

import ChatRoomActionCreator from '../../../infra/room/action';

/**
 * Define React Component RoomListItem
 */
class RoomListItem extends React.Component {

    /**
     * Constructor for RoomListItem
     * @constructs
     * @param {RoomListItem.propTypes} props
     */
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps) {
        const { id, room, current } = this.props;
        const nId = nextProps.id;
        const nCurrent = nextProps.current;
        const nRoom = nextProps.room;

        return id !== nId || room !== nRoom || current !== nCurrent;
    }

    /**
     * Render RoomListItem.
     * @returns {ReactElement|XML}
     */
    render() {
        const { id, room, current } = this.props;
        const date = new Date(room.get('createdAt'));
        const lastMessage = room.get('lastMessage') && room.get('lastMessage').get('message');

        return (
            <li
                className={classnames({
                    'thread-list-item': true,
                    'active': id === current
                })}
                onClick={() => ChatRoomActionCreator.clickRoom(id, current)}>

                <h5 className="thread-name">{room.get('name')}</h5>
                <div className="thread-time">
                    { date.toDateString() }
                </div>
                <div className="thread-last-message">
                    { lastMessage }
                </div>
            </li>
        );
    }
};

/**
 * Define Properties' type for RoomListItem
 */
RoomListItem.propTypes = {
};

/**
 * Define Default Props of RoomListItem
 */
RoomListItem.defaultProps = {
};

export default RoomListItem;
