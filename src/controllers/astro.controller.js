import { getConnection } from "../database/database";

const getAstros = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM astro");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getTypesAstros = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM `typeastro`;");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getAstroById = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(`call findAstroById(${id});`);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getAstros,
  getTypesAstros,
  getAstroById,
};
