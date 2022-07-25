let quotes = [
    {
        quote: "War is organized murder and torture against our brothers.",
        author: "Alfred Adler"
    },
    {
        quote: "Follow sound business trends, not fashion trends.",
        author: "Janice Dickinson"
    },
    {
        quote: "I'm sure we, the American people, are the butt of jokes by those in power.",
        author: "Alice Walker"
    },
    {
        quote: "If the security forces continue to be dominated as they are now by political groups or sects, then the people won't trust in them - and the result will be civil war or fragmentation of the country.",
        author: "Adnan Pachachi"
    },
    {
        quote: "We prefer world law in the age of self-determination to world war in the age of mass extermination.",
        author: "John F. Kennedy"
    },
    {
        quote: "I got a lovely check today from being a writer that I earned by sitting at home. That's rewarding.",
        author: "Harvey Fierstein"
    },
    {
        quote: "I think God's justice is making wrongs right.",
        author: "Joel Osteen"
    },
    {
        quote: "For it is mutual trust, even more than mutual interest that holds human associations together. Our friends seldom profit us but they make us feel safe. Marriage is a scheme to accomplish exactly that same end.",
        author: "H. L. Mencken"
    },
    {
        quote: "If science fiction is the mythology of modern technology, then its myth is tragic.",
        author: "Ursula K. Le Guin"
    },
    {
        quote: "Men, when they fight in movies, it's a very different style. Harrison Ford was so cool when he had the whip, and Bruce Lee was such an artist that you couldn't take your eyes off of him.",
        author: "Lucy Liu"
    },
    {
        quote: 'Come on, bro, taking pain is easy. You just have to imagine that every bruise is a hickey from the universe. And everyone wants to get with the universe.',
        author: 'Finn Mertens'
    },
    {
        quote: 'Check, puh-lease.',
        author: 'Shelby'
    },
    {
        quote: 'I know that look. You... just killed someone.',
        author: 'BMO'
    }
]

export default function quotesView(props) {
    // language=HTML
    console.log(props.quotes);
    quotes = props.quotes
    return `
        <header>
            <h1 style="text-align: center">Quotes Page</h1>
        </header>
        <div class="container row">
            <div class="container col-9">
                <div id="my-quotes" class="container row"></div>
            </div>
            <div class="container col-3">
                <h4>Add a Quote</h4>
                <form>
                    <div class="mb-2">
                        <label for="quote-add">Quote</label>
                        <textarea type="text" class="form-control" id="quote-add" rows="7"></textarea>
                    </div>
                    <div class="mb-2">
                        <label for="author-add">Author</label>
                        <input type="text" class="form-control" id="author-add">
                    </div>
                    <div id="quote-btn" class="d-grid gap-2">
                        <button class="btn btn-secondary" style="background-color: darkslategrey">Add Quote</button>
                    </div>
                </form>
            </div>
        </div>
    `;
}

export function quotesEvents() {
    const quoteBtn = document.querySelector("#quote-btn")
    quoteBtn.addEventListener('click', addQuote)
    let quoteBody = document.querySelector("#my-quotes")
    let quotesHTML = '';
    quotes.forEach(function(elem) {
        quotesHTML += `
            <div class="container col-4 p-3">
                    <h5 style="font-style: italic">"${elem.quote}"</h5>
                <h6>-${elem.author}</h6>
            </div>  
`
    })
    quoteBody.innerHTML =  quotesHTML;
}

export function addQuote() {
    const quoteAdd = document.querySelector("#quote-add");
    const authorAdd = document.querySelector("#author-add");
    if(quoteAdd.value.trim().length === 0) {
        return alert
    }
    quotes.push({quote: quoteAdd.value, author: authorAdd.value});
    quotesEvents();
}