var app = {
	canonical_uri: function(src, base_path) {
		var root_page = /^[^?#]*\//.exec(location.href)[0],
			root_domain = /^\w+\:\/\/\/?[^\/]+/.exec(root_page)[0],
			absolute_regex = /^\w+\:\/\//;
		// is `src` is protocol-relative (begins with // or ///), prepend protocol  
		if (/^\/\/\/?/.test(src)) {
			src = location.protocol + src;
		}
		// is `src` page-relative? (not an absolute URL, and not a domain-relative path, beginning with /)  
		else if (!absolute_regex.test(src) && src.charAt(0) != "/") {
			// prepend `base_path`, if any  
			src = (base_path || "") + src;
		}
		// make sure to return `src` as absolute  
		return absolute_regex.test(src) ? src : ((src.charAt(0) == "/" ? root_domain : root_page) + src);
	},

	rel_html_imgpath: function(iconurl) {
		console.log(app.canonical_uri(iconurl.replace(/.*\/([^\/]+\/[^\/]+)$/, '$1')));
		return app.canonical_uri(iconurl.replace(/.*\/([^\/]+\/[^\/]+)$/, '$1'));
	},

	// Application Constructor
	initialize: function() {
		this.bindEvents();
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents: function() {
		document.addEventListener('backimg', this.onDeviceReady, false);
		document.addEventListener("backbutton", this.handleBackButton, false);
	},
	handleBackButton: function() {
		console.log("Back Button Pressed!");
		var countflag = 0;
		var backdown2 = document.getElementById("backimg");
		console.log("--------pressdown---------" + backdown2);
		if (backdown2.style.display == "none") {
			backdown2.style.display = "block";
		} else {
			backdown2.style.display = "block";
		}
		var backdown = document.getElementById("imagequestion");
		if (backdown.style.display == "block") {
			backdown.style.display = "none";
			countflag++;
		} else {
			backdown.style.display = "none";
		}
		
		console.log("---------countflag----------"+countflag);
		if (countflag == 0) {
			navigator.app.exitApp();
		} else{
			var backnumid = $("#rememberTheId").text();
			document.getElementById(backnumid).focus();
			console.log("---------countflag two----------"+countflag);
		}
		//navigator.app.exitApp();
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicitly call 'app.receivedEvent(...);'
	onDeviceReady: function() {
		app.receivedEvent('backimg');
		app.triggleButton();

	},
	// Update DOM on a Received Event
	receivedEvent: function(id) {
		var parentElement = document.getElementById(id);
		// var listeningElement = parentElement.querySelector('.listening');
		var receivedElement = parentElement.querySelectorAll('.received');

		// listeningElement.setAttribute('style', 'display:none;');
		for (var i = 0, j = receivedElement.length; i < j; i++) {
			receivedElement[i].setAttribute('style', 'display:block;');
		}
		/*receivedElement.setAttribute('style', 'display:block;');*/
		// document.getElementById('button1').focus();
		console.log('Received Event: ' + id);
	},
	triggleButton: function() {
		cordova.require("coocaa-plugin-coocaaosapi.coocaaosapi");
	}
};

app.initialize();