const User = require("../models/userModel");

module.exports.getUsers = async (req: any, res: any) => {
  try {
    const allUsers = await User.findAll();
    return res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error al obtener usuarios" });
  }
};
module.exports.getUser = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al obtener usuario" });
  }
};
module.exports.createUser = async (req: any, res: any) => {
  try {
    const { username, email } = req.body;
    await User.create({
      username,
      email,
    });
    return res.status(201).json({ msg: "Creado exitosamente" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al crear usuario" });
  }
};
module.exports.updateUser = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const { username, email } = req.body;
    const user = await User.findOne({ where: { id } });
    user.update({
      username,
      email,
    });
    return res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al actualizar usuario" });
  }
};
module.exports.deleteUser = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    await User.destroy({ where: { id } });
    return res.json({ msg: "Eliminado con exito" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al eliminar usuario" });
  }
};
