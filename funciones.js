
alert ("Bienvenidos a Ricarnes.")

function precioProd(){

    return parseFloat(prompt("Ingrese el precio de su producto"));
       
}



function solicitarLocalidad(){

    return prompt("Ingrese su localidad por favor");
    }


function calcularCostoEnvio(){
    let localidadIngresada = solicitarLocalidad().toLowerCase().trim();
      switch (localidadIngresada){
          case "palermo":
               alert("el monto de su envío es de $200 pesos \ndestino " + localidadIngresada);
               return 200;
          case "almagro":
               alert("el monto de su envío es de $220 pesos \ndestino " + localidadIngresada);
               return 220;
          case "balvanera": 
                alert("el monto de su envío es de $240 pesos \ndestino " + localidadIngresada);
                return 240;
          case "microcentro": 
                alert("el monto de su envío es de $250 pesos \ndestino " + localidadIngresada);   
                return 250;
          default:
              alert("Disculpe no llegamos a esta zona");
              return 0;
      }
    }
    


    function sumar(){
        let resultado = (precioProd()+calcularCostoEnvio());
        alert("El total de tu pedido es \n$"+resultado + " Pesos");
    }
    
    sumar()


    let respuesta = confirm ("Desea continuar?");
    alert ("COMPRAR");


 