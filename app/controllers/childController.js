const db = require('../models')

const Child = db.childs

//POST ONE CHILD
const createChild =  async (req, res) => {
    await Child.create({
        description: req.body.description,
        userId: req.params.id,
        where:{userId:req.params.id},
    });

    res.send("Potomok pridany ");
};

//GET ALL CHILDREN FOR USER
const getAllChildren =  async (req, res) =>{
    const allChildren = await
        Child.findAll({
            where:{userId: req.params.id}
        });
    res.json(allChildren);
};


//DELETE ALL CHILDREN FOR USER
const deleteAllChildren =  async (req, res) =>{
    Child.destroy({
        where: {
            userId: req.params.id,
        },
    });
    res.send("Potomokovia vymazany ");
};

module.exports = {
    createChild,
    getAllChildren,
    deleteAllChildren
}
