const Student = require("../models/user");
exports.get = function(req,res){
    Student.find({}).then(rs=>{
        res.render("user/list",{
            items: rs
        });
    }).catch(err=>{
        res.send(err);
    });
}