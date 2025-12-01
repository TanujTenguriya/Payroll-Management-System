import jwt from "jsonwebtoken";
import User from "../models/User.model.js";

/* Verify JWT */
export const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization && 
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      return res.status(401).json({ message: "Not authorized" });
    }
  }

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }
};

/* Role check */
export const adminOnly = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin access only" });
  }
  next();
};

export const adminOrAccountant = (req, res, next) => {
  if (req.user.role !== "admin" && req.user.role !== "accountant") {
    return res.status(403).json({ message: "Admin or Accountant access only" });
  }
  next();
};
