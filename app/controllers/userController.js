const db = require('../models')


const User = db.users

//CREATE USER
const createUser =  async (req, res) =>{
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const phone_number = req.body.phone_number;
    const email = req.body.email;
    const saveUser = User.build({
        first_name,
        last_name,
        phone_number,
        email
    });
    await saveUser.save();
    res.send("Uzivatel pridany ");
};


//GET ALL USERS
const getAllUsers =  async (req, res) =>{
    const allUsers = await User.findAll();
    res.json(allUsers);
};

//UPDATE USER
const updateUser =  async (req, res) =>{
    User.update(req.body, {
        where: { id: req.params.id } });
    res.send("Uzivatel updatovany ");
};

//DELETE USER
const deleteUser =  async (req, res) => {
    User.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.send("Uzivatel vymazany ");
};

module.exports = {
    createUser,
    getAllUsers,
    updateUser,
    deleteUser
}