//****************************
//SIMULADOR DE ECOMMERCE
//****************************

const user="dalmatitas";
const pass="gatitos";

//----------FUNCIONES MODULARES--------------

//LOGIN
function login(){
    let intentos=3;
    console.log(`Tenes ${intentos} intentos`);
    let usuario= prompt("Ingrese su usuario");
    let contraseña= prompt("Ingrese su contraseña"); 
    while(usuario!=user && contraseña!=pass){
        intentos--;
        if(intentos==0){
            break;
        }
        console.log(`Te quedan ${intentos} intentos`);
        usuario= prompt("Ingrese su usuario");
        contraseña= prompt("Ingrese su contraseña");
    };    
    
    if (intentos>0){
        console.log("Bienvenido al ecommerce")
        return true;
    }else{
        console.log("Agotaste el numero de intentos")
        return false;
    }

}

//AGREGAR ELEMENTOS AL CARRITO
function agregar_productos(){
    let lista =[];
    let productouno="Espejo";
    let productodos="Macetas";
    let productotres="Macrame";
    let confirmacion=``;
    do{

        producto_elegido= prompt("Escriba el nombre del producto que desea comprar:\n Espejo\n Maceta\n Macrame").toUpperCase();
        if(producto_elegido=="ESPEJO" || producto_elegido=="MACETA" || producto_elegido=="MACRAME"){
            lista.push(producto_elegido);
        }else{
            console.log("Valor no admitido, ingrese bien el nombre del producto");
        }
        confirmacion=confirm("Desea comprar otro producto?");
        
    }while (confirmacion);
    console.log(`Su carrito tiene los siguiente items: ${lista}`);
    return lista;
    //console.log(typeof(lista))
}

//VER VALOR DEL TOTAL DEL CARRITO

//-------PROGRAMA PRINCIPAL--------

let ingreso_de_usuario = login();
let carrito = [];
if (ingreso_de_usuario){
    carrito = agregar_productos();
    //console.log(carrito);
    //console.log(typeof(carrito));
}else{
    console.log("No puedes entrar a comprar al ecommerce");
}
