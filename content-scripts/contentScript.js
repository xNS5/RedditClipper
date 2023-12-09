browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    try{
        switch(message.action){
            case "paste-link":
                var activeElement = document.activeElement;
                var highlightedText = message.highlightedText;
                var storeTab = message.storeTab;
                var url = storeTab.url;
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

