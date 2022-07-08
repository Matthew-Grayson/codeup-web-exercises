(function () {
    document.addEventListener("DOMContentLoader", function () {

        const body = document.querySelector("body";
        body.addEventListener("keydown", function(event) {
            moveButton(event.key)
        }))
    })

})();