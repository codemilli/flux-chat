/**
 * Created by youngmoon on 2/27/16.
 */

import Immutable from 'immutable';
import Message from '../message/model';

export default Immutable.Record({
    id: undefined,
    title: '',
    unread: false,
    messages: Immutable.Map(),
    lastMessage: new Message()
});