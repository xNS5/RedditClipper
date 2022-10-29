browser.contextMenus.create({
    id: "copy-text",
    title: "Copy",
    contexts: ["all"]
});

browser.contextMenus.create({
    id: "create-link",
    title: "Link",
    contexts: ["all"]
})

browser.contextMenus.onClicked.addListener((info, tab) => {
    if(info.menuItemId === "copy-text"){
        let text = "";
        if(info.selectionText){
            let filtered_arr = info.selectionText.replace(/((\r?\n|\r|\t)\d*)+(\r?\n|\r)/gm, "\n").trim().split("\n");
            filtered_arr.forEach((string) => {
                text += (`> ${string}\n\n`);
            })
            console.log(info);
        }

        text += `[${text.length > 0 ? "Source" : tab.title}](${tab.url})`;

        navigator.clipboard.writeText(text).then(() => {
            console.log(`Added "${text}" to clipboard`)
        })
    } else if(info.menuItemId === "create-link"){
        navigator.clipboard.readText().then((clipText) => {
            if(info.editable){
            const re = new RegExp('^(https?:\/\/)')
            const selectedText = info.selectionText ? info.selectionText : "";
            const clipboardUrl = re.test(clipText) ? clipText : "";
            console.log(`[${selectedText}](${clipboardUrl})`);
            }
        });

    }

});
