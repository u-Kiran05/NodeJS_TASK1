const Employee = require('../model/employees'); 

const getAllEmployees = async (req, res) => { 
    try { 
        const employees = await Employee.find({}); 
        res.status(200).json(employees); 
    } catch (err) { 
        res.status(500).json({ message: err.message }); 
    } 
}; 

const getEmployeeByPosition = async (req, res) => { 
    try { 
        const { position } = req.params; 
        const employees = await Employee.find({ position }); 

        if (!employees.length) { 
            return res.status(404).json({ message: "No employees found in this position" }); 
        } 

        res.status(200).json(employees); 
    } catch (error) { 
        res.status(500).json({ message: error.message }); 
    } 
}; 

const addEmployee = async (req, res) => { 
    try { 
        const employee = await Employee.create(req.body); 
        res.status(201).json(employee); 
    } catch (error) { 
        res.status(500).json({ message: error.message }); 
    } 
}; 

const updateEmployee = async (req, res) => { 
    try { 
        const { id } = req.params; 
        const employee = await Employee.findByIdAndUpdate(id, req.body, { new: true }); 

        if (!employee) { 
            return res.status(404).json({ message: "Employee not found" }); 
        } 

        res.status(200).json(employee); 
    } catch (err) { 
        res.status(500).json({ message: err.message }); 
    } 
}; 

const deleteEmployee = async (req, res) => { 
    try { 
        const { id } = req.params; 
        const employee = await Employee.findByIdAndDelete(id); 

        if (!employee) { 
            return res.status(404).json({ message: "Employee not found" }); 
        } 

        res.status(200).json({ message: "Employee deleted successfully" }); 
    } catch (err) { 
        res.status(500).json({ message: err.message }); 
    } 
}; 

module.exports = {  
    getAllEmployees, 
    getEmployeeByPosition, 
    addEmployee, 
    updateEmployee, 
    deleteEmployee 
};
