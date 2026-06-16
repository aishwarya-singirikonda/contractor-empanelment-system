const prisma = require("../config/prisma");

// Upload Document
const createDocument = async (req, res) => {
  try {
    const document = await prisma.document.create({
      data: req.body,
    });

    res.status(201).json({
      success: true,
      document,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Documents by Contractor
const getDocumentsByContractor = async (req, res) => {
  try {
    const documents = await prisma.document.findMany({
      where: {
        contractorId: Number(req.params.contractorId),
      },
    });

    res.status(200).json({
      success: true,
      documents,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Document
const deleteDocument = async (req, res) => {
  try {
    await prisma.document.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.status(200).json({
      success: true,
      message: "Document Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createDocument,
  getDocumentsByContractor,
  deleteDocument,
};