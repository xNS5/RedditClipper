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
            text += (`> ${string}\n\n`);
        })
    }

    text += `[${text.length > 0 ? "Source" : curr_tab.title}](${curr_tab.url})`;
    navigator.clipboard.writeText(text);
});