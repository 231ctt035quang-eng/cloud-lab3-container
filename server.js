// // // // const http = require("http");

// // // // const PORT = 3000;

// // // // const server = http.createServer((req, res) => {
// // // //     res.writeHead(200, {
// // // //         "Content-Type": "text/html; charset=utf-8"
// // // //     });

// // // //     res.end(`
// // // //         <h1>LAB 3 - Docker GHCR</h1>
// // // //         <p>Web App Node.js đang chạy thành công!</p>
// // // //         <p>Container Docker hoạt động!</p>
// // // //     `);
// // // // });

// // // // server.listen(PORT, () => {
// // // //     console.log(`Server đang chạy tại http://localhost:${PORT}`);
// // // // });

// // // const express = require('express');
// // // const mongoose = require('mongoose');
// // // require('dotenv').config();

// // // const app = express();

// // // const PORT = process.env.PORT || 3000;
// // // const DATABASE_URL = process.env.DATABASE_URL;

// // // app.use(express.json());
// // // app.use(express.urlencoded({ extended: true }));

// // // const StudentSchema = new mongoose.Schema({
// // //     studentId: {
// // //         type: String,
// // //         required: true,
// // //         unique: true
// // //     },
// // //     fullName: {
// // //         type: String,
// // //         required: true
// // //     },
// // //     classCode: {
// // //         type: String,
// // //         required: true
// // //     },
// // //     createdAt: {
// // //         type: Date,
// // //         default: Date.now
// // //     }
// // // });

// // // const Student = mongoose.model('Student', StudentSchema);

// // // if (DATABASE_URL) {
// // //     mongoose.connect(DATABASE_URL)
// // //         .then(() => {
// // //             console.log('Ket noi MongoDB Atlas / Local thanh cong!');
// // //         })
// // //         .catch((err) => {
// // //             console.error('Loi ket noi MongoDB:', err.message);
// // //         });
// // // } else {
// // //     console.warn('CANH BAO: Chua cau hinh DATABASE_URL!');
// // // }

// // // app.get('/', async (req, res) => {
// // //     const dbStatus =
// // //         mongoose.connection.readyState === 1
// // //             ? 'Connected'
// // //             : 'Disconnected';

// // //     res.json({
// // //         status: 'success',
// // //         message: 'Chao mung ban den voi Cloud Computing Student Management API',
// // //         database_status: dbStatus,
// // //         timestamp: new Date().toISOString()
// // //     });
// // // });

// // // app.get('/api/students', async (req, res) => {
// // //     try {
// // //         const students = await Student
// // //             .find()
// // //             .sort({ createdAt: -1 });

// // //         res.json({
// // //             status: 'success',
// // //             count: students.length,
// // //             data: students
// // //         });
// // //     } catch (error) {
// // //         res.status(500).json({
// // //             status: 'error',
// // //             message: error.message
// // //         });
// // //     }
// // // });

// // // app.post('/api/students', async (req, res) => {
// // //     try {
// // //         const {
// // //             studentId,
// // //             fullName,
// // //             classCode
// // //         } = req.body;

// // //         if (!studentId || !fullName || !classCode) {
// // //             return res.status(400).json({
// // //                 status: 'fail',
// // //                 message: 'Vui long dien du: studentId, fullName, classCode'
// // //             });
// // //         }

// // //         const newStudent = new Student({
// // //             studentId,
// // //             fullName,
// // //             classCode
// // //         });

// // //         await newStudent.save();

// // //         res.status(201).json({
// // //             status: 'success',
// // //             data: newStudent
// // //         });

// // //     } catch (error) {
// // //         res.status(400).json({
// // //             status: 'error',
// // //             message: error.message
// // //         });
// // //     }
// // // });

// // // app.delete('/api/students/:id', async (req, res) => {
// // //     try {
// // //         const deleted = await Student.findOneAndDelete({
// // //             studentId: req.params.id
// // //         });

// // //         if (!deleted) {
// // //             return res.status(404).json({
// // //                 status: 'fail',
// // //                 message: 'Khong tim thay sinh vien'
// // //             });
// // //         }

