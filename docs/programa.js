var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);
marker.addTo(map);

async function Cargarpuntos(){
    var miArchivo= await fetch("microondas.geojson");

    var datos= await miArchivo.json();

    let listaFeatures= datos ["features"];

    for(int i=0; i<10; 1++){
        console.log(datos["features"][i]);

        listaFeatures[i]["geometry"]["coordiantes"];
        var miMarcador = L.marker(misCoordenadas);
        marker.addTo(map);
    }
    Cargarpuntos();

  
    
}