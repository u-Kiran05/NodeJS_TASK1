
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

