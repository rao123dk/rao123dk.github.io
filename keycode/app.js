//@@ made By Dheeraj Kumar Rao
//@@ Github:- github.com/rao123dk
//@@ twitter:- twitter.com/rao123dk
//@@ made by Rao.js library(https://github.com/rao123dk/Rao.js)

"use strict"
var key_code_value = {
	"112": "F1",
	"113": "F2",
	"114": "F3",
	"115": "F4",
	"116": "F5",
	"117": "F6",
	"118": "F7",
	"119": "F8",
	"120": "F9",
	"121": "F10",
	"122": "F11",
	"123": "F12",
	"91": "Windows",
	"32": "Space",
	"27": "Esc",
	"8": "Backspace",
	"189": "Dash",
	"187": "Equal",
	"220": "Back slash",
	"13": "Enter",
	"222": "single quote",
	"186": "Semi colon",
	"190": "Period/Dot",
	"191": "Forward slash",
	"188": "Comma",
	"16": "Shift",
	"20": "caps lock",
	"9": "Tab",
	"192": "grave accent",
	"17": "ctrl",
	"18": "alt",
	"93": "Windows menu",
	"37": "Left Arrow",
	"38": "Up Arrow",
	"39": "Right Arrow",
	"40": "Down Arrow",
	"45": "Insert",
	"46": "Delete",
	"33": "Page Up",
	"34": "Page Down",
	"35": "End",
	"36": "Home",
	"144": "Num lock",
	"111": "Divide",
	"106": "Multiply",
	"109": "Subtract",
	"107": "add",
	"12": "Clear",
	"219": "Open bracket ",
	"221": "Close bracket"
};

var displaykeycode = rao('#keycode');
var displaykeychar = rao('#keychar');
document.addEventListener("keydown", function (e) {
	var keynum;
	if (window.event) {
		keynum = e.keyCode;
	} else if (e.which) {
		keynum = e.which;
	}
	var keychar = String.fromCharCode(keynum);
	if (key_code_value[keynum]) {
		keychar = key_code_value[keynum];
		e.preventDefault();
	}
	displaykeycode.text(keynum);
	displaykeychar.text(keychar);

	if (keynum => 65 && keynum <= 90) {
		displaykeycode.attri("class", " ");
		displaykeycode.attri("class", "redcolor");
	} else {
		displaykeycode.attri("class", " ");
		displaykeycode.attri("class", "greencolor");
	}

	trackUserAction(e, keynum);
	// prevent
	if ( e.ctrlKey && (keynum === 83 || keynum === 68 || keynum === 65) ) {
		//e.preventDefault();
		//return false;
	}
});

// for ticker
// var initial_width = 10;
// var docwidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

// function increment() {
// 	initial_width += 2;
// 	if (initial_width + 50 >= docwidth) {
// 		clearInterval(d);
// 	}
// 	document.getElementById("myprofile").style.width = initial_width + "px";
// }

// var d = setInterval("increment()", 10);


var str_arr = 'Press Any key →'.split('');
var str_index = 0;
var temp_str='';
function typing() {
	if(str_index === str_arr.length-1){
		clearInterval(kk);
	}
	temp_str +=str_arr[str_index];
	rao('#welcome').text(temp_str + "|");
	str_index++;
}

var kk = setInterval("typing()", 500);
document.write("<script>console.log('%c Thanks! If you found any problem, please give me your valuable feedback -> edx.dheerajrao@gmail.com . ', 'background:#1a59bf; font-size:30px;');</script>");
