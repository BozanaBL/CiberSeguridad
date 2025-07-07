$(document).ready(function () {
  $("#contactoForm").submit(function (e) {
    e.preventDefault();
    alert("Gracias por contactarnos. Te responderemos pronto.");
    this.reset();
  });

  
  $(".test-respuesta").click(function () {
    const correcto = $(this).data("correcto") === "sí";
    $("#feedback").text(correcto ? "¡Correcto! Buen trabajo." : "Incorrecto. Revisa tus prácticas.");
  });
});