"use strict";

//모듈
const express = require('express');
const app = express();
const admin = require('firebase-admin');
const bodyParser = require('body-parser');

//라우팅
const apiRouter = require('./src/routes');

//웹세팅
app.use(express.static('./public'));
app.set("views", './views');
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let serviceAccount = require('./respec-fb1c5-firebase-adminsdk-s5cr3-17a54ae09a');

app.use("/", apiRouter);

//연결
app.listen(5000, () => { // 서버 연결
    console.log(`Server Running on 5000 Port!`);
});

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});