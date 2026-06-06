function generarGrafica(gastoAntes, gastoAhora){

    const ctx =
        document.getElementById(
            "graficaAlimentos"
        );

    // Eliminar gráfica anterior
    if(grafica){
        grafica.destroy();
    }

    grafica = new Chart(ctx, {

        type: "bar",

        data: {

            labels: [
                "Antes",
                "Ahora"
            ],

            datasets: [{

                label: "Gasto mensual (Bs)",

                data: [
                    gastoAntes,
                    gastoAhora
                ]

            }]
        },

        options: {

            responsive: true,

            scales: {

                y: {
                    beginAtZero: true
                }
            }
        }
    });
}