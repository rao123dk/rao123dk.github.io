$(document).ready(function(){
    console.log(
            `
            %c
            *******************************
            *******************************
            *******************************
            *******************************
            *******************************
            ********DHEERJ KUMAR RAO*******
            *https://twitter.com/rao123dk**
            *******************************
            *******************************
            *******************************
            *******************************
            *******************************
            `,
            'background: #fcdf03; color: #000'
    )
    var CommentNode = document.createComment("Send message on WhatsApp without adding to your contacts list");
    document.body.appendChild(CommentNode);
    var countryCode = '+91';
    var mobile = '';

    $('#countryCode').on('change paste keyup', function() {
        countryCode = $(this).val().trim();
        if(countryCode.indexOf('+') === -1){
            countryCode = '+' + countryCode;
        }
    });


    $('#mobileNumber').on('change paste keyup', function() {
      mobile = $(this).val().trim();
    });

    $("#send").click(function(e){
      if(countryCode && mobile){
        e.preventDefault();
        var url = "https://api.whatsapp.com/send?phone=+"+countryCode+mobile;
        window.open(url, '_blank');
        setTimeout(()=>{
            location.reload(false);
        },2000)
        return;
      }
      alert("Please enter correct info");
    });
  });