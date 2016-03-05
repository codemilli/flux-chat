/**
 * Created by youngmoon on 2/27/16.
 */

import React from 'react';
import Immutable from 'immutable';
import { Container } from 'flux/utils';

import chat from 'firechat';
import RoomListItem from '../components/room/RoomListItem';
import Spinner from 'Spinner';

import RoomInfoStore from '../../infra/room/store';
import RoomAction from '../../infra/room/action';

/**
 * Define React Component RoomSection
 */
class RoomInfoSection extends React.Component {

    static getStores() {
        return [
            RoomInfoStore
        ];
    }

    static calculateState() {
        return {
            rooms: RoomInfoStore.getRooms(),
            current: RoomInfoStore.getCurrent(),
            isFetched: RoomInfoStore.getFetchState()
        };
    }

    componentDidMount() {
        chat.getRoomList().then(roomList => {
            RoomAction.getRooms(roomList);
        });

        chat.on('room-enter', data => {
            RoomAction.enterRoom(data.id);
        });

        chat.on('room-added', (data) => {
            console.log('room added => ', data);
        });
    }

    /**
     * Render RoomSection.
     * @returns {ReactElement|XML}
     */
    render() {
        const { rooms, current, isFetched } = this.state;
        const roomListItems = [];

        rooms.mapKeys(key => roomListItems.push(
            <RoomListItem
                id={key}
                key={key}
                current={current}
                room={rooms.get(key)}
            />
        ));

        return (
            <div className="thread-section">
                <div className="thread-count">
                    { rooms.size }
                </div>

                {
                    isFetched ?
                        <ul className="thread-list">
                            { roomListItems }
                        </ul> :
                        <div className="thread-list">
                            <Spinner />
                        </div>
                }


            </div>
        );
    }
}

/**
 * Define Properties' type for RoomSection
 */
RoomInfoSection.propTypes = {
};

/**
 * Define Default Props of RoomSection
 */
RoomInfoSection.defaultProps = {
};

const RoomInfoSectionContainer = Container.create(RoomInfoSection);
export default RoomInfoSectionContainer;
