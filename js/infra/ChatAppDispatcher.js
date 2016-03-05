/**
 * Created by youngmoon on 2/26/16.
 */

import { Dispatcher } from 'flux';

const instance = new Dispatcher();

export default instance;
export const dispatch = instance.dispatch.bind(instance);
