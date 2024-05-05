'use strict';

function formatMessage(message, maxLength) {
  if (message.length <= maxLength) {
    return message;
  } else if (message.length > maxLength) {
    let shortenMessage;
    shortenMessage = message.slice(0, maxLength) + "...";
    return shortenMessage
  }
}

console.log(formatMessage("Curabitur ligula sapien", 16));