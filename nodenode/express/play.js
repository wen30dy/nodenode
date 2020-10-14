// const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});
// app.use((req,res,next)=>{
//     console.log("in the middleware");
//     next();
// })
// app.use('/',(req,res,next)=>{
//     // console.log("in another iddleware");
//     next();
// });


// const routes = require('./routes');
// console.log(routes.someText);
// const server = http.createServer(routes.handler);
// const server = http.createServer(app);
app.listen(8000);

// const person={
//     name:'max',
//     age:29,
//     great(){
//         console.log("hi, i am "+this.name);
//     }
// };
// person.great();

// const hobbies=['sports','cooking'];
// console.log(hobbies.map(hobby=>('hobby:'+hobby)));
// console.log(hobbies);
// const copyhobbies=[...hobbies];
// console.log(copyhobbies);