# IsAppWeb
Check if current web is an app web in SharePoint.

# Usage
```js
IsAppWeb.check(function (error, isAppWeb) {
    if (isAppWeb)  {
        // Do something ...
    }
});
```

# Test
You can install the app under `Test` folder. The app includes two pages, `Default.aspx` and `Default.html`. By visiting `Default.aspx`, the code detects that `window._spPageContextInfo` is available, and checks `window._spPageContextInfo.isAppWeb`. But in `Default.html`, `window._spPageContextInfo` is not available, so it triggers a query to current web to check if `web.get_webTemplate() === 'APP'`.

# License
MIT.
