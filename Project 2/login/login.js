
const loginForm = document.getElementById("loginForm");

const loginPage = document.getElementById("loginPage");

const transitionScreen =
    document.getElementById("transitionScreen");

const terminalText =
    document.getElementById("terminalText");

const welcome =
    document.getElementById("welcome");

const errorMessage =
    document.getElementById("errorMessage");


// DEMONSTRATION LOGIN CREDENTIALS

const validUsername = "Administrator";
const validPassword = "SCP-ACCESS-1962";


// LOGIN FORM

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const username =
        document.getElementById("username").value;

    const password =
        document.getElementById("password").value;


    // CHECK LOGIN DETAILS

    if (
        username === validUsername &&
        password === validPassword
    ) {

        errorMessage.textContent = "";

        startFoundationTransition();

    } else {

        errorMessage.textContent =
            "ACCESS DENIED: INVALID PERSONNEL CREDENTIALS.";

    }

});


// FOUNDATION TRANSITION

async function startFoundationTransition() {

    // Hide login page

    loginPage.style.display = "none";


    // Activate black screen

    transitionScreen.classList.add("active");


    // Terminal messages

    const messages = [

        "> Establishing secure connection...",

        "> NISR personnel credentials accepted.",

        "> Verifying administrative clearance...",

        "> Clearance verification successful.",

        "> Connecting to Foundation network...",

        "> Secure connection established.",

        "> Redirecting to classified personnel network..."

    ];


    // Display messages one after another

    for (let message of messages) {

        const line = document.createElement("p");

        line.classList.add("terminal-line");

        line.textContent = message;

        terminalText.appendChild(line);

        await new Promise(resolve =>
            setTimeout(resolve, 850)
        );

    }


    // Pause before welcome message

    await new Promise(resolve =>
        setTimeout(resolve, 1000)
    );


    // Display welcome message

    welcome.classList.add("show");


    // Wait before redirecting

    await new Promise(resolve =>
        setTimeout(resolve, 3500)
    );


    // Redirect to the SCP Foundation Wiki

    window.location.href =
        "dashboard/dashboard.html";

}
