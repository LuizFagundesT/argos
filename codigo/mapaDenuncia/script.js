function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -14.2350, lng: -51.9253 }, // Centro aproximado do Brasil
        zoom: 6
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

            addRandomPoints(map);
        } else {
            alert('Localização não encontrada!');
        }
    };
}

function addRandomPoints(map) {
    // Função para gerar coordenadas aleatórias dentro dos limites do Brasil
    function getRandomCoordinate() {
        const lat = Math.random() * (5.27 - (-33.75)) + (-33.75); // Latitude entre -33.75 e 5.27
        const lng = Math.random() * (-32.39 - (-73.99)) + (-73.99); // Longitude entre -73.99 e -32.39
        return { lat: lat, lng: lng };
    }

    for (let i = 0; i < 100; i++) {
        const randomCoordinate = getRandomCoordinate();
        new google.maps.Marker({
            position: randomCoordinate,
            map: map
        });
    }
}
