# 📞 Contact Management APP

A **Node.js and Express-based RESTful API** for managing contacts, where users can **register, log in, and perform CRUD operations** on their own contacts. Each user has **secure access** to only their contacts using JWT authentication.

---

## 🚀 Features  
✅ User **Registration & Login** with JWT authentication  
✅ **CRUD operations** (Create, Read, Update, Delete) on contacts  
✅ **Secure authentication** using `bcrypt` and `jsonwebtoken`  
✅ **Access control** – Users can only manage their own contacts  
✅ **MongoDB database** using Mongoose ODM  

---

## 🛠️ Tech Stack  

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB, Mongoose  
- **Authentication:** JWT, bcrypt  
- **Environment Variables:** dotenv  
- **Error Handling & Validation:** express-async-handler, validator  

---

## 📂 Project Structure  

📁 Backend <br/>
┣ 📂 config <br/>
┃ ┣ 📄 db.js # Database connection <br/>
┣ 📂 controllers <br/>
┃ ┣ 📄 userController.js # User authentication logic <br/>
┃ ┣ 📄 contactController.js # CRUD operations for contacts <br/>
┣ 📂 middleware <br/>
┃ ┣ 📄 authMiddleware.js # JWT authentication middleware <br/>
┣ 📂 models<br/>
┃ ┣ 📄 userModel.js # User schema <br/>
┃ ┣ 📄 contactModel.js # Contact schema <br/>
┣ 📂 routes <br/>
┃ ┣ 📄 userRoutes.js # User authentication routes <br/>
┃ ┣ 📄 contactRoutes.js # Contact management routes <br/>
┣ 📄 .env # Environment variables (CONFIDENTIAL) <br/>
┣ 📄 .gitignore # Ignore sensitive files <br/>
┣ 📄 server.js # Entry point of the application <br/>
┣ 📄 package.json # Project dependencies <br/>
┣ 📄 README.md # Documentation <br/>



## ⚙️ Installation & Setup  

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-username/Contact_Management_App.git
cd Contact_Management_App;
