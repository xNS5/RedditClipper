"use strict"

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    try{
        switch(message.action){
            case "paste-link":
                let highlightedText = message.highlightedText;
                let storeTab = message.storeTab;
                let url = storeTab.url;

                document.execCommand('insertText', false, `[${highlightedText?.length > 0 ? highlightedText : storeTab.title}](${url})`);
                break;
        }
    } catch(e){
        console.error("RedditClipper error: ", e);
    }
});
