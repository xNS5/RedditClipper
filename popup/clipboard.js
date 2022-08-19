const actionObj = {
    bold : 0,
    ital : 1,
    strike : 2,
    quote : 3,
    link : 4,
    clear : 5,
}

let formatPane = undefined;
let manifest = undefined;
document.addEventListener('DOMContentLoaded', e =>{
    if(formatPane === undefined){
        formatPane = document.getElementById('text-formatting-pane');
    }

    if(manifest === undefined){
        manifest = browser.runtime.getManifest();
        document.getElementById('title').innerHTML= `<a href=${manifest.homepage_url}>${manifest.name}</a>`;
        document.getElementById('version').textContent = `v${manifest.version}`;
    }

    formatPane?.addEventListener('mousedown', e => {
        var action = actionObj[e.target?.id]
        clipboardController(action >= 0 ? action : -1);
    })

})

document.addEventListener('keydown', e => {
    if( (e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'c')){
        e.preventDefault();
        const text = document.getElementById("text-area").innerText;
        navigator.clipboard.writeText(text).then(() => {
            notifyUser("Saved text to clipboard.")
        })
    }
})

function clipboardController(action){
    switch(action){
        case 0:
            bold();
            break;
        case 1:
            console.log("italics");
            break
        case 2:
            console.log("strikethrough");
            break;
        case 3:
            console.log("quote")
            break;
        case 4:
            console.log("link")
            break;
        case 5:
            clear()
            break;
    }
}

function addToClipboard(text){}

function bold(){
    console.log(window.getSelection()?.toString());
}

function italics(){}

function strikethrough(){}

function quote(){}

function link(){}

function clear(){
    document.getElementById('text-area').textContent = "";
    navigator.clipboard.writeText("").then( () => {
        console.log("Clipboard Cleared")
    })
}
