var botonEncriptar = document.querySelector("#btn-encriptar");
function encriptar()
{     
      
    let expBusqueda = new RegExp ("[A-Z]","g");
      var text = document.querySelector("#input-texto").value;    
      var  textoEncriptado = text.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat");
      document.querySelector(".texto-msg").value = textoEncriptado;
      document.querySelector("#input-texto").value;
     
}
botonEncriptar.onclick = encriptar;

var botonDesencriptar = document.querySelector("#btn-desencriptar");
function desencriptar ()
{
      
    let expBusqueda = new RegExp ("[A-Z]","g");
      var texto = document.querySelector("#input-texto").value;
      var textoCifrado = texto.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u");
      document.querySelector(".texto-msg").value = textoCifrado;
      document.querySelector("#input-texto").value;
}
botonDesencriptar.onclick = desencriptar;


var botonCopiar = document.querySelector("#btn-copy");
botonCopiar.addEventListener("click", function(boton)
{
      var copiarTexto = document.querySelector("#msg");
      copiarTexto.select();
      document.execCommand("copy");
      document.querySelector("#msg").value = " ";
})

function validarTexto () 
{
    
    let mayusculas = /[A-Z]/g;
    let caracteresEspeciales = /[áéíóú]/g;

    if (texto.match(mayusculas)) {
        return true;
    }else if (texto.match(caracteresEspeciales)){
        return true;
    } else {
        return false;
    }

}