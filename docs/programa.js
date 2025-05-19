var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);
marker.addTo(map);
//Abrir el archivo de GeoJson
//Javasscript se ejecuta de tal manera que si una linea de codigo se demora, se pasa a la siguiente sin esperar
async function Cargarpuntos(){
    var miArchivo= await fetch("microondas.geojson");

    //Convertir el archivo a Json: objeto js:
    var datos= await miArchivo.json();
    //Obtener el arreglo de la llavr features
    let listaFeatures= datos ["features"];

    for(int i=0; i<10; 1++){
        console.log(datos["features"][i]);
    //Obtener la geometria del primer elemento 
        listaFeatures[i]["geometry"]["coordiantes"];
        var miMarcador = L.marker(misCoordenadas);
        marker.addTo(map);
    }
    Cargarpuntos();

    const marker = L.marker([4.60971, -74.08175]).addTo(map);
    marker.bindPopup('<strong>Marcador 1</strong><br>Información adicional del marcador.');  
}
