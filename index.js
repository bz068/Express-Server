const express = require("express");
const colors = require("colors");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(
    `Server Running on PORT: https://localhost:${PORT}`.underline.brightYellow
      .bold
  )
);

// ROUTES
app.get("/", function (req, res) {
  res.send("API READY");
});