// // //         res.json({
// // //             status: 'success',
// // //             message: 'Xoa sinh vien thanh cong'
// // //         });

// // //     } catch (error) {
// // //         res.status(500).json({
// // //             status: 'error',
// // //             message: error.message
// // //         });
// // //     }
// // // });

// // // app.listen(PORT, '0.0.0.0', () => {
// // //     console.log(`Server dang chay tai port ${PORT}`);
// // // });

// // const express = require('express');
// // const mongoose = require('mongoose');
// // require('dotenv').config();

// // const app = express();
// // const PORT = process.env.PORT || 3000;
// // const DATABASE_URL = process.env.DATABASE_URL;

// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));

// // const StudentSchema = new mongoose.Schema({
// //     studentId: { type: String, required: true, unique: true },
// //     fullName: { type: String, required: true },
// //     classCode: { type: String, required: true },
// //     createdAt: { type: Date, default: Date.now }
// // });

// // const Student = mongoose.model('Student', StudentSchema);

// // if (DATABASE_URL) {
// //     mongoose.connect(DATABASE_URL)
// //         .then(() => console.log('Ket noi MongoDB Atlas thanh cong!'))
// //         .catch((err) => console.error('Loi ket noi MongoDB:', err.message));
// // } else {
// //     console.warn('CANH BAO: Chua cau hinh DATABASE_URL!');
// // }

// // app.get('/', async (req, res) => {
// //     const dbStatus = mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected';
// //     res.json({
// //         status: 'success',
// //         message: 'Chao mung ban den voi Cloud Computing Student Management API',
// //         database_status: dbStatus,
// //         timestamp: new Date().toISOString()
// //     });
// // });

// // app.get('/api/students', async (req, res) => {
// //     try {
// //         const students = await Student.find().sort({ createdAt: -1 });
// //         res.json({ status: 'success', count: students.length, data: students });
// //     } catch (error) {
// //         res.status(500).json({ status: 'error', message: error.message });
// //     }
// // });

// // app.post('/api/students', async (req, res) => {
// //     try {
// //         const { studentId, fullName, classCode } = req.body;
// //         if (!studentId || !fullName || !classCode) {
// //             return res.status(400).json({ status: 'fail', message: 'Vui long dien du: studentId, fullName, classCode' });
// //         }
// //         const newStudent = new Student({ studentId, fullName, classCode });
// //         await newStudent.save();
// //         res.status(201).json({ status: 'success', data: newStudent });
// //     } catch (error) {
// //         res.status(400).json({ status: 'error', message: error.message });
// //     }
// // });

// // app.delete('/api/students/:id', async (req, res) => {
// //     try {
// //         const deleted = await Student.findOneAndDelete({ studentId: req.params.id });
// //         if (!deleted) {
// //             return res.status(404).json({ status: 'fail', message: 'Khong tim thay sinh vien' });
// //         }
// //         res.json({ status: 'success', message: 'Xoa sinh vien thanh cong' });
// //     } catch (error) {
// //         res.status(500).json({ status: 'error', message: error.message });
// //     }
// // });

// // app.listen(PORT, '0.0.0.0', () => {
// //     console.log(`Server dang chay tai port ${PORT}`);
// // });

// global.crypto = require('crypto'); // <--- THÊM DÒNG NÀY LÊN ĐẦU FILE

// const express = require('express');
// const mongoose = require('mongoose');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 3000;
// const DATABASE_URL = process.env.DATABASE_URL;

// // Middleware chuyển đổi dữ liệu JSON
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Khai báo Mongoose Schema & Model Quản lý Sinh viên
// const StudentSchema = new mongoose.Schema({
//     studentId: { type: String, required: true, unique: true },
//     fullName: { type: String, required: true },
//     classCode: { type: String, required: true },
//     createdAt: { type: Date, default: Date.now }
// });

// const Student = mongoose.model('Student', StudentSchema);

