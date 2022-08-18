

async function addToClipboard(text){

}


document.addEventListener('keydown', e => {
    if( (e.ctrlKey || e.metaKey) && e.key === 's'){
        e.preventDefault();
        console.log("Saved!");
    }
})
