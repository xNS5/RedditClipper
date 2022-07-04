browser.contextMenus.create({
    id: "copy-text",
    title: "Copy",
    contexts: ["all"]
});

browser.contextMenus.onClicked.addListener((info, tab) => {
    var text = "";
    var curr_tab = {...tab};
    var curr_info = {...info};
    if(curr_info.selectionText){
        var filtered_arr = curr_info.selectionText.replace(/((\r?\n|\r|\t)\d*)+(\r?\n|\r)/gm, "\n").trim().split("\n");
        filtered_arr.forEach((string) => {
            text += (`> ${string}\n\n\n`);
        })
    }

    text += `[${text.length > 0 ? "Source" : curr_tab.title}](${escapeHTML(curr_tab.url)})`;

    navigator.clipboard.writeText(text).then(() => {
        console.log(`Added "${text}" to clipboard`)
    })
});


function escapeHTML(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;").replace(/'/g, "&#39;")
        .replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
