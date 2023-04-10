module.exports = (sequelize,DataTypes) => {
    const User = sequelize.define("users",{
            first_name:{type: DataTypes.STRING},
            last_name:{type: DataTypes.STRING},
            phone_number:{type: DataTypes.INTEGER},
            email:{type: DataTypes.STRING}
        },
        {
            underscored: true
        });
    return User;
}