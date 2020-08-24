// kita membutuhkan denpedensi 
const express = require('express');

const app = express();

// set tampilan mesin untuk nodejs
app.set('view engine', 'ejs');

// membuat router untuk "/" dan render file 'index.ejs' ke browser.
// buat variabel untuk halaman web kita
app.get("/", function (request, resolve) {
    var title = "Speech Box - Text to Speech";
    resolve.render("index",{
        title: title
    })
});

app.get("/speech2text", function (request, resolve) {
    var title = "Speech Box - Speech to Text";
    resolve.render("speech2text", {
        title: title
    })
});

app.get("/contact", function (request, resolve) {
    var title = "Contact us";
    resolve.render("contact", {
        title: title
    })
});

app.use(express.static('public'))

// nyalakan servernua
app.listen(3000, function () {
    console.log('Server berjalan diport 3000');
});