
  function validateForm(){
	/* Escribe tú código aquí */

  var nombre= document.getElementById('name').value;
  var apellido=document.getElementById('lastname').value;
  var mail= document.getElementById('input-email').value;
  var passw= document.getElementById('input-password').value;
  var menuBici= document.getElementsByClassName('form-control')[4];

  var regex = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/ ;
  var regexm=  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  var nom=document.getElementById("nom");
  var ape=document.getElementById("ape");
  var correo=document.getElementById("correo");
  var contras=document.getElementById("loguear");
  var lista=document.getElementById("lista");



  /*var primera=nombre.charAt(0).toUpperCase() + nombre.slice(1);
  var primer= apellido.charAt(0).toUpperCase() +apellido.slice(1); */
    if(nombre.length==0 || nombre==null){
     nom.innerHTML="El campo nombre es obligatorio";
      /*alert("El campo nombre es obligatorio");*/
      return false;
     }
     else if (!regex.test(nombre)) {
    /* alert("ingresa solo letras y las primeras en mayuscula");*/
    nom.innerHTML= "ingresa solo letras y las primeras en mayuscula";
      return false;
     }

     if(apellido.length==0 || apellido==null){
      /*  alert("El campo apellido es obligatorio");*/
      nom.style.display="none";

      ape.innerHTML="El campo apellido es obligatorio";
       return false;
       }
      else if (!regex.test(apellido)){

    /*  alert("ingresa el apellido en mayuscula");*/
      nom.style.display="none";
     ape.innerHTML="ingresa el apellido en mayuscula";



       return false;
       }
      if(mail.length==0){

        correo.innerHTML="ingresa el correo";
       nom.style.display="none";
       ape.style.display="none";


        /*alert("ingresa el correo");*/
      }
       else if(regexm.test(mail)==false){
         correo.innerHTML="ingresa en el formato requerido, con arroba";
        /*alert("ingresa en el formato requerido, con arroba");*/
       return false;
      }
      if(passw.length<6){

        contras.innerHTML="El tamaño mínimo de la contraseña aceptado es de 6 caracteres";
        correo.style.display="none";
        
    /*  alert("El tamaño mínimo de la contraseña aceptado es de 6 caracteres");*/
      return false;
      }
       else if(passw == "password" || passw =="123456" || passw == "098754"){
        contras.innerHTML="Contraseña no segura";
       /*alert("Contraseña no segura");*/
       return false;
      }

      if (menuBici.value == 0) { //drop down menu
		  /*alert("Por favor selecciona una opción");*/
      lista.innerHTML="Por favor selecciona una opción";
      menuBici.focus();
      }
      else {
       alert("datos enviados");
       return false;
       }
     }
