// chrome.topSites.get(function(res){
		//getting list top sites visited
// 	console.log(res);
// })
chrome.runtime.onInstalled.addListener(function() {
    // open a new tab after installing :)
    chrome.tabs.create({
        active: true
    });
    // chrome.browserAction.onClicked.addListener(function(tab) {
    //     chrome.tabs.create({ url: "https://app.aureal.one" });
    // });
})