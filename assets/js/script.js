$(function () {
    $('.carousel').carousel()

    $("#enviarCorreo").click(function () {
        alert("El correo fue enviado correctamente...");
    });


    $("h4").dblclick(function () {
        $(this).css("color", "red");
    });

    $(".card-body").click(function () {
        $(this).toggle();
    });

})
