const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const users = require('../models/users');

const register = (req, res) => {
    const { username, password } = req.body;
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    users.push({ username, password: hashedPassword });
    return res.status(201).json({ message: 'User registered successfully' });
}; 

const login = (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);
    if (!user) {
        return res.status(400).json({ message: 'Invalid username or password' });
    }
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid username or password' });
    }
    const token = jwt.sign({ username }, 'secret', { expiresIn: '1h' });
    return res.status(200).json({ token });
};

module .exports = {
    register,
    login
};