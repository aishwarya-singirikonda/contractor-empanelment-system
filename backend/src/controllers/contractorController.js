const prisma = require("../config/prisma");

// Create Contractor
const createContractor = async (req, res) => {
  try {
    const contractor = await prisma.contractor.create({
      data: req.body,
    });

    res.status(201).json({
      success: true,
      contractor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Contractors
const getAllContractors = async (req, res) => {
  try {
    const contractors = await prisma.contractor.findMany({
      include: {
        department: true,
      },
    });

    res.status(200).json({
      success: true,
      contractors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Contractor By Id
const getContractorById = async (req, res) => {
  try {
    const contractor = await prisma.contractor.findUnique({
      where: {
        id: Number(req.params.id),
      },
      include: {
        department: true,
      },
    });

    if (!contractor) {
      return res.status(404).json({
        success: false,
        message: "Contractor not found",
      });
    }

    res.status(200).json({
      success: true,
      contractor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Contractor
const updateContractor = async (req, res) => {
  try {
    const contractor = await prisma.contractor.update({
      where: {
        id: Number(req.params.id),
      },
      data: req.body,
    });

    res.status(200).json({
      success: true,
      contractor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Contractor
const deleteContractor = async (req, res) => {
  try {
    await prisma.contractor.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.status(200).json({
      success: true,
      message: "Contractor Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Assign Department
const assignDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const { departmentId } = req.body;

    const contractor = await prisma.contractor.update({
      where: {
        id: Number(id),
      },
      data: {
        departmentId: Number(departmentId),
      },
      include: {
        department: true,
      },
    });

    res.status(200).json({
      success: true,
      contractor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Assignment Failed",
      error: error.message,
    });
  }
};
const updateContractorStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const contractor = await prisma.contractor.update({
      where: {
        id: Number(id),
      },
      data: {
        status,
      },
    });

    res.status(200).json({
      success: true,
      contractor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Status Update Failed",
      error: error.message,
    });
  }
};

module.exports = {
  createContractor,
  getAllContractors,
  getContractorById,
  updateContractor,
  deleteContractor,
  assignDepartment,
  updateContractorStatus,
};