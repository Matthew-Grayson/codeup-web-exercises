(function () {
    document.addEventListener("DOMContentLoader", function () {

        const body = document.querySelector("body";
        body.addEventListener("keydown", function(event) {
            moveButton(event.key)
        }))
    })
    button.style.top = 0px;
    function moveButton(whichKey) {
        const button = document.querySelector("#b1");
        if(whichKey === "w") {
            button.style.top--;
        } else if(whichKey === "s") {
            button.style.top++;
        }
    }
})();