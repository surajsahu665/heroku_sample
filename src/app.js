const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
// console.log(__dirname);  //inbuild fun
// console.log(__filename);  //inbuild fun
//app.use(express.static(path.join(__dirname, '../public')))  //inbuild method   it is use to add middleware


const publicDirPath = path.join(__dirname, 'public');

app.use(express.static(publicDirPath))

// app.get('/', (req, res) => {
//     res.send('Hello Express');
// });

// app.get('/services', (req, res) => {
//     res.send('Services Page');
// });

// app.get('/help', (req, res) => {
//     res.send('Help Page');
// });

// app.get('/contact', (req, res) => {
//     res.send('Contact Page');
// });

// app.get('/about', (req, res) => {
//     res.send('About Page');
// });

// WITHOUT ARRAY
// app.get('/weather',(req,res) => {
//     res.send({
//         lat: '81.343434',
//         lon: '41.8746753'
//     });
//});


// WITH ARRAY
app.get('/weather', (req, res) => {
    res.send([{
        lat: '81.343434',
        lon: '41.8746753'
    },
    { Name: 'suraj sahu' }
    ]);
});


// WITH ARRAY   USING API
app.get('/weather', (req, res) => {
    console.log("get api");
    const url = 'http://api.weatherstack.com/current?access_key=92aae5f123982b43a5a6244518853471&query=bhilai';
    console.log(weather);
    res.send([{
        lat: '81.343434',
        lon: '41.8746753'
    },
    { Name: 'suraj sahu' }
    ]);
});


app.listen(port, () => {
    console.log("Server is running on port 3000");
})