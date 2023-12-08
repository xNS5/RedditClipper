browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    switch(message.action){
        case "paste-link":
            var activeElement = document.activeElement;
            var highlightedText = message.highlightedText;
            var storeTab = message.storeTab;
            var url = storeTab.url;
            if(highlightedText.length > 0){
                activeElement.value = activeElement.value.replace(`${highlightedText}`, `[${highlightedText}](${url})`);
            } else {
                activeElement.value += ` [${storeTab.title}](${url})`
            }
            break;
    }
});