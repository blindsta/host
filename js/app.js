$(document).ready(function(){
    
   // Menu de Navegacion
   var activo = true;

   $('.btn-menu').on('click', function(){
     
    //Intercalar Iconos
    $('.btn-menu i').toggleClass('fa-times');

    //Animacion Menu
    if(activo){
      $('.list-container').animate({
          left: '0px'
      }, 500);

      activo = false;

    }else{
        activo = true;

     $('.list-container').animate({
         left: '-100%'
     }, 500);

       activo = true;
    }

   });

   // Intercalar Clase "Activo" Enlaces menu de navegacion

   var enlaces = document.querySelectorAll('.lists li a');

   enlaces.forEach( (element) => {
     
    element.addEventListener('click', (event) =>{
      enlaces.forEach((link) => {
          link.classList.remove('activo');
      });

      event.target.classList.add('activo');

    });
   });

  //Ejercicio
function simplificar(numerador, denominador) {
  let aux;

  while (numerador % denominador != 0) {
    aux = numerador % denominador;
    numerador = denominador;
    denominador = aux;
  }
  return denominador;
}

function resultado(numerador, denominador) {
  if (denominador != 0) {
    let divisor = simplificar(numerador, denominador);
    let num = numerador / divisor;
    let deno = denominador / divisor;

    $("#results-n5").val(num);
    $("#results-n6").val(deno);
  } else {
    alert("Demoninador debe ser diferente de 0!!!!");
  }
}

function sumar(n1, n2, n3, n4) {
  let num1 = n1 * n4;
  let num2 = n2 * n3;

  let numerador = num1 + num2;
  let denominador = n2 * n4;

  resultado(numerador, denominador);
}

function restar(n1, n2, n3, n4) {
  let num1 = n1 * n4;
  let num2 = n2 * n3;

  let numerador = num1 - num2;
  let denominador = n2 * n4;

  resultado(numerador, denominador);
}

function multi(n1, n2, n3, n4) {
  let numerador = n1 * n3;
  let denominador = n2 * n4;

  resultado(numerador, denominador);
}

function dividir(n1, n2, n3, n4) {
  let numerador = n1 * n4;
  let denominador = n2 * n3;
  resultado(numerador, denominador);
}

function calcular() {
  let operacion = parseInt($("#operaciones").val());
  let n1 = parseInt($("#first-n1").val());
  let n2 = parseInt($("#first-n2").val());
  let n3 = parseInt($("#second-n1").val());
  let n4 = parseInt($("#second-n2").val());

  switch (operacion) {
    case 1:
      sumar(n1, n2, n3, n4);
      break;
    case 2:
      restar(n1, n2, n3, n4);
      break;
    case 3:
      multi(n1, n2, n3, n4);
      break;
    case 4:
      dividir(n1, n2, n3, n4);
      break;
  }
}
//#endregion
$(document).ready(() => {
  $("#btn-calcular").click(e => {
    e.preventDefault();
    if (
      $("#first-n1").val() != "" &&
      $("#first-n2").val() != "" &&
      $("#second-n2").val() != "" &&
      $("#second-n2").val() != ""
    ) {
      calcular();
    } else {
      alert("Por favor, rellena todos los campos");
    }
  });
});

   // Scroll Efect

   var prevScrollPos = window.pageYOffset;

   window.onscroll = () => {

    // OCultar Y Mostrar menu al hace scroll
    var currentScrollPos = window.pageYOffset;

    if(prevScrollPos > currentScrollPos){

      $('.menu').css("top", "0px");
      $('.menu').css("transition", "0.5s");

    }else{
      $('.menu').css("top", "-60px");
      $('.menu').css("transition", "0.5s");
    }
   prevScrollPos = currentScrollPos;

   // Condiciones
   var posicion = window.pageYOffset;

   if (posicion <= 600) {
    // Ocultar Estilos Menu Scroll
    $('.menu').css("borderBottom", "none");

    //Ocultar Ir Arriba
    $('.go-top').css("right", "-100%");

   }else{
     // Mostrar Estilos Menu Scroll
     $('.menu').css("borderBottom", "3px solid #ff2e63");

     //Mostrar Ir Arriba
    $('.go-top').css("right", "0");
    $('.go-top').css("transition", "500ms");

   }
 }

 // Funcion ir arriba
 $('.go-top').on('click', function(){
     $('body, html').animate({
         scrollTop: '0'
     }, 500);
 });

 // Funcion ver abajo
 $('#abajo').on('click', function(){
   $('body, html').animate({
      scrollTop: '600px'
   }, 500);
 });

});