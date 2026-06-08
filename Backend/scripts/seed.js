// require env
require("dotenv").config();
// require mongoose
const mongoose = require("mongoose");
// require Model
const Admin = require("../models/Admin");
// Create Function(server)
const seedSuperAdmin = async () => {
  try {
    // connection DB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB IS Connected");
    // Check Admin
    const existAdmin = await Admin.findOne({
      email: process.env.ADMIN_EMAIL,
    });
    if (existAdmin) return console.log("Admin Already Exist");
    // create Admin
    const newAdmin = {
      username: "super admin",
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
    };
    const admin = await Admin.create(newAdmin);
    console.log(admin);
  } catch (error) {
    console.log("error");
  } finally {
    await mongoose.connection.close();
    console.log("DB Is Closed");
    process.exit(0);
  }
};
// call
seedSuperAdmin();
