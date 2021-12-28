const cui= document.getElementById("cui");
const nombre= document.getElementById("nombre");
const direccion= document.getElementById("direccion");
const nit = document.getElementById("nit");
const fechaNacimiento = document.getElementById("fecha");
const telefono= document.getElementById("telefono");
const button=document.getElementById("boton-registro");

button.addEventListener("click",async()=>{
    console.clear();
    if(verificarInputsLlenos()&&verificarCUI()&&verificarNombre()&&verificarTelefono()&&verificarNit()&&verificarDireccion()){
        const datos = { 
            'cui': cui.value,
            'nombre': nombre.value,
            'direccion': direccion.value,
            'nit': nit.value,
            'fechaNacimiento': fechaNacimiento.value,
            'telefono': telefono.value
        };
        const res = await fetch('/secretary/registrar-paciente',{
            method: "POST",
            body: JSON.stringify(datos),
            headers : { 
                'Content-Type': 'application/json',
            }
        })
            .then(res=>res.json())
            .then(response => alertaExito())
            .catch(error => console.error('Error:', error))
    } 
});

console.log('El usuario tuvo que haber sido identificado como una secretaria, y el paciente ingresado no tuvo que haber sido encontrado por la base de datos');



const alertaExito=()=>{
    Swal.fire({
        icon: 'success',
        title: 'Usuario creado con Exito!',
        text: 'Datos almacenados con éxito a la DB',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(./../fondoT.png")',
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://i.gifer.com/PYh.gif")
          left top
          no-repeat
        `
    })
};

const alertaFracaso= message =>{
    Swal.fire({
        icon: 'error',
        title: 'Error en el ingreso de datos!',
        text: message,
        width: 600,
        padding: '3em',
        color: '#FF2D0B',
        background: '#fff url(./../fondoT.png")',
        backdrop: `
          rgba(161,0,0,0.4)
          url("https://i.gifer.com/y7.gif")
          left top
          no-repeat
        `
    })
};

const verificarInputsLlenos= ()=>{
    if(cui.value===""||nit.value===""||telefono.value===""||direccion.value===""||fechaNacimiento.value===""||nombre.value===""){
        alertaFracaso('Aun hay campos vacios en el programa');
        return false;
    }
    return true;
};

const verificarCUI=()=>{
    if(isNaN(cui.value)||(cui.value.toString().length)!==13){
        alertaFracaso('El Cui Ingresado no es valido, ingresa un Cui valido para continuar');
        return false;
    } 
    return true;
};

const verificarNombre=()=>{
    if((nombre.value.length)<4||(nombre.value.length)>45){
        alertaFracaso('Cantidad de caracteres ingresadas en el campo de nombre son insuficientes');
        return false;
    } 
    return true;
};

const verificarDireccion=()=>{
    if((direccion.value.length)<4||(nombre.value.length)>100){
        alertaFracaso('Cantidad de caracteres ingresadas en el campo de dirección son insuficientes');
        return false;
    } 
    return true;
};

const verificarNit=()=>{
    if(nit.value.toString().length>8){
        alertaFracaso('Cantidad de caracteres ingresadas en el campo de NIT son insuficientes');
        return false;
    } 
    return true;
};

const verificarTelefono=()=>{
    if(isNaN(telefono.value)||(telefono.value.toString().length)!==8){
        alertaFracaso('El número de telefono Ingresado no es valido, ingresa un número de telefono valido para continuar');
        return false;
    } 
    return true;
};