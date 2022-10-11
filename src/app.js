const express = require('express');
const path = require('path');
const app = express();
require("./db/conn");
const Register = require("./models/registers");
const hbs = require("hbs");
const bcrypt = require('bcryptjs');
const port = process.env.PORT || 3000;

//built in middleware
const staticPath = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));  //get the input value of form.
app.use(express.static(staticPath));

// to set the view engine
    app.set("view engine", "hbs");
    app.set("views", template_path);
    hbs.registerPartials(partials_path);



// templete engine route

app.get("", (req, res) =>{
    res.render("index");
});
app.get("/login", (req,res)=>{
    res.render("login");
});
app.get("/register", (req,res)=>{
    res.render("register");
});
app.get("/about", (req,res)=>{
    res.render("about");
});
app.get("/contact", (req,res)=>{
    res.render("contact");
});
app.get("/gallery", (req,res)=>{
    res.render("gallery");
});
app.get("/packages", (req,res)=>{
    res.render("packages");
});
app.get("/booknow", (req,res)=>{
    res.render("booknow");
});
app.get("/chart", (req,res)=>{
    res.render("chart");
});



// create new user in database
app.post("/register", async(req,res)=>{
    try{
    //   console.log(req.body.username);
    //   res.send(req.body.username);
    const password =req.body.password;
    const cpassword = req.body.passwords;

    if(password ==cpassword){
        const costumerDetail = new Register({
            username: req.body.username,
            email: req.body.email,
            phone: req.body.phone,
            password: password,
            passwords: cpassword
        });

        //password hash
        //first we need to install bcryptjs== npm i becryptjs


        const registered = await costumerDetail.save();
        const arrdata = [registered];
        res.status(201).render("index");
    }else{
        res.send("password not matching");
    }
    } catch(error) {
        res.status(400).send(error);
    }
});


//login check
app.post("/login", async(req,res) =>{
    try{
        const email = req.body.email;
        const password = req.body.password;

        const useremail =  await Register.findOne({email:email});
        const isMatch = await bcrypt.compare(password, useremail.password);

        // res.send(useremail);
        // console.log(useremail);
        if(isMatch){
            res.status(201).render("packages");
        }
        else{
            res.send("Invalid email or password.");
        }

    } catch(error){
        res.status(400).send("Invalid email or password.");
    }
});

//booking check
app.post("/booknow", async(req,res) =>{
    try{
        const email = req.body.email;
        const phone = req.body.phone;
        const useremail =  await Register.findOne({email:email});
        const isMatchEmail = await bcrypt.compare(phone, useremail.phone);

        // res.send(useremail);
        // console.log(useremail);
        if(isMatchEmail){
            res.status(201).render("about");
        }
        else{
            res.send("Invalid emasil");
        }

    } catch(error){
        res.status(400).send("Invalid email");
    }
});

app.listen(port,()=>{
    console.log(`listening on port no ${port}`);
});