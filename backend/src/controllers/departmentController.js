const prisma = require("../config/prisma");

const createDepartment = async (req, res) => {
  try {
    const { name } = req.body;

    const department = await prisma.department.create({
      data: { name },
    });

    res.status(201).json({
      success: true,
      department,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllDepartments = async (req, res) => {
  try {
    const departments = await prisma.department.findMany();

    res.status(200).json({
      success: true,
      departments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createDepartment,
  getAllDepartments,
};