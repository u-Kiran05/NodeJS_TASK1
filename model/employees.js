const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  position: { type: String, required: true },
  salary: { type: Number, required: true },
  hireDate: { type: Date, default: Date.now }
});

const employees = mongoose.model('Employee', employeeSchema);

module.exports = employees;