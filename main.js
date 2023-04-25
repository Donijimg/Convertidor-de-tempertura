
const  temperatura1=document.getElementById("temperatura1")
const  elector=document.getElementsByTagName("input")
const  temperatura2=document.getElementById("temperatura2")
const  contenidoBarra=document.getElementById("contenidoBarra")
const info=document.getElementById("temp")
let resultado='-';
function convertir(){    
    if(isNaN(temperatura1.value)){
        alert('no es numero')
    }else{
        if(elector[1].checked==true){
            resultado=(temperatura1.value-32)*5/9;
        }else if (elector[2].checked==true){
            resultado=(temperatura1.value*9/5)+32;
        }else{
            alert('no seleccionado')
        }
        if (resultado>=100){
            contenidoBarra.style.height="100%"
        }else if(resultado<=0){
            contenidoBarra.style.height=0
        }else{
    contenidoBarra.style.height=`${resultado}%`
        }
    temperatura2.textContent=`${resultado}°`
    info.textContent=`${resultado}°`
    temperatura1.value=""
    }


}