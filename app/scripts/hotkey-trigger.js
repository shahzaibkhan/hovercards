'use strict';

define('hotkey-trigger', ['jquery'], function($) {
    return {
        handle: function(body) {
            body = $(body);
            body.on('keydown', function(e) {
                if (e.which !== 16) {
                    return;
                }
                chrome.runtime.sendMessage({ msg: 'activate' });
            });
        }
    };
});
