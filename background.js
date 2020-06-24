function maybeClose(tabId, changeInfo, tab) {
	if (tab.url.match(/https:\/\/([a-z]+).zoom.us\/(?:postattendee|j)/) && (tab.url.includes('/postattendeee/') || tab.url.includes('status=success') || tab.url.includes('#success'))) {
		setTimeout(function() {
			browser.tabs.remove(tab.id);
		}, 2000);
	}
}

browser.tabs.onUpdated.addListener(maybeClose);
