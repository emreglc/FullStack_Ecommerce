// ./index.js
// importing the dependencies
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import login from './routes/api.login.js';
import signup from './routes/api.signup.js';
import http from 'http'
import fs from 'fs'
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
});

// defining the Express app
const app = express();

// adding Helmet to enhance your Rest API's security
app.use(helmet.crossOriginEmbedderPolicy({ policy: "credentialless" }));

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

app.use("/api", login)
app.use("/api", signup)

// starting the server
app.listen(3001, () => {
    console.log('listening on port 3001');
});