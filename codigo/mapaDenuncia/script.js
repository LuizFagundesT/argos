function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -14.2350, lng: -51.9253 }, // Centro aproximado do Brasil
        zoom: 4
    });

    window.searchLocation = function () {
        var estado = document.getElementById('estado').value;
        var regiao = document.getElementById('regiao').value;

        var locations = {
            "AC": { lat: -9.0238, lng: -70.8120 },
            "AL": { lat: -9.5713, lng: -36.7820 },
            "AP": { lat: 0.9020, lng: -52.0033 },
            "AM": { lat: -3.4168, lng: -65.8561 },
            "BA": { lat: -12.5797, lng: -41.7007 },
            "CE": { lat: -5.4984, lng: -39.3206 },
            "DF": { lat: -15.8267, lng: -47.9218 },
            "ES": { lat: -19.1834, lng: -40.3089 },
            "GO": { lat: -15.8270, lng: -49.8362 },
            "MA": { lat: -4.9609, lng: -45.2744 },
            "MT": { lat: -12.6819, lng: -56.9211 },
            "MS": { lat: -20.7722, lng: -54.7852 },
            "MG": { lat: -18.5122, lng: -44.5550 },
            "PA": { lat: -3.4168, lng: -52.9601 },
            "PB": { lat: -7.2390, lng: -36.7820 },
            "PR": { lat: -24.0469, lng: -51.2365 },
            "PE": { lat: -8.8137, lng: -36.9541 },
            "PI": { lat: -6.7242, lng: -42.9023 },
            "RJ": { lat: -22.9099, lng: -43.2095 },
            "RN": { lat: -5.4026, lng: -36.9541 },
            "RS": { lat: -30.0346, lng: -51.2177 },
            "RO": { lat: -10.8267, lng: -63.3056 },
            "RR": { lat: 2.7376, lng: -62.0751 },
            "SC": { lat: -27.2423, lng: -50.2189 },
            "SP": { lat: -23.5505, lng: -46.6333 },
            "SE": { lat: -10.5741, lng: -37.3857 },
            "TO": { lat: -10.1753, lng: -48.2982 }
        };

        if (locations[estado]) {
            map.setCenter(locations[estado]);
            map.setZoom(7); // Ajuste o nível de zoom conforme necessário
        } else {
            alert('Localização não encontrada!');
        }
    };
}

// let map;
// const markers = [];

// // Pontos de interesse (POIs)
// const pois = {
//     "AC": [
//         { lat: -9.97499, lng: -67.8243 },
//         { lat: -10.0, lng: -67.8 },
//         // Adicione mais pontos conforme necessário
//     ],
//     "AL": [
//         { lat: -9.5713, lng: -36.7820 },
//         { lat: -9.6, lng: -36.7 },
//         // Adicione mais pontos conforme necessário
//     ],
//     // Adicione mais estados e seus pontos aqui
//     "SP": [
//         { lat: -23.5505, lng: -46.6333 },
//         { lat: -23.5558, lng: -46.6396 },
//         { lat: -23.5640, lng: -46.6500 },
//         { lat: -23.5629, lng: -46.6558 },
//         // Adicione mais pontos conforme necessário
//     ]
// };

// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: { lat: -14.2350, lng: -51.9253 }, // Centro aproximado do Brasil
//         zoom: 4
//     });
// }

// function searchLocation() {
//     const estado = document.getElementById('estado').value;

//     const locations = {
//         "AC": { lat: -9.0238, lng: -70.8120 },
//         "AL": { lat: -9.5713, lng: -36.7820 },
//         "SP": { lat: -23.5505, lng: -46.6333 },
//         // Adicione mais coordenadas de estados aqui
//         // ...
//     };

//     if (locations[estado]) {
//         const center = locations[estado];
//         map.setCenter(center);
//         map.setZoom(7); // Ajuste o nível de zoom conforme necessário

//         // Remover marcadores antigos
//         markers.forEach(marker => marker.setMap(null));
//         markers.length = 0;

//         // Adicionar novos marcadores
//         if (pois[estado]) {
//             pois[estado].forEach(poi => {
//                 const marker = new google.maps.Marker({
//                     position: poi,
//                     map: map
//                 });
//                 markers.push(marker);
//             });
//         }
//     } else {
//         alert('Localização não encontrada!');
//     }
// }

