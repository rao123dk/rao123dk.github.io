
function html_template(keynum){
 return  temp_html =
        `<p><i class="em em-cool"></i> Already Disabled by this code!  <i class="em em-cool"></i> </p>

        <code>
        if(e.ctrlKey && e.keyCode === ${keynum} ){
            e.preventDefault();
		    return false;
        }
        </code>
 `;
}
function trackUserAction(e, keynum){
    //for ctrl + S
    if(e.ctrlKey && keynum ){
        rao('#track_code').html(html_template(keynum));
        copyToClipBoard();
        e.preventDefault();
		return false;
    }
    //for ctrl + W
    if(e.ctrlKey && keynum === 87 ){
        temp_html =
        `<p><i class="em em-cool"></i> Already Disabled by this code!  <i class="em em-cool"></i> </p>

        <code>
        window.onbeforeunload = function () {
            return "Really want to quit ?";
        };
        </code>
 `;
        rao('#track_code').html(temp_html);
        copyToClipBoard();
        e.preventDefault();
		return false;
    }
    // ctrl + t
    if(e.ctrlKey && keynum === 84) {
        e.preventDefault();
        return false;
    }
}

//for right click
document.addEventListener("contextmenu", function (e) {
    var temp_html =
`<p><i class="em em-cool"></i> Already Disabled by this code!  <i class="em em-cool"></i> </p>

<code>
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
}, false);
</code>
`;
    rao('#track_code').html(temp_html);
    e.preventDefault();
}, false);


//for drag and drop
document.addEventListener("dragstart", function(e){
    var temp_html =
`<p><i class="em em-cool"></i> Already Disabled by this code!  <i class="em em-cool"></i> </p>
<code>
document.addEventListener("dragstart", function(e){
    e.preventDefault();
    return false;
});
</code>
`;
    rao('#track_code').html(temp_html);
    e.preventDefault();
    return false;
});

document.addEventListener("drop", function(e){
    var temp_html =
`<p><i class="em em-cool"></i> Already Disabled by this code!  <i class="em em-cool"></i> </p>
<code>
document.addEventListener("drop", function(e){
    e.preventDefault();
    return false;
});
</code>
`;
    rao('#track_code').html(temp_html);
    e.preventDefault();
    return false;
});


function copyToClipBoard(){
    var $temp ='<input type="hidden" id="hiden" value="">';
    rao("#body").append($temp);
    //document.getElementById(hiden).value = rao('#track_code').text();
    rao('#hiden').val(rao('#track_code').text());
    document.getElementById('hiden').select();
    document.execCommand("copy");
    //$temp.remove();

}