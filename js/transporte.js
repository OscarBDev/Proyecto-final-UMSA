// FUNCIONES TRANSPORTE =========================================================================================================
function validacionesTransporte(dn, dd, ck, nv){
    b = 0;
    if (!numeroPositivo(dn) || !sobrepasa(dn)){
        document.getElementById("validation_dn").innerText = "La distancia normal debe ser un número positivo o no debe de pasar de 1.000.000";
        b = 1;
    }
    if (!numeroPositivo(dd) || !sobrepasa(dd)){
        document.getElementById("validation_dd").innerText = "La distancia con desvio debe ser un número positivo o no debe de pasar de 1.000.000";
        b = 1;
    }
    if (!numeroPositivo(ck) || !sobrepasa(ck)){
        document.getElementById("validation_ck").innerText = "El costo por kilometro debe ser un número positivo o no debe de pasar de 1.000.000";
        b = 1;
    }
    if (!numeroPositivo(nv) || !sobrepasa(nv)){
        document.getElementById("validation_nv").innerText = "El numero de viajes por semanas debe ser un número positivo o no debe de pasar de 1.000.000";
        b = 1;
    }
    return b;
}

function limpiarValidacionesTransporte(){
    document.getElementById("validation_dn").innerText = "";
    document.getElementById("validation_dd").innerText = "";
    document.getElementById("validation_ck").innerText = "";
    document.getElementById("validation_nv").innerText = "";
}

function limpiarResTransporte(){
    document.getElementById("r_costo_normal").innerText = "";
    document.getElementById("r_costo_desvio").innerText = "";
    document.getElementById("r_diferencia_viaje").innerText = "";
    document.getElementById("r_gasto_adicional_semanal").innerText = "";
    document.getElementById("r_gasto_adicional_mensual").innerText = "";
    document.getElementById("r_gasto_aprox").innerText = "";
}


function costoNomal(dn, ck){
    return dn * ck;
}

function costoConDesvio(dd, ck){
    return dd * ck;
}

function diferenciaDeCosto(cn, ccd){
    return ccd - cn;
}

function gastoAdiSemanal(ddc, nv){
    return ddc * nv;
}

function gastoAdiMensual(gas){
    return gas * 4;
}

function calcularTransporte(){
    let dn = Number(document.getElementById("distancia_normal").value);
    let dd = Number(document.getElementById("distancia_desvio").value);
    let ck = Number(document.getElementById("costo_kilometro").value);
    let nv = Number(document.getElementById("numero_viajes").value);

    // VALIDAMOS
    b = validacionesTransporte(dn, dd, ck, nv);
    // END VALIDAMOS

    if(b == 0){
        // funciones
        let costo_normal = costoNomal(dn, ck);
        let costo_con_desvio = costoConDesvio(dd, ck);
        let diferencia_de_costo = diferenciaDeCosto(costo_normal, costo_con_desvio);
        let gasto_adicional_semanal = gastoAdiSemanal(diferencia_de_costo, nv);
        let gasto_adicional_mensual = gastoAdiMensual(gasto_adicional_semanal);

        // limpiamos
        limpiarValidacionesTransporte();

        // mostramos
        document.getElementById("r_costo_normal").innerText = costo_normal.toFixed(2)+" Bs";
        document.getElementById("r_costo_desvio").innerText = costo_con_desvio.toFixed(2)+" Bs";
        document.getElementById("r_diferencia_viaje").innerText = diferencia_de_costo.toFixed(2)+" Bs";
        document.getElementById("r_gasto_adicional_semanal").innerText = gasto_adicional_semanal.toFixed(2)+" Bs";
        document.getElementById("r_gasto_adicional_mensual").innerText = gasto_adicional_mensual.toFixed(2)+" Bs";
        document.getElementById("r_gasto_aprox").innerText = "El usuario gastará aproximadamente "+gasto_adicional_mensual.toFixed(2)+" Bs mas al mes devido a los desvios.";
    }else{
        // limpiamos los resulatdos anteriores
        limpiarResTransporte();
    }
}
// END FUNCIONES TRANSPORTE ========================================================================================================