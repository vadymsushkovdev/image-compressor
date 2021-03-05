module.exports = {

    download(res, path) {
        res.download(path, (err) => {
            if (err) throw err;
        });
    },

};
