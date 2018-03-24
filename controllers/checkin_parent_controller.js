var express = require('express');


var router = express.Router();

function insertStudentData () {
 

 



router.post("/parent", function (req, res) {
    console.log(req.body);
    db.Students.findAll({
            where: {
                par_gvt_id: req.body.par_gvt_id
            },
        })
        // use promise method to pass the students...
        .then(function (dbStudents) {
            console.log("parents_find: ", dbStudents);

            // send students back as a JSON object
            res.json({
                par_name: dbStudents[0].par_name
            });
        });
});
<<<<<<< HEAD:REUNI/controllers/checkin_parent_controller.js

=======
router.post("/parents/checkin", function(req, res){
    db.Students.find({
        where: {
            par_gvt_id :req.body.par_gvt_id
        },
    })
    // use promise method to pass the students...
        .then(function(dbStudent) {
            console.log("Parent_find: ", dbStudent);
            return res.render("parent_result_modal", dbStudent.dataValues);
        });
})
db.sequelize.sync({force:true}).then(function () {
    insertStudentData();
    console.log("Data is synched and inserted to the database")
  })
>>>>>>> 11c709c0f0402dcfa8a3da5e9e72804ca23e421b:controllers/checkin_parent_controller.js
module.exports = router;
