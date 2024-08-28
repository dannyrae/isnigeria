const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  
  // Configure Cloudinary Storage for Multer
  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      format: async (req, file) => 'pdf',
      public_id: (req, file) => file.originalname.split('.')[0],
    },
  });

  const upload = multer({
    storage: storage,
    // fileFilter: (req, file, cb) => {
    //   if (file.mimetype !== 'application/pdf') {
    //     return cb(new Error('Only PDF files are allowed!'), false);
    //   }
    //   cb(null, true);
    // },
    // limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB limit
  });

  module.exports = upload;