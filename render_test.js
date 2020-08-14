let express = require('express');
let firebase = require('firebase')
let app = express();
var firebaseConfig = {
    apiKey: "AIzaSyDvnWl8o90PKcmNqJnVmn3sgp0wOEfLYzg",
    authDomain: "raytu-ccd79.firebaseapp.com",
    databaseURL: "https://raytu-ccd79.firebaseio.com",
    projectId: "raytu-ccd79",
    storageBucket: "raytu-ccd79.appspot.com",
    messagingSenderId: "717187203956",
    appId: "1:717187203956:web:4092966ad8cb38e66b2221",
    measurementId: "G-P079NKZEFW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

app.set('view engine', 'ejs');
app.get('/', async(req, res) => {
    let data = await db.collection("classA").get();
    let userArr = [];
    data.docs.forEach((doc) => {
        userArr.push(doc.data().name);
    })
    res.render("default", {
        // users: ["Alice", "Bob", "Fisheep", "Fiona"],
        users: userArr,
        title: "This is root page!"
    });
});
app.listen(3000, () => {
    console.log("render_test server is running at http://127.0.0.1:3000")
})