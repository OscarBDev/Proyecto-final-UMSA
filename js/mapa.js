const map = L.map('mapa').setView([-16.5, -64.5], 6);

L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '&copy; OpenStreetMap'
    }
).addTo(map);

fetch("https://transitabilidad.abc.gob.bo/api/v1/data")
.then(response => response.json())
.then(datos => {

    datos.forEach(tramo => {

        let lat = parseFloat(tramo.latitud_inicio_seccion);
        let lng = parseFloat(tramo.longitud_inicio_seccion);

        if(!isNaN(lat) && !isNaN(lng)){

            L.marker([lat,lng])
            .addTo(map)
            .bindPopup(`
                <b>${tramo.departamento}</b><br>
                Tramo: ${tramo.tramo}<br>
                Estado: ${tramo.estado.descripcion_estado}<br>
                Evento: ${tramo.evento.descripcion_evento}
            `);
        }

    });

});