$(document).ready(function() {

    $("#butt").click(function() {
        var message = {
            username: $('#user').val(),
            message: $('#message').val()
        };
        alert(message);
        $.ajax({
            type: 'POST',
            url: 'http://originmessages.herokuapp.com/messages',
            data: JSON.stringify(message),
            contentType: "application/json",
            dataType: "json"
        });
    });
});
