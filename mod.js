exports.findAll = function(req, res) {
    res.send([{name:'mod1'}, {name:'mod2'}, {name:'mod3'}]);
};

exports.findById = function(req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
};
