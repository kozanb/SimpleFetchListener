function fetchListener(callback) {
    var originalFetch = window.fetch;

    window.fetch = function () {
        var fetch = originalFetch.apply(this, arguments);
        var url = '';

        fetch.then(function (Response) {
            Response = Response.clone();
            url = Response.url || '';

            return Response.text();
        }).then(function (responseBody) {
            callback(url, responseBody);
        });

        return fetch;
    };
}



fetchListener(function (url, response) {
  console.log(url, response);
})