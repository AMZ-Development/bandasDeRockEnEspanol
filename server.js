const express = require('express');
const app = express();
const PORT = 8000;

const bandasRock = {
    'soda stereo':{
        'countryOfOrigin': 'Argentina',
        'numberOfRecords': 7,
        'greatestHit': 'De Musica Ligera'
    },
    'heroes del silencio': {
        'countryOfOrigin': 'Spain',
        'numberOfRecords': 10,
        'greatestHit': 'Entre Dos Tierras'
    },
    'los enanitos verdes': {
        'countryOfOrigin': 'Argentina',
        'numberOfRecords': 19,
        'greatestHit': 'Lamento Boliviano'
    },
    'sin entrada': {
        'countryOfOrigin': 'Unknown',
        'numberOfRecords': 'Unknown',
        'greatestHit': 'Unknown'
    }
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.get('/api/:bandasRock', (request, response) => {
    const bandName = request.params.bandasRock.toLocaleLowerCase();
    if(bandasRock[bandName]){
        response.json(bandasRock[bandName]);
    } else {
        response.json(bandasRock['sin entrada']);
    }

    response.json(bandasRock);
});

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`);
});