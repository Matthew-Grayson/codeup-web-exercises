function renderCoffee(coffee) {
    var html = `
                    <div class="card col-2">
                        <div class="card-body">
                            ${input.value}
                        </div>
                        <div class="card-footer">
                            <button class="delete-todo">Delete Todo</button>
                        </div>
                    </div>
    `;
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

var tbody = document.querySelector('#coffees');
tbody.innerHTML = renderCoffees(coffees);
