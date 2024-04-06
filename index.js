const express = require("express");
const { connectToMongoDB } = require("./connect.js");
const urlRoute = require("./routes/url.js");
const URL = require("./models/url.js");
const app = express();
const PORT = 8000;

connectToMongoDB(
  "mongodb+srv://guragainaayush7:uGa8zKUpLX3PtyUJ@cluster0.zmn4btw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
).then(() => console.log("Mongodb Connected"));
app.use(express.json());
app.use("/url", urlRoute);
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});
app.listen(PORT, () => console.log(`Server Started at port:${PORT}`));