// // Kết nối Cơ sở dữ liệu MongoDB
// if (DATABASE_URL) {
//     mongoose.connect(DATABASE_URL)
//         .then(() => console.log('Ket noi MongoDB Atlas / Local thanh cong!'))
//         .catch((err) => console.error('Loi ket noi MongoDB:', err.message));
// } else {
//     console.warn('CANH BAO: Chua cau hinh DATABASE_URL!');
// }

// // REST API Endpoints
// app.get('/', async (req, res) => {
//     const dbStatus = mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected';
//     res.json({
//         status: 'success',
//         message: 'Chao mung ban den voi Cloud Computing Student Management API',
//         database_status: dbStatus,
//         timestamp: new Date().toISOString()
//     });
// });

// app.get('/api/students', async (req, res) => {
//     try {
//         const students = await Student.find().sort({ createdAt: -1 });
//         res.json({ status: 'success', count: students.length, data: students });
//     } catch (error) {
//         res.status(500).json({ status: 'error', message: error.message });
//     }
// });

// app.post('/api/students', async (req, res) => {
//     try {
//         const { studentId, fullName, classCode } = req.body;
//         if (!studentId || !fullName || !classCode) {
//             return res.status(400).json({ status: 'fail', message: 'Vui long dien du: studentId, fullName, classCode' });
//         }
//         const newStudent = new Student({ studentId, fullName, classCode });
//         await newStudent.save();
//         res.status(201).json({ status: 'success', data: newStudent });
//     } catch (error) {
//         res.status(400).json({ status: 'error', message: error.message });
//     }
// });

// app.delete('/api/students/:id', async (req, res) => {
//     try {
//         const deleted = await Student.findOneAndDelete({ studentId: req.params.id });
//         if (!deleted) {
//             return res.status(404).json({ status: 'fail', message: 'Khong tim thay sinh vien' });
//         }
//         res.json({ status: 'success', message: 'Xoa sinh vien thanh cong' });
//     } catch (error) {
//         res.status(500).json({ status: 'error', message: error.message });
//     }
// });

// app.listen(PORT, '0.0.0.0', () => {
//     console.log(`Server dang chay tai port ${PORT}`);
// });

const { webcrypto } = require('node:crypto');
if (!globalThis.crypto) globalThis.crypto = webcrypto;

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const StudentSchema = new mongoose.Schema({
    studentId: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    classCode: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Student = mongoose.model('Student', StudentSchema);

if (DATABASE_URL) {
    mongoose.connect(DATABASE_URL)
        .then(() => console.log('Ket noi MongoDB Atlas thanh cong!'))
        .catch((err) => console.error('Loi ket noi MongoDB:', err.message));
} else {
    console.warn('CANH BAO: Chua cau hinh DATABASE_URL!');
}

app.get('/', async (req, res) => {
    const dbStatus = mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected';
    res.json({
        status: 'success',
        message: 'Chao mung ban den voi Cloud Computing Student Management API',
        database_status: dbStatus,
        timestamp: new Date().toISOString()
    });
});

app.get('/api/students', async (req, res) => {
    try {
        const students = await Student.find().sort({ createdAt: -1 });
        res.json({ status: 'success', count: students.length, data: students });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
});

app.post('/api/students', async (req, res) => {
    try {
        const { studentId, fullName, classCode } = req.body;
        if (!studentId || !fullName || !classCode) {
            return res.status(400).json({ status: 'fail', message: 'Vui long dien du: studentId, fullName, classCode' });
        }
        const newStudent = new Student({ studentId, fullName, classCode });
        await newStudent.save();
        res.status(201).json({ status: 'success', data: newStudent });
    } catch (error) {
        res.status(400).json({ status: 'error', message: error.message });
    }
});

app.delete('/api/students/:id', async (req, res) => {
    try {
        const deleted = await Student.findOneAndDelete({ studentId: req.params.id });
        if (!deleted) {
            return res.status(404).json({ status: 'fail', message: 'Khong tim thay sinh vien' });
        }
        res.json({ status: 'success', message: 'Xoa sinh vien thanh cong' });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server dang chay tai port ${PORT}`);
});