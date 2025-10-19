"use strict"

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    try{
        switch(message.action){
            case "paste-link":
                let isRedesign = false;
                let activeElement = document.activeElement;
                let highlightedText = message.highlightedText;
                let storeTab = message.storeTab;
                let url = storeTab.url;

                if(activeElement.role === "textbox"){
                    activeElement = document.querySelector('[data-lexical-editor="true"]');
                    isRedesign = true;
                }

                 if(isRedesign){
                    if(highlightedText?.length > 0){
                        document.execCommand('insertText', false, `[${highlightedText}](${url})`);
                    } else {
                        document.execCommand('insertText', false, `[${storeTab.title}](${url})`);
                    }
                 } else {
                    if(highlightedText?.length > 0){
                        activeElement.value = activeElement.value.replace(`${highlightedText}`, `[${highlightedText}](${url})`);
                    } else {
                        activeElement.value = activeElement.value.length > 0 ? (activeElement.value + ` [${storeTab.title}](${url})`) : `[${storeTab.title}](${url})`;
                    }
                }

        }
    } catch(e){
        console.error("RedditClipper error: ", e);
    }
});

