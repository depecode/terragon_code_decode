 const base64 = require('js-base64').Base64;

 const message = 'aHR0cDovL3JlY3J1aXQtaWZlLnRlcnJhZ29uZ3JvdXAuY29tLw=='

//  const decodeMessage = (msg) => {
//      return base64.decode(message);
//  }

const decodeMessage = base64.decode(message);

 console.log(decodeMessage);

