import {showNotification} from "../messaging.js";
import {getUser} from "../auth.js";

// const BASE_URI = `${BACKEND_HOST}/api/s3/download`;

export default function home(props) {
    return `
        <header>
            <h1 style="text-align: center">Hello Jalopy!</h1>
        </header>
        <main>
            <div id="img-container">
                <img id="jalopy-img" src="../../assets/jalopy1.jpeg" alt="Jalopy">
            </div>
            <div>
                <p>Welcome to my Jalopy Application!</p> 
            </div>
            <button id="img-btn" class="btn btn-dark">Jalopy</button>
        </main>
    `;
}



export function homeEvents() {
    const imgButton = document.querySelector("#img-btn");
    imgButton.addEventListener("click", function(event) {
        const jalopyImg = document.querySelector("#jalopy-img");
        switch(jalopyImg.getAttribute("src")) {
            case "../../assets/jalopy1.jpeg":
                jalopyImg.setAttribute("src", "../../assets/jalopy2.jpeg")
                break;
            case "../../assets/jalopy2.jpeg":
                jalopyImg.setAttribute("src", "../../assets/jalopy3.jpeg")
                break;
            case "../../assets/jalopy3.jpeg":
                jalopyImg.setAttribute("src", "../../assets/jalopy1.jpeg")
                break;
        }
    })
}