const path = require('path')

const htmlController = {
    showMainPage: function (req, res) {
        res.sendFile(path.join(__dirname, "../public/thought42.html"));
    },
    showThoughtPage: function (req, res) {
        res.sendFile(path.join(__dirname, "../public/thoughttank.html"));
    },
    showArchivePage: function (req, res) {
        res.sendFile(path.join(__dirname, "../public/archive.html"));
    }
}

module.exports = htmlController;

