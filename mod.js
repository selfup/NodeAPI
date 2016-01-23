'use strict'

module.exports = {
  rootPage: (req, res) => {
      res.sendFile(__dirname + '/public/index.html')
  },
  findAll: (req, res) => {
      res.send([{name:'mod1'}, {name:'mod2'}, {name:'mod3'}])
  },
  findById: (req, res) => {
      res.send({id:req.params.id, name: "The Name", description: "description"})
  }
}
