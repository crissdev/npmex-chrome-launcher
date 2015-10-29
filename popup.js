(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function onDomReady() {
        document.removeEventListener('DOMContentLoaded', onDomReady);
        chrome.tabs.create({
            url: 'https://crissdev.github.io/npmex/'
        });
    });
})();
