import { getConnection } from "../database/database";

const getAllUsers = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(`call getUsers()`);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getAllUsers
};
