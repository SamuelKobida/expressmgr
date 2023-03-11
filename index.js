const express = require('express');
const Sequelize = require ('sequelize')
const app = express();
app.use(express.json());
const PORT=3000;

const sequelize = new Sequelize('diplomovka', 'root', '1234', {
    host: 'mysqldb',
    dialect: 'mysql'
});

const User = sequelize.define("users",{
    first_name:{
        type: Sequelize.DataTypes.STRING
    },
    last_name:{
        type: Sequelize.DataTypes.STRING
    },
    phone_number:{
        type: Sequelize.DataTypes.INTEGER
    },
    email:{
        type: Sequelize.DataTypes.STRING
    }
},
    { tableName: "users"
    },
    {
     freezeTableName: true,
     timestamps: false
    });

User.sync();


//POST ONE USER

app.post("/user/create", async (req, res) => {
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
});


//GET ALL USERS

app.get("/users", async (req, res) => {
    const allUsers = await User.findAll();
    res.json(allUsers);
});

//UPDATE ONE USER

app.put("/user/update/:id", (req, res) => {
    User.update(req.body, {
        where: { id: req.params.id } });
    res.send("Uzivatel updatovany ");
});

//DELETE ONE USER

app.delete("/user/delete/:id", (req, res) => {
    User.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.send("Uzivatel vymazany ");
});



app.listen(PORT);