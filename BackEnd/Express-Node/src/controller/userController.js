const UserModel = require("../models/userModels");

const getUsers = async (req, res) => {
  try {
    const users = await UserModel.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getUsers };
