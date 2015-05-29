(function (window, IsAppWeb) {
    IsAppWeb.check(function (error, isAppWeb) {
        if (error) {
            $('#is-app-web').html('Something is wrong.');
        } else {
            $('#is-app-web').html('Current web <strong>' + (isAppWeb ? 'is' : 'is not') + '</strong> an app web.');
        }
    });
})(window, IsAppWeb);