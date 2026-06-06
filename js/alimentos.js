// FUNCIONES ALIMENTOS =========================================================================================================

// variable global
let grafica = null;


function defecto(pc){
    b = 0;
    switch (pc) {
        case 1: //pollo
            document.getElementById("precio_inicial").value = 18;
            document.getElementById("precio_actual").value = 80;
            document.getElementById("cantidad_consumida").value = 2;
            document.getElementById("numero_semanas").value = 4;
            break;
        case 2: // huevo
            document.getElementById("precio_inicial").value = 30;
            document.getElementById("precio_actual").value = 60;
            document.getElementById("cantidad_consumida").value = 1;
            document.getElementById("numero_semanas").value = 4;
            break;
        case 3: // Queso
            document.getElementById("precio_inicial").value = 11;
            document.getElementById("precio_actual").value = 30;
            document.getElementById("cantidad_consumida").value = 2;
            document.getElementById("numero_semanas").value = 4;
            break;
        case 0: // limpiar
            document.getElementById("precio_inicial").value = 0;
            document.getElementById("precio_actual").value = 0;
            document.getElementById("cantidad_consumida").value = 0;
            document.getElementById("numero_semanas").value = 0;
            break;
    }
}

function datosDefecto(){
    let pc = Number(document.getElementById("producto_consumido").value);

    // cargamos datos por defecto
    defecto(pc);
}


function validacionesAlimentos(pc, pi, pa, cc, ns){
    b = 0;
    if (pc == 0 || pc == null || pc == undefined){
        document.getElementById("validation_pc").innerText = "Debe de seleccionar algun producto consumido";
        b = 1;
    }
    if (!numeroPositivo(pi) || !sobrepasa(pi)){
        document.getElementById("validation_pi").innerText = "El precio inicial debe ser un número positivo o no debe de pasar de 1.000.000";
        b = 1;
    }
    if (!numeroPositivo(pa) || !sobrepasa(pa)){
        document.getElementById("validation_pa").innerText = "El precio actual debe ser un número positivo o no debe de pasar de 1.000.000";
        b = 1;
    }
    if (!numeroPositivo(cc) || !sobrepasa(cc)){
        document.getElementById("validation_cc").innerText = "El cantidad consumida debe ser un número positivo o no debe de pasar de 1.000.000";
        b = 1;
    }
    if (!numeroPositivo(ns) || !sobrepasa(ns)){
        document.getElementById("validation_ns").innerText = "El numero de semanas debe ser un número positivo o no debe de pasar de 1.000.000";
        b = 1;
    }
    return b;
}

function limpiarValidacionesAlimentos(){
    document.getElementById("validation_pc").innerText = "";
    document.getElementById("validation_pi").innerText = "";
    document.getElementById("validation_pa").innerText = "";
    document.getElementById("validation_cc").innerText = "";
    document.getElementById("validation_ns").innerText = "";
}

function limpiarResAlimentos(){
    document.getElementById("r_producto").innerText = "";
    document.getElementById("r_incremento").innerText = "";
    document.getElementById("r_porcentaje").innerText = "";
    document.getElementById("r_gasto_semanal").innerText = "";
    document.getElementById("r_gasto_mensual").innerText = "";
    document.getElementById("r_resultado").innerText = "";
}

function verProducto(pc){
    switch (pc) {
        case 1:
            return "Pollo";
            break;
        case 2:
            return "Huevo";
            break;
        case 3:
            return "Queso";
            break;
    }
}


function incrementoPrecio(pa,pi){
    return pa - pi;
}

function porcentajeAumento(i, pi){
    return (i / 10) * 100;
}

function gastoSemanal(pa, cc){
    return pa * cc;
}

function gastoMensual(gs, ns){
    return gs * ns;
}

function diferencia(pi, pa, cc, ns){
    let antes = pi * cc * ns;
    let ahora = pa * cc * ns;

    return ahora - antes;
}

function GastoAntes(pi, cc, ns){
    return pi * cc * ns;
}

function calcularAlimentos(){
    let pc = Number(document.getElementById("producto_consumido").value);
    let pi = Number(document.getElementById("precio_inicial").value);
    let pa = Number(document.getElementById("precio_actual").value);
    let cc = Number(document.getElementById("cantidad_consumida").value);  // por semana
    let ns = Number(document.getElementById("numero_semanas").value); 

    // VALIDAMOS
    b = validacionesAlimentos(pc, pi, pa, cc, ns);
    // END VALIDAMOS

    if(b == 0){
        // funciones
        let producto = verProducto(pc);
        let incremento = incrementoPrecio(pa,pi);
        let pocetaje_aumento = porcentajeAumento(incremento, pi);
        let gasto_semanal = gastoSemanal(pa, cc);
        let gasto_mensual = gastoMensual(gasto_semanal, ns);
        let diferencia_antes_ahora = diferencia(pi, pa, cc, ns); 
        
        let gasto_antes = GastoAntes(pi, cc, ns);
        generarGrafica(gasto_antes, gasto_mensual);

        // limpiamos validciones
        limpiarValidacionesAlimentos();

        // mostramos
        document.getElementById("r_producto").innerText = producto;
        document.getElementById("r_incremento").innerText = incremento.toFixed(2)+" Bs";
        document.getElementById("r_porcentaje").innerText = pocetaje_aumento.toFixed(2)+"%";
        document.getElementById("r_gasto_semanal").innerText = gasto_semanal.toFixed(2)+" Bs";
        document.getElementById("r_gasto_mensual").innerText = gasto_mensual.toFixed(2)+" Bs";
        document.getElementById("r_resultado").innerText = "La familia gasta "+diferencia_antes_ahora.toFixed(2)+" Bs mas al mes, debido al aumento del precio.";
    }else{
        // limpiamos los resulatdos anteriores
        limpiarResAlimentos();
    }
    
}
// END FUNCIONES ALIMENTOS ========================================================================================================