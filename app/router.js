const { Router } = require('express');
const { service } = require('./modules/multer.config');
const { compress } = require('./index');

const router = Router();

router.get('/', (req, res) => {
    res.render('../app/views/index.ejs');
});

router.post('/processimage', service.single('file'), (req, res) => {
    compress(`public/uploads/${req.file.filename}`, 'build/img/', req, res);
});

module.exports = router;
