# 📌 Employee Management API

A **Node.js + Express + MongoDB** REST API for managing employees.

---

## 🚀 Features
- ✅ **Employee Management**: Add, update, delete, and retrieve employees.
- ✅ **Category-Based Filtering**: Retrieve employees by category.
- ✅ **MongoDB Database**: Uses Mongoose for schema modeling.
- ✅ **Environment Variables**: Uses `.env` for configuration.

---

## 🛠 Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Environment Management**: dotenv
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![dotenv](https://img.shields.io/badge/dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black)

---
## 📂 Project Structure

📦 Employee Management API

│-- 📁 controller   
│-- 📁 model        
│-- 📁 routes       
│-- 📄 index.js     
│-- 📄 .gitignore    
│-- 📄 package.json  
│-- 📄 README.md     

---

## 📌 API Endpoints
### 👨‍💼 Employee Routes
| Method | Endpoint | Description |
|--------|---------|-------------|
| `GET` | `/employees` | Get all employees |
| `POST` | `/employees` | Add new employee |
| `GET` | `/employees/position/:position` | Get Specific employee |
| `PUT` | `/employees/:id` | Update employee |
| `DELETE` | `/employees/:id` | Delete employee |

