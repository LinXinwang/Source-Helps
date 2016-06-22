var _Questions = new Array();
var _Addresses = new Array();
var thisbackURL = document.URL;
var _Stringsplit = new Array();

$(function() {
	console.log("加载中。。。。");
	$("#imagequestion").click(function() {
		console.log("图片被点击。。。。");
		var backid = $("#rememberTheId").text();
		console.log("传回来的id是：" + backid);
		var pressdown = document.getElementById("imagequestion");
		if (pressdown.style.display == "block") {
			pressdown.style.display = "none";
		} else {
			pressdown.style.display = "none";
		}
		var pressdown2 = document.getElementById("backimg");
		if (pressdown2.style.display == "none") {
			pressdown2.style.display = "block";
		} else {
			pressdown2.style.display = "block";
		}
		document.getElementById(backid).focus();
	})

});

function showtableinfo() {
	$.ajax({
		type: "get",
		async: true,
		url: "http://tc.skysrt.com/appstore/appstorev3/onlineHelp.html",
		dataType: "jsonp",
		jsonp: "callback",
		jsonpCallback: "receive",
		success: function(data) {
			//alert("success!" + data);
		},
		error: function() {
			alert('fail');
		}
	});
}

function receive(data) {
	for (var i = 0; i < data.data.length; i++) {
		_Questions[i] = data.data[i].question;
		_Addresses[i] = data.data[i].answerList[0];
	}

	for (var i = 0; i < _Questions.length; i++) {
		var _div = '<div title="Questions" onclick="onclickfunc(this)" class="wrap"  id="' + i + '" tabindex="1" style="width: 93%; height: 5.4%; padding-left: 4%; padding-top: 1.5%; padding-bottom: 2.0%; margin-top: 0.5%; overflow: hidden; text-overflow: ellipsis; border: 0px solid black;">' + (i + 1) + '、<nobr title="Detail" id="NO" tabindex="-1" style="width: 50%; font-size:24px;  border: 0px solid black; opacity: 1;">' + _Questions[i] + '<br></div>';
		$("#list-list").append(_div);
	}
	document.getElementById('0').focus();
}

//创建指定div时，对应其id赋给其对应的链接。
function onclickfunc(obj) {
	var _id = obj.id; //$(this).attr("id");
	console.log("---_id-----" + _id + "---_Addresses[_id]----" + _Addresses[_id]);
	var pressdown1 = document.getElementById("imagequestion");
	if (pressdown1.style.display == "none") {
		pressdown1.style.display = "block";
		console.log("-----1------");
	} else {
		console.log("-----2------");
		pressdown1.style.display = "block";
	}
	var pressdown1 = document.getElementById("backimg");
	if (pressdown1.style.display == "block") {
		pressdown1.style.display = "none";
		console.log("-----1------");
	} else {
		console.log("-----2------");
		pressdown1.style.display = "none";
	}

	$("#imagequestion").attr("src", _Addresses[_id]);
	$("#rememberTheId").text(_id);
	console.log("imagequestion address" +imagequestion + "rememberTheId:"+ _id);
};