const nombre_medico = document.getElementById('nombre-medico');
const numero_colegiado = document.getElementById('numero-colegiado');
const boton_registro = document.getElementById('boton-registro');

boton_registro.addEventListener("click",async()=>{
    console.clear();
    if(verificarInputsLlenos()){
        const info = { 
            'nombre_medico' : nombre_medico.value,
            'numero_colegiado' : numero_colegiado.value
        };
        const res = await fetch('/secretary/registrar-medico',{
            method: "POST",
            body: JSON.stringify(info),
            headers : { 
                'Content-Type': 'application/json',
            }
        })
            .then(res=>res.json())
            .catch(error => console.error('Error:', error))
            .then(res => {
                let {status} = res;
                if(status==='error'){
                    alert('Numero de Colegiado DUPLICADO!, Dicho numero ya ha sido ingresado previametne a la base de datos');
                    status='';
                } else {
                    alert('Medico Creado correctamente');
                }
            });
    } 
});


const verificarInputsLlenos= ()=>{
    console.log(nombre_medico.value + ' ' + numero_colegiado.value);
    if (nombre_medico.value === "") {
        alert('No has ingresado el nombre del medico referido');
        return false;
    } else {
        if (numero_colegiado.value === "") {
            alert('No has ingresado en numero de colegiado del medico');
            return false;
        }
    }
    return true;
};

console.log('El usuario tuvo que a ver sido identificado como administrador/secretaria por el sistema ');
console.log('El usuario tuve que haber accedido al submenu de registrar medicos para poder registrar un nuevo medico al sistema');