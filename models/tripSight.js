module.exports = function (sequelize, DataTypes) {
    var TripSight = sequelize.define("TripSight", {
        // tripId: {
        //     type: DataTypes.INTEGER,
        //     notNull: true
        // },
        // sightId: {
        //     type: DataTypes.INTEGER,
        //     notNull: true
        // }
    });
    return TripSight;
};