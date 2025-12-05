# 💼 Payroll Management System — Full Stack MERN Application  
A complete payroll automation platform built using the **MERN Stack (MongoDB, Express, React, Node.js)**.  
This system helps organizations manage employees, salaries, attendance, payroll generation, and payslip downloads efficiently.

---

## 📖 Table of Contents
- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [Folder Structure](#-folder-structure)
- [Setup & Installation](#️-setup--installation)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
- [Core Modules Explained](#-core-modules-explained)
- [How Payroll is Calculated](#-how-payroll-is-calculated)
- [Screenshots](#-screenshots)
- [Future Improvements](#-future-improvements)
- [Contributing](#-contributing)
- [Author](#-author)

---

## 📝 About the Project

The **Payroll Management System** automates salary processing and HR workflows.  
It allows administrators and accountants to manage salaries, attendance, employees, and payroll generation with ease.

Employees get their own portal to:
- View monthly attendance  
- Download payslips in PDF format  
- Check salary breakdown  

This project is **modular, scalable, and secure**, built with best practices for MERN applications.

---

## ⭐ Key Features

### 🔐 Role-Based Authentication
- JWT secure authentication
- Password hashing using bcrypt
- Roles supported:
  - **Admin** (full access)
  - **Accountant** (salary, attendance, payroll)
  - **Employee** (payslip, attendance)

---

### 👨‍💼 Employee Management (Admin)
- Add or view employees  
- Auto-generate Employee Code (e.g., EMP54321)  
- Link User → Employee profile  

---

### 💰 Salary Module (Admin + Accountant)
Configure salary structure with:
- Basic Pay  
- HRA  
- DA  
- Other Allowances  
- PF % deduction  
- Tax % deduction  

---

### 🕒 Attendance Management
- Mark attendance using email / empCode / MongoId  
- Store working days & present days  
- Employees can view their attendance  

---

### 📊 Payroll Generation
- Generate monthly payroll for **all employees**
- Automatically calculates:
  - Gross Salary  
  - Total Deductions  
  - Net Salary  
- Stores payroll in database for future payslip downloads  

---

### 🧾 Payslip Download
- Employees can fetch their payslip for any month  
- PDF download using jsPDF  
- Includes:
  - Name  
  - Salary breakdown  
  - Net take-home  
  - Attendance summary  

---

## 🧰 Tech Stack

### **Frontend**
- React  
- Tailwind CSS  
- Axios  
- jsPDF  

### **Backend**
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- JWT Authentication  
- bcrypt  

---

## 🏗 System Architecture

React (Frontend)
|
| REST API (Axios)
v
Node + Express (Backend)
|
| Mongoose ORM
v
MongoDB Atlas (Database)


---

## 📁 Folder Structure

Payroll-Management-System/
│
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ ├── middlewares/
│ │ ├── db/
│ │ ├── app.js
│ │ ├── index.js
│ └── package.json
│
└── frontend/
├── src/
│ ├── components/
│ ├── pages/
│ ├── routes/
│ ├── api/
│ ├── App.jsx
│ ├── main.jsx
└── package.json


---

## 🛠️ Setup & Installation

### 1️⃣ Clone repository
```bash
git clone https://github.com/<your-username>/Payroll-Management-System.git

##Backend setup :
cd backend
npm install

##Frontend setup :
cd frontend
npm install

#Create .env file inside backend folder

PORT=5000
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
CORS_ORIGIN=*


## Running the website :
#Run backend :
cd backend
npm run dev
#Run frontend:
cd frontend
npm run dev
## 📡 API Endpoints

### 🔐 Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |

---

### 👥 Employees
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/employees` | List all employees |
| POST | `/api/employees` | Add new employee |

---

### 💰 Salary
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/salary` | Save or update salary structure |
| GET | `/api/salary/:empId` | Get salary for employee |

---

### 🕒 Attendance
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/attendance` | Mark attendance |
| GET | `/api/attendance/my` | Logged-in user's attendance |

---

### 📊 Payroll
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/payroll/generate/:month` | Generate payroll for all employees |
| GET | `/api/payroll/my/:month` | Get logged-in user's payslip |

---

## 📈 How Payroll is Calculated

### **1. Gross Salary**
grossSalary = basic + hra + da + otherAllowances


### **2. Deductions**
pf = (pfRate / 100) * basic
tax = (taxRate / 100) * grossSalary


### **3. Net Salary**
netSalary = grossSalary - (pf + tax)


All payroll entries are stored in the **payroll** collection for historical reference and payslip generation.

---

## 🚀 Future Improvements

- Export payroll as Excel  
- Company-branded payslip PDF  
- Automatic email payslip delivery  
- Leave Management System  
- Admin analytics dashboard  
- Automatic attendance from biometric device  
