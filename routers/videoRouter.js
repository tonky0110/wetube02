import express from 'express';
import routes from '../routes';

const videoRouter = express.Router();

videoRouter.get(routes.videos, (res, req) => res.send('video index'));
videoRouter.get(routes.upload, (res, req) => res.send('video Upload'));
videoRouter.get(routes.videoDetail, (res, req) => res.send('video detail'));
videoRouter.get(routes.editVideo, (res, req) => res.send('edit video'));
videoRouter.get(routes.deleteVideo, (res, req) => res.send('delete video'));

export default videoRouter;
