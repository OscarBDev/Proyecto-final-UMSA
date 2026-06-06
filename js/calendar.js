function calendar(
    duracion_dias,
    dia_critico,
    cantidad_inicial,
    consumo_diario,
    reavastesimiento_diario
){

    const fecha = new Date();

    const anio = fecha.getFullYear();
    const mes = fecha.getMonth();
    const hoy = fecha.getDate();

    // Nombre del mes
    const nombreMes = fecha.toLocaleString('es-ES', {
        month: 'long'
    });

    document.getElementById("tituloCalendario").innerHTML =
        nombreMes.charAt(0).toUpperCase() +
        nombreMes.slice(1) +
        " " +
        anio;

    // Días del mes actual
    const diasMes =
        new Date(anio, mes + 1, 0).getDate();

    // Día de la semana del día 1
    const primerDia =
        new Date(anio, mes, 1).getDay();

    const calendario =
        document.getElementById("calendar-grid");

    calendario.innerHTML = "";

    // Ajustar para comenzar en lunes
    let inicio =
        primerDia === 0 ? 6 : primerDia - 1;

    // Espacios vacíos antes del día 1
    for(let i = 0; i < inicio; i++){

        let vacio =
            document.createElement("div");

        vacio.classList.add("empty");

        calendario.appendChild(vacio);
    }

    // Consumo real por día
    let consumoNeto =
        consumo_diario -
        reavastesimiento_diario;

    // Generar días del mes
    for(let dia = 1; dia <= diasMes; dia++){

        let celda =
            document.createElement("div");

        celda.classList.add("day");

        // Días anteriores al actual
        if(dia < hoy){

            celda.innerHTML =
                `<div class="fw-bold">${dia}</div>`;

            calendario.appendChild(celda);

            continue;
        }

        // Día actual = 1, mañana = 2, etc.
        let diasDesdeHoy =
            dia - hoy + 1;

        // Reserva restante
        let reserva =
            cantidad_inicial -
            ((diasDesdeHoy - 1) * consumoNeto);

        if(reserva < 0){
            reserva = 0;
        }

        // Colorear según estado
        if(diasDesdeHoy < dia_critico){

            celda.classList.add("success");

        }
        else if(diasDesdeHoy < duracion_dias){

            celda.classList.add("warning");

        }
        else{

            celda.classList.add("danger");

        }

        // Resaltar el día actual
        if(dia === hoy){

            celda.style.border =
                "2px solid #0d6efd";
        }

        celda.innerHTML = `
            <div class="fw-bold">${dia}</div>
            <small>
                ${Math.round(reserva).toLocaleString()} L
            </small>
        `;

        calendario.appendChild(celda);
    }
}