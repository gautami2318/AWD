const express = require('express');
const app = express();  
const port = 3001;

app.get('/hello', (req, res) => {
    res.send("hello");   
});

app.get('/time', (req, res) => {
    const currentTime = new Date();
    res.json({
        time: currentTime
    })
   
});

// app.get('/date', (req, res) => {
//     res.send("date");
// });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);  
});
