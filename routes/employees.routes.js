const express = require('express'); 

const router = express.Router(); 

const {  getAllEmployees, getEmployeeByPosition, addEmployee, updateEmployee, deleteEmployee } = require('../controller/employees.controller'); 

router.get('/', getAllEmployees); 
router.get('/position/:position', getEmployeeByPosition); 
router.post('/', addEmployee); 
router.put('/:id', updateEmployee); 
router.delete('/:id', deleteEmployee); 

module.exports = router;
