// import jwt from "jsonwebtoken"

// const authMiddleware = (req, res, next) => {
//   const token = req.header("Authorization");
//   if (!token) return res.status(401).json({ message: "Access denied" });

//   try {
//     const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     res.status(400).json({ message: "Invalid token" });
//   }
// };

// export default authMiddleware


// const authMiddleware = (req, res, next) => {
//   const token = req.header("Authorization");
//   console.log("Received Token:", token); // Debugging line

//   if (!token) return res.status(401).json({ message: "Access denied" });

//   try {
//     const tokenWithoutBearer = token.split(" ")[1]; // Extract the token after "Bearer"
//     console.log("Extracted Token:", tokenWithoutBearer); // Debugging line

//     const decoded = jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET);
//     console.log("Decoded Token:", decoded); // Debugging line

//     req.user = decoded;
//     next();
//   } catch (err) {
//     console.error("JWT Verification Error:", err.message); // Log detailed error
//     res.status(400).json({ message: "Invalid token" });
//   }
// };


// export default authMiddleware

import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const authHeader = req.header("Authorization");
  console.log("Received Token:", authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Access denied. No token provided" });
  }

  const token = authHeader.split(" ")[1]; // Extract the token correctly
  console.log("Extracted Token:", token);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", decoded);
    req.user = decoded;
    next();
  } catch (err) {
    console.error("JWT Verification Error:", err.message);
    res.status(400).json({ message: "Invalid token" });
  }
};

export default authMiddleware;
