const authorize = (...roles) => {
  return (req, res, next) => {
    const userRole = req.user.role?.toLowerCase();

    const allowedRoles = roles.map(role =>
      role.toLowerCase()
    );

    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({
        success: false,
        message: "Access Denied",
      });
    }

    next();
  };
};

module.exports = authorize;