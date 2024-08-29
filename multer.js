const multer = require("multer");
const path = require("path");
const fs = require("fs")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = path.join(__dirname, "uploads");
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }

        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + "-" + file.originalname);
    },
});

// File validation

// const fileFilter = (req, file, cb) => {
//     if (file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
//         console.log(path.join(__dirname, 'uploads'))
//         cb (null, true)
//     } else {
//         cb ({message: 'Unsuported file format'}, false)
//     }
// }

const fileFilter = (req, file, cb) => {
    if (file.mimetype !== "application/pdf") {
        return cb(new Error("Only PDF files are allowed!"), false);
    }
    cb(null, true);
};

const uploads = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 },
    fileFilter: fileFilter,
});

module.exports = uploads;
