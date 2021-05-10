const UserSchema = require('../models/userSchema');


async function create (req, res) {
    const { email,
            password,
            fullName,
            cpf,
            cep,
            address 
        } = req.body;

    try {

        const response = await UserSchema.findOne({ cpf });

        if (response == null) {
            const data = {
                email,
                password,
                fullName,
                cpf,
                cep,
                address
            }
        
            const newUser = new UserSchema({ ...data });
            await UserSchema.create(newUser);
            res.json({ status: 0, message: 'OK' })
        
        } else {
            res.json({ status: 1, message: 'user already registered' })
        }
    } catch (error) {
        res.status(500).send({ error: 'Something failed!' });
    }
}

module.exports = { create }
