import express from "express";
import multer from "multer";
import jwt from "jsonwebtoken";
import fs from 'fs';

import { logs } from "./../../utils/index.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const user_id = req.user?.sub.split('|')[1];
    const uploadFolder = `media\\${user_id}`;
    logs.info(`uploadFolder ${uploadFolder}`)
    if (!fs.existsSync(uploadFolder)) {
      fs.mkdirSync(uploadFolder);
    }
    cb(null, 'media/' + user_id);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const uploads = express.Router();

if (!fs.existsSync('media')) {
  fs.mkdirSync('media');
}

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401); 
  const cert = fs.readFileSync('./../samaavesh/secrets/dev-otfvck2m.pem');

  jwt.verify(token, cert,{ algorithms: ['RS256'] }, (err, user) => {
    if (err) {
      logs.error(err);
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

uploads.post("/", authenticateToken, upload.single("file"), (req, res) => {
  const user_id = req.user?.sub.split('|')[1];
  res.send({location: 'http://localhost:3001/media/' + user_id + '/' + req.file.originalname});
});

export default uploads;
