browser.contextMenus.create({
    id: "parent",
    title: "RedditClipper"
});

browser.contextMenus.create({
    id: "copy-text",
    title: "Copy",
    parentId: "parent",
    contexts: ["all"],
    icons: {
        "16": "icons/copy-16.png",
        "32": "icons/copy-32.png"
    }
});

browser.contextMenus.create({
    id: "paste-link",
    title: "Paste Link",
    parentId: "parent",
    contexts: ["all"],
    icons: {
        "16": "icons/paste-16.png",
        "32": "icons/paste-32.png",
    }
})

function doCopy(text){
    navigator.clipboard.writeText(text);
}

function doStore(key, value){
    localStorage.setItem(key, value);
}

function getFromStore(key){
    return localStorage.getItem(key);
}

browser.contextMenus.onClicked.addListener( (info, tab) => {
    switch(info.menuItemId){
        case "copy-text":
            var text = "";
            if(info.selectionText){
                var filtered_arr = info.selectionText.replace(/((\r?\n|\r|\t)\d*)+(\r?\n|\r)/gm, "\n").trim().split("\n");
                filtered_arr.forEach((string) => {
                    text += (`> ${string}\n\n`);
                })
            }
            text += `[${text.length > 0 ? "Source" : tab.title}](${tab.url})`;
            doStore("rc_copied_text", text);
            doStore("rc_stored_tab", JSON.stringify(tab));
            doCopy(text);
            break;
        case "paste-link":
            var storeTab = JSON.parse(getFromStore("rc_stored_tab"));
            browser.tabs.sendMessage(tab.id, { action: "paste-link", storeTab: storeTab, highlightedText: info.selectionText})
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.error("Error sending message to content script:", error);
                });
            break;
    }


});
