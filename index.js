import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app = express();

const PORT = 4000;
const handleListening = () => {
	console.log(`Listening on: http://localhost:${PORT}`);
};

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

app.listen(PORT, handleListening);
