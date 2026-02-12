import e from "express";
import cors from "cors";

let data = []

let app = e();
app.use(cors())

app.use(e.json()); 


app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    console.log("Body:", req.body);
    next();
})


app.get("/", (req, res) => {
  res.send("Hello World");
});


app.get("/me", (req, res) => {
const { username } = req.query;
for (let user of data){
if(user.username === username){
return res.send({ status: true, message: "User exists" });
}
}

return res.status(404).send({ status: false, message: "User not found" })
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    
    let user;
    for (let index = 0; index < data.length; index++) {
        if (data[index].username === username) {
            user = data[index];
        }
    }

    if(user){
        if(user.password === password){
            return res.send({ status: true, message: "Login successful" });
        }else{
            return res.status(401).send({ status: false, message: "Invalid password" });
        }
    }
    data.push({ username, password });
    res.send({ status: true, message: "User registered successfully" });
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})