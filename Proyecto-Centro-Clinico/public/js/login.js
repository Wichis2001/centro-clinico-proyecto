const nombre= document.getElementById("usuario");
const contrasenia= document.getElementById("contrasenia")
const button=document.getElementById("boton-login");
console.log('El usuario tuvo que haberle dado click al boton de iniciar sesion');

button.addEventListener("click",()=>{
    console.clear();
    if(nombre.value==""||contrasenia.value==""){
        alertaFracaso();
        nombre.value="";
        contrasenia.value="";
    } else {
        alertaExito();
        console.log(`Nombre de Usuario: ${nombre.value}`);
        console.log(`Contraseña del Usuario ${contrasenia.value}`);
        nombre.value="";
        contrasenia.value="";
    }
});

const alertaExito=()=>{
    Swal.fire({
        icon: 'success',
        title: 'Sesion Iniciada con Exito!',
        text: 'Verifica los datos en la consola del navegador',
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

const alertaFracaso=()=>{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No has llenado todos los campos disponibles!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
};