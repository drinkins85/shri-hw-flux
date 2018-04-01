import sendToServer from './sendToServer';
import log from './log';

function combineReducers() {
  return {
    sendToServer,
    log,
  };
}

export default combineReducers();
