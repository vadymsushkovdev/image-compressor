const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'public/uploads');
    },
    filename(req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()
        }${path.extname(file.originalname)}`);
    },
});
const service = multer({ storage });

module.exports = { service };
