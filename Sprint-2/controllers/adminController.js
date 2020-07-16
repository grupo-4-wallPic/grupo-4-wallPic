const db = require('../database/models');
const Op = db.Sequelize.Op



module.exports = {

    main: (req, res) => {
        res.render('adminForms')
    }

}