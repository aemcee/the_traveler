const express = require('express');
const db = require('./db'); 
const ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3001;


const app = express();

// console.log('ENV:', ENV);

if(ENV !== 'production'){
    const cors = require('cors');

    app.use(cors());

};

app.use(express.json());

// app.post('/api/test', async (req, res) => {

//     const {name, email, phone} = req.body;

//     const [result] = await db.execute('INSERT INTO users (name, email, phone) VALUES (?, ?, ?)', [name, email, phone])

//     res.send({
//         message: 'POST API Test Successful',
//         method: req.method,
//         url: req.url,
//         userId: result.insertId
//     });
// });

// app.get('/api/test', async (req, res) => {

//     const [rows] = await db.query('SELECT * FROM users');

//     res.send({
//         message: 'GET API Test Successful',
//         method: req.method,
//         url: req.url,
//         users: rows
//     });
// });

app.get('/api/display/test', async (req, res) => {

    const [rows] = await db.query('SELECT * FROM images');

    res.send({
        message: 'GET The Traveler API Test Successful',
        method: req.method,
        url: req.url,
        users: rows
    });
});

// app.get('/api/image/data', async (req, res) => {
    
//     console.log(req);

    // const [result] = await db.execute(`SELECT * FROM 'images' WHERE 'pid' = ${req.pid}`);
    // res.send({
    //     message: 'Get picture data by pid success',
    //     picture: result
    // });
// });

app.post('/api/display/test', async (req, res) => {

    const {url, title, userId, lat, lng} = req.body;

    const [result] = await db.execute('INSERT INTO `images` (`url`, `originalFileName`, `title`, `userId`, `pid`, `createdAt`, `deletedAt`, `updatedAt`, `description`, `lat`, `lng`) VALUES (?, ?, ?, ?, UUID(), CURRENT_TIME, CURRENT_TIME, CURRENT_TIME, ?, ?, ?)', [url, 'File Name', title, userId, 'Test of posting image', lat, lng])

    res.send({
        message: 'POST API Test Successful',
        method: req.method,
        url: req.url,
        userId: result.insertId
    });
});

app.patch('/api/display/update', async (req, res) => {

    console.log('made it to post in db'); 

    const {url, title, userId, lat, lng, pid} = req.body;

    const [result] = await db.query(`UPDATE images SET url='${url}', title='${title}', userId='${userId}', lat=${lat}, lng=${lng} WHERE pid='${pid}'`);
    // const [result] = await db.query(`UPDATE images SET url='https://image.shutterstock.com/image-vector/programming-banner-coding-best-languages-260nw-1033853617.jpg' WHERE pid='6eb13033-ed20-11e9-a3fb-0242ac120002'`);
    console.log('result', result); 
    res.send({
        message: 'POST UPDATE API Test Successful',
        method: req.method,
        url: req.url,
        userId: result.insertId
    });
});

// const image = {
//     url: 'https://www.france-justforyou.com/sites/files/styles/header_image_large/public/image/page/france-just-for-you-mont_st_michael.jpg?itok=vNph3dCX',
//     title: 'TestFromWebsite',
//     userId: 3,
//     lat: 2,
//     lng: 2
// };

app.listen(PORT, () => {
    console.log('Server Running @ localhost:%s', PORT);
}).on('error', (error) => {
    console.log('Server listen error. Do you already have a server running on PORT:%s', PORT);
});