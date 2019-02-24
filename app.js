import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import helmet from 'helmet';
import logger from 'morgan';
import { userRouter } from './router';

const app = express();

const handleHome = (req, res) => res.send('Hello from home!');

const handleProfile = (req, res) => res.send('You are on my profile');

// Middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet()); // 보안
app.use(logger('dev')); // 로깅 tiny, combined, common, dev

app.get('/', handleHome);

app.get('/profile', handleProfile);

app.use('/user', userRouter);

export default app;
