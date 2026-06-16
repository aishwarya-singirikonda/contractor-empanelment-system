const prisma = require("../config/prisma");

const getDashboardStats = async (req, res) => {
  try {
    const totalContractors = await prisma.contractor.count();

    const approved = await prisma.contractor.count({
      where: { status: "APPROVED" },
    });

    const pending = await prisma.contractor.count({
      where: { status: "PENDING" },
    });

    const rejected = await prisma.contractor.count({
      where: { status: "REJECTED" },
    });

    const departments = await prisma.department.count();

    const documents = await prisma.document.count();

    res.status(200).json({
      success: true,
      stats: {
        totalContractors,
        approved,
        pending,
        rejected,
        departments,
        documents,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardStats,
};