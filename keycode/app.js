// made By Dheeraj Kumar Rao
// Github:- github.com/rao123dk
//twitter:- twitter.com/rao123dk
// made with love by Rao.js library(<script src="https://cdn.rawgit.com/rao123dk/Rao.js/0ac3dd7a/rao.js"></script>)

"use strict"
var displaykeycode = rao('#keycode'); 
var displaykeychar = rao('#keychar'); 
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
	displaykeycode.text(keynum);
	displaykeychar.text(keychar);
	
	if(keynum =>65 && keynum <=90){
		//displaykeycode.style.color="red";
		displaykeycode.attri("class","redcolor");
	}else{
		//displaykeycode.style.color="greencolor";
		displaykeycode.attri("class","greencolor");
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