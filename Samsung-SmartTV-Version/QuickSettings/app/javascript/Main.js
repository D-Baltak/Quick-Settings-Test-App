var widgetAPI = new Common.API.Widget();

var Main = {

};

Main.onLoad = function() {
	this.enableKeys();
	widgetAPI.sendReadyEvent();
};

Main.onUnload = function() {

};

Main.enableKeys = function() {
	document.getElementById("anchor").focus();
};
