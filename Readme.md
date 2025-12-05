# Payroll Management System — MERN Stack

A full-stack **Payroll Management System** built using the **MERN** stack (MongoDB, Express, React, Node.js). The system automates employee management, attendance tracking, salary structure configuration, payroll generation, and payslip downloads.

---

## 📌 Features

### 🔐 Role-Based Authentication
- JWT authentication  
- Password hashing with bcrypt  
- Roles: **Admin**, **Accountant**, **Employee**

### 👥 Employee Management
- Add and view employees  
- Auto-generate Employee Code (e.g., `EMP12345`)  
- Link User → Employee profile  

### 💰 Salary Structure
- Basic, HRA, DA, Allowances  
- PF % and Tax % deductions  
- Admin/Accountant can update anytime  

### 🕒 Attendance System
- Mark attendance using Email / empCode  
- Store working & present days  
- Employees can view their own attendance  

### 📊 Payroll Generation
- Generate salary for all employees for any month  
- Automatic salary calculations:
  - Gross Salary  
  - PF + Tax deductions  
  - Net Salary  
- Stored in MongoDB for future reference  

### 🧾 Payslip Download
- Employees can download PDF payslips  
- Shows salary breakdown and attendance summary  

---

## 🧰 Tech Stack

### Frontend
- React  
- Tailwind CSS  
- Axios  
- jsPDF  

### Backend
- Node.js  
- Express.js  
- MongoDB Atlas  
- Mongoose  
- JWT + bcrypt  

---

## ⚙️ Setup & Installation

### 1️⃣ Clone Repository
```bash
git clone https://github.com/<your-username>/Payroll-Management-System.git
