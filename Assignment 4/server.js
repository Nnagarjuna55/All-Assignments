const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/procurement");

const PR = mongoose.model("PR", new mongoose.Schema({
  plant: String,
  totalAmount: Number
}));

// GET PRs with role-based filtering (no Redis)
app.get("/getPRs", async (req, res) => {
  try {
    // Directly read from permissions.json
    let permissions = JSON.parse(fs.readFileSync("permissions.json", "utf8"));

    const { allowedPlants, maxAmount } = permissions.dataPermissions;

    const prs = await PR.find({
      plant: { $in: allowedPlants },
      totalAmount: { $lte: maxAmount }
    });

    res.json(prs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST new PR
app.post("/addPR", async (req, res) => {
  try {
    const pr = new PR(req.body);
    await pr.save();
    res.json({ message: "PR added successfully", pr });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3002, () => console.log("Assignment4 running on port 3002"));
