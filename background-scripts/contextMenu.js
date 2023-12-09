function doCopy(text){
    navigator.clipboard.writeText(text);
}

function doStore(key, value){
    sessionStorage.setItem(key, value);
}

function getFromStore(key){
    return sessionStorage.getItem(key);
}

browser.runtime.onInstalled.addListener(() => {
    browser.contextMenus.create({
        id: "copy-text",
        title: "Copy",
        contexts: ["all"],
        icons: {
            "16": "icons/copy-32.png",
            "32": "icons/copy-32.png",
        }
    });

    browser.contextMenus.create({
        id: "paste-link",
        title: "Paste Link",
        contexts: ["all"],
        icons: {
            "16": "icons/link-16.png",
            "32": "icons/link-32.png",
        }
    })
})

browser.contextMenus.onClicked.addListener((info, tab) => {
    try{
        switch(info.menuItemId){
            case "copy-text":
                let text = "";
                if(info.selectionText){
                    let filtered_arr = info.selectionText.replace(/((\r?\n|\r|\t)\d*)+(\r?\n|\r)/gm, "\n").trim().split("\n");
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
                let storeTab = JSON.parse(getFromStore("rc_stored_tab"));
                browser.tabs.sendMessage(tab.id, { action: "paste-link", storeTab: storeTab, highlightedText: info.selectionText})
                    .catch(error => {
                        console.error("Reddit Clipper", error);
                    });
                break;
        }
    } catch(e){
        console.error("Reddit Clipper", e);
    }

});
