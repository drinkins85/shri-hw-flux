import * as sendToServerActions from './sendToServerActions';
import * as logActions from './logActions';

function combineActions() {
  return {
    sendToServer: sendToServerActions,
    log: logActions,
  };
}

export default combineActions();
