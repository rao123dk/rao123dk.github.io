// made By Dheeraj Kumar Rao
// Github:- github.com/rao123dk
//twitter:- twitter.com/rao123dk

"use strict"

var displaykeycode =document.getElementById('keycode');
var displaykeychar =document.getElementById('keychar');
document.addEventListener("keydown",function(e){
	var keynum;
	if (window.event) {
        keynum = e.keyCode;
    } else if(e.which) {
        keynum = e.which;
    }
    var keychar = String.fromCharCode(keynum);
    if(keynum ===32){
    	keychar ="Space"
    }else if(keynum ===91){
    	keychar ="Window"
    }
	displaykeycode.innerHTML= keynum;
	displaykeychar.innerHTML= keychar;
	
	if(keynum =>65 && keynum <=90){
		displaykeycode.style.color="red";
	}else{
		displaykeycode.style.color="green";
	}


// prevent
	if((keynum ===83 ||keynum ===68 ||keynum ===65)&& e.ctrlKey){
		e.preventDefault();
		return false;
	}
});

// for ticker
var initial_width=10;
var docwidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

function increment(){	
	initial_width+=2;
	if(initial_width+50>=docwidth) {
	clearInterval(d);
	}
	document.getElementById("myprofile").style.width =initial_width+"px";	
}

var d= setInterval("increment()",10);