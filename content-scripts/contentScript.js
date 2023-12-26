browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    try{
        switch(message.action){
            case "paste-link":
                let activeElement = document.activeElement;
                let highlightedText = message.highlightedText;
                let storeTab = message.storeTab;
                let url = storeTab.url;
                if(activeElement.type === "textarea" || activeElement.type === "text"){
                    if(highlightedText?.length > 0){
                        activeElement.value = activeElement.value.replace(`${highlightedText}`, `[${highlightedText}](${url})`);
                    } else {
                        activeElement.value = activeElement.value.length > 0 ? (activeElement.value + ` [${storeTab.title}](${url})`) : `[${storeTab.title}](${url})`;
                    }
                }
                break;
        }
    } catch(e){
        console.error("RedditClipper error: ", e);
    }
});

