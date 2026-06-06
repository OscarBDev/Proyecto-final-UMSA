// FUNCIONES CARBURANTES =========================================================================================================
function DuracionDias(ci, cd, rd){
    return dd = ci / (cd - rd)
}

function diaCritico(ci, nc, cd, rd){
    return dc = (ci - nc) / (cd - rd)
}

function estadoEvaluado(dd, dc){
    if (dd <= dc){
        return "❌ Reserva Agotada"
    } else {
        return "⚠️ Reserva Critica"
    }
}

function validacionesCarburantes(ci, cd, rd, nc){
    b = 0;
    if (!numeroPositivo(ci) || !sobrepasa(ci)){
        document.getElementById("validation_ci").innerText = "La cantidad inicial debe ser un número positivo o no debe de pasar de 1.000.000";
        b = 1;
    }
    if (!numeroPositivo(cd) || !sobrepasa(cd)){
        document.getElementById("validation_cd").innerText = "El consumo diario debe ser un número positivo o no debe de pasar de 1.000.000";
        b = 1;
    }
    if (!numeroPositivo(rd) || !sobrepasa(rd)){
        document.getElementById("validation_rd").innerText = "El reavastesimiento diario debe ser un número positivo o no debe de pasar de 1.000.000";
        b = 1;
    }
    if (!numeroPositivo(nc) || !sobrepasa(nc)){
        document.getElementById("validation_nc").innerText = "El nivel crítico debe ser un número positivo o no debe de pasar de 1.000.000";
        b = 1;
    }
    return b;
}

function limpiarValCarburantes(){
    document.getElementById("validation_ci").innerText = "";
    document.getElementById("validation_cd").innerText = "";
    document.getElementById("validation_rd").innerText = "";
    document.getElementById("validation_nc").innerText = "";
}

function calcularCarburantes(){
    let cantidad_inicial = Number(document.getElementById("cantidad_inicial").value);
    let consumo_diario = Number(document.getElementById("consumo_diario").value);
    let reavastesimiento_diario = Number(document.getElementById("reavastesimiento_diario").value);
    let nivel_critico = Number(document.getElementById("nivel_critico").value);

    // VALIDAMOS
    b = validacionesCarburantes(cantidad_inicial, consumo_diario, reavastesimiento_diario, nivel_critico);
    // END VALIDAMOS

    if(b == 0){
        // funciones
        let duracion_dias = DuracionDias(cantidad_inicial, consumo_diario, reavastesimiento_diario);
        let dia_critico = diaCritico(cantidad_inicial, nivel_critico, consumo_diario, reavastesimiento_diario);
        let estado = estadoEvaluado(duracion_dias, dia_critico);

        // limpiamos validciones
        limpiarValCarburantes()

        // mostramos
        document.getElementById("duracion_dias").innerHTML = duracion_dias+" días";
        document.getElementById("dia_critico").innerHTML = dia_critico+" días";
        document.getElementById("dia").innerHTML = "a los "+dia_critico+" días";
        document.getElementById("estado").innerHTML = estado;

        // calendario
        calendar(
            Math.ceil(duracion_dias),
            Math.ceil(dia_critico),
            cantidad_inicial,
            consumo_diario,
            reavastesimiento_diario
        );
    }

}
// END FUNCIONES CARBURANTES ========================================================================================================