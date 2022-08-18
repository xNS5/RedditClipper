

async function addToClipboard(text){
    var clipboard = document.getElementById("text-area");
    clipboard.innerText = text;
}

function notifyUser(text){
    var snackbar = document.getElementById("snackbar");
    snackbar.textContent = text;
    snackbar.className = "show";
    setTimeout(() => {
        snackbar.className = snackbar.className.replace("show", "")
    }, 3000);
}

document.addEventListener('keydown', e => {
    if( (e.ctrlKey || e.metaKey) && e.key === 's'){
        e.preventDefault();
        const text = document.getElementById("text-area").innerText;
        navigator.clipboard.writeText(text).then(() => {
            notifyUser("Saved text to clipboard.")
        })
    }
})
