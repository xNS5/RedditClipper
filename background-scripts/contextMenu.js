"use strict"

browser.contextMenus.create({
    id: "copy-text",
<<<<<<< HEAD
    title: "Copy",
    contexts: ["all"],
    icons: {
        "16": "icons/copy-32.png",
=======
    title: "Copy Text",
    contexts: ["all"],
    icons: {
        "16": "icons/copy-16.png",
>>>>>>> 1.2.0
        "32": "icons/copy-32.png",
    }
});

browser.contextMenus.create({
<<<<<<< HEAD
    id: "paste-link",
    title: "Paste Link",
=======
    id: "copy-link",
    title: "Copy Link", 
>>>>>>> 1.2.0
    contexts: ["all"],
    icons: {
        "16": "icons/link-16.png",
        "32": "icons/link-32.png",
    }
<<<<<<< HEAD
})
=======
});

browser.contextMenus.create({
    id: "paste-link",
    title: "Paste Link", 
    contexts: ["all"],
    icons: {
        "16": "icons/paste-16.png",
        "32": "icons/paste-32.png",
    }
});
>>>>>>> 1.2.0


function doCopy(text){
    navigator.clipboard.writeText(text);
}

function doStore(key, value){
    sessionStorage.setItem(key, value);
}

function getFromStore(key) {
    return sessionStorage.getItem(key);
}

browser.contextMenus.onClicked.addListener((info, tab) => {
    try{
        switch(info.menuItemId){
            case "copy-text":
                let text = "";
                if(!info.selectionText) {
                    console.log("No highlighted text, skipping...");
                    return
                };
                
                let filtered_arr = info.selectionText.replace(/((\r?\n|\r|\t)\d*)+(\r?\n|\r)/gm, "\n").trim().split("\n");
                filtered_arr.forEach((string) => {
                    text += (`> ${string}\n\n`);
                })

                text += `[Source](${tab.url})`;
            
                navigator.clipboard.writeText(text).then(async () => {
                   console.log("Copied text to clipboard...");
                }, (err) => {
                    console.error("You haven't granted RedditClipper Clipboard or Tab permissions.", err);
                })

                doCopy(text);
                doStore("rc_stored_tab", JSON.stringify({
                    title: tab.title,
                    url: tab.url
                }));
                break;
            case "copy-link":
                doCopy(`[${tab.title}](${tab.url})`)
                doStore("rc_stored_tab", JSON.stringify(tab))
                break;
            case "paste-link":
                let storeTab = JSON.parse(getFromStore("rc_stored_tab"));
                browser.tabs.sendMessage(tab.id, { action: "paste-link", storeTab: storeTab, highlightedText: info.selectionText})
                    .catch(error => {
                        console.error("Reddit Clipper Error: ", error);
                    });
                break;
        }
    } catch(e){
        console.error("Reddit Clipper", e);
    }
});
