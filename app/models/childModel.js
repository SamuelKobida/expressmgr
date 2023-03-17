module.exports = (sequelize,DataTypes) => {
    const Child = sequelize.define("children",{
            description:{
                type: DataTypes.STRING
            },
        },
        {
            underscored: true
        });
    return Child;
}