(function (window, SP) {
    'use strict';

    function check(callback) {
        var error = false;

        if (window._spPageContextInfo && typeof window._spPageContextInfo.isAppWeb !== 'undefined') {
            callback(error, window._spPageContextInfo.isAppWeb);
        } else {
            var clientContext = SP.ClientContext.get_current();
            var web = clientContext.get_web();

            clientContext.load(web);
            clientContext.executeQueryAsync(function (sender, args) {
                callback(error, web.get_webTemplate() === 'APP');
            }, function (sender, args) {
                error = true;

                callback(error);
            });
        }
    }

    var IsAppWeb = {
        check: check
    };

    window.IsAppWeb = IsAppWeb;
})(window, SP);