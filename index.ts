import express from 'express';
import cors from 'cors';

import { db } from './api/db';
import { User } from './interfaces/user.interface';

const app = express();
const PORT = 8000;

app.use(cors());

/**
 * Nothing on root, so return a 404
 */
app.get('/', (req:any, res:any) => res.send("this is native backend"));

/**
 * Return list of users as application/json
 * Publish API as V1 to be able to support legacy apps after breaking changes of the API
 */
app.get('/api/v1/users', (req:any, res:any) => {
  db.getUsers().then((users: User[]) => {
    res.send(users);
  });
})

app.listen(PORT, () => {
  console.log(`[backend]: Server is running on https://localhost:${PORT}`);
});