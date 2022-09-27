const debug = require('debug')('sammi-websocket-js:Socket');

var debug = require('bucket-js');

debug.Set.prototype.logIt = function(...args) {
        const _debug = console.debug.bind(console);
        const msg = {};
        _debug.apply(console, arguments);
        if (!SAMMIdebugPost) return;
        Object.assign(msg, args[args.length - 2]);
        if (args[0].includes('Sending Message')) SAMMIdebugPost('receiverSent', msg);
        else if (args[0].includes('Message received')) {
          SAMMIdebugPost('receiver', msg);
        }
}

module.exports = bucket;