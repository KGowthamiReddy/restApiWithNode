import express from 'express';

import { v4 as uuidv4 } from 'uuid';

const router = express.Router();


const users = [
    // {
    //     firstName :  "Gowthami",
    //     lastName : "Kammannagari",
    //     age : 23
    // },
    // {
    //     firstName :  "Virat",
    //     lastName : "Kohli",
    //     age : 35
    // }
]

// all routes in here are starting with /users
router.get('/', (req, res) => {
    //console.log(users);
    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;

    //const userId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

    //const userWithId = {...user, id :  uuidv4()}

    users.push({...user, id :  uuidv4()});

    res.send(`user with the name ${user.firstName} added to the database`);
});

router.get('/:id', (req, res) => {
    res.send('get ID');
})


export default router;