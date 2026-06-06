let graficaActual = null;
function crearGrafica(id, titulo, datos, color){

    if(graficaActual){
        graficaActual.destroy();
    }

    graficaActual = new Chart(document.getElementById(id), {

        type: 'line',

        data: {

            labels: [
                'Semana 1',
                'Semana 2',
                'Semana 3',
                'Semana 4'
            ],

            datasets: [{
                label: titulo,
                data: datos,

                borderColor: color,
                backgroundColor: color,

                pointBackgroundColor: color
            }]
        }
    });
}

document.addEventListener("DOMContentLoaded", function(){

    crearGrafica(
        "graficaPollo",
        "Precio del Pollo en Bs",
        [18, 30, 40, 80],
        "#dc3545"
    );

});
function Pollo(){
    crearGrafica(
        "graficaPollo",
        "Precio del Pollo en Bs",
        [18, 30, 40, 80],
        "#dc3545"
    );
}

function Huevo(){
    crearGrafica(
        "graficaHuevo",
        "Precio del Huevo en Bs",
        [30, 40, 50, 60],
        "#ffc107"
    );
}

function Queso(){
    crearGrafica(
        "graficaQueso",
        "Precio del Queso en Bs",
        [10, 13, 17, 20],
        "#198754"
    );
}