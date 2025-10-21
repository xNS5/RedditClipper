"use strict"

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    try{
        console.log("message");
        switch(message.action){
            case "paste-link":

                if(document.activeElement === undefined) return;

                
                let isRedesign = false;
                let activeElement = document.activeElement;
                let highlightedText = message.highlightedText;
                let storeTab = message.storeTab;
                let url = storeTab.url;

                if(activeElement.role === "textbox"){
                    activeElement = document.querySelector('[data-lexical-editor="true"]');
                    isRedesign = true;
                }

                const insertText = (text) => {
                    if(isRedesign){
                        document.execCommand('insertText', false, text);
                    } else {
                        const activeText = activeElement.value;
                        activeElement.value = activeText.includes(highlightedText) 
                                ? activeText.replace(highlightedText, text) 
                                : (activeText.length > 0 ? activeText + ' ' + text : text);
                    }
                }

                const urlText = `[${highlightedText?.length > 0 ? highlightedText : storeTab.title}](${url})`;
                insertText(urlText);

                break;
        }
    } catch(e){
        console.error("RedditClipper error: ", e);
    }
});
