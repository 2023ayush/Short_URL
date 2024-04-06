const express = require("express");
const urlRoute = require("./routes/url.js");
const app = express();
const PORT = 8000;
app.use("/url", urlRoute);
app.listen(PORT, () => console.log(`Server Started at port:${PORT}`));
