// ==UserScript==
// @name         tset
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==


    (function() {
    'use strict';
    var $ = window.jQuery;
    $(document).on('keyup', function(e) {
        if (e.which == 56) {
            client.mode('image');
            client.lock = true
            toastr.info('ImageMode')
        }
    });
})();

        (function() {
    'use strict';
    var $ = window.jQuery;
    $(document).on('keyup', function(e) {
        if (e.which == 57) {
            client.mode('none');
            client.lock = false
            toastr.info('BrushMode')
        }
    });

})();
  

