const express = require("express");
const { connectToMongoDB } = require("./connect.js");
const urlRoute = require("./routes/url.js");
const app = express();
const PORT = 8000;

connectToMongoDB(
  "mongodb+srv://guragainaayush7:uGa8zKUpLX3PtyUJ@cluster0.zmn4btw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
).then(() => console.log("Mongodb Connected"));

app.use("/url", urlRoute);
app.listen(PORT, () => console.log(`Server Started at port:${PORT}`));
