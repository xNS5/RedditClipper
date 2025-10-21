"use strict"

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    try{
        switch(message.action){
            case "paste-link":
                let highlightedText = message.highlightedText;
                const { title, url } = message.storeTab;

                document.execCommand('insertText', false, `[${highlightedText?.length > 0 ? highlightedText : title}](${url})`);
                break;
        }
    } catch(e){
        console.error("RedditClipper error: ", e);
    }
});
