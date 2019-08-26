const { User } = require('../models');

module.exports = {
  async index(req, res) {
    res.json('Im in Find All');
  },

  async show(req, res) {
    res.json('Im in register');
  },

  async store(req, res) {
    const user = await User.create(req.body);
    res.json(user);
  },

  async update(req, res) {
    res.json('Im in update');
  },

  async destroy(req, res) {
    res.json('Im in delete');
  }
};
