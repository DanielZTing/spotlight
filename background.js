chrome.commands.onCommand.addListener(command => {
    if (command === 'launch') {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {});
        });
    }
});
