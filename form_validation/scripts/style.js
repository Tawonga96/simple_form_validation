$(document).ready(function(){

    $("#sign_up").click(function(){
        var username=$("#user").val();
        var password = $("#pass").val();
        var email = $("#email").val();
    
        if(username.length == "" && password.length=="" && email.length==""){
            $("input:not(#sign_up)").addClass("error_input");
            $("#user,#pass,#email").focus();
            return false;
        }

        else if(username.length==""){
            $("#error_user").text("*Provide username");
            $("#user").focus();
            return false;
        }

        else if(password.length==""){
            $("#error_pass").text("*Provide password");
            $("#pass").focus();
            return false;
        }

        else if(password.length < 8){
            $("#error_pass").text("*Password should have 8 characters");
            $("#pass").focus();
            return false;
        }

        else if(email.length==""){
            $("#error_email").text("*Provide email");
            $("#email").focus();
            return false;
        }
    });
   
});