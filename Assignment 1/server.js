const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());

// Load business rules
const rules = JSON.parse(fs.readFileSync("rules.json", "utf8"));

app.post("/processPR", (req, res) => {
  let pr = req.body;

  rules.approvalRules.forEach(rule => {
    if (rule.condition.includes("totalAmount")) {
      const cond = eval(pr.totalAmount + rule.condition.replace("totalAmount", ""));
      if (cond && rule.action === "autoApprove") {
        pr.status = rule.setStatus;
      }
    }

    if (rule.condition.includes("deliveryDays")) {
      const cond = eval(pr.deliveryDays + rule.condition.replace("deliveryDays", ""));
      if (cond && rule.action === "setUrgency") {
        pr.urgency = rule.urgency;
      }
    }
  });

  res.json(pr);
});

app.listen(3000, () => console.log("Assignment1 running on port 3000"));
