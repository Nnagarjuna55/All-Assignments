const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/procurement", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("DB Connection Failed:", err));

// Schemas & Models
const PurchaseOrder = mongoose.model(
  "PurchaseOrder",
  new mongoose.Schema({
    vendor: String,
    amount: Number,
  })
);

const Invoice = mongoose.model(
  "Invoice",
  new mongoose.Schema({
    vendor: String,
    paidAmount: Number,
  })
);

// POST API → Add a Purchase Order
app.post("/purchaseOrder", async (req, res) => {
  try {
    const order = new PurchaseOrder(req.body);
    await order.save();
    res.status(201).json({ message: "Purchase Order added!", data: order });
  } catch (err) {
    res.status(500).json({ message: "Error adding Purchase Order", error: err });
  }
});

// POST API → Add an Invoice
app.post("/invoice", async (req, res) => {
  try {
    const invoice = new Invoice(req.body);
    await invoice.save();
    res.status(201).json({ message: "Invoice added!", data: invoice });
  } catch (err) {
    res.status(500).json({ message: "Error adding Invoice", error: err });
  }
});

// GET API → Vendor Spend Report
app.get("/vendorReport", async (req, res) => {
  try {
    const poTotals = await PurchaseOrder.aggregate([
      { $group: { _id: "$vendor", poTotal: { $sum: "$amount" } } },
    ]);

    const invoiceTotals = await Invoice.aggregate([
      { $group: { _id: "$vendor", invoiceTotal: { $sum: "$paidAmount" } } },
    ]);

    const report = poTotals.map((po) => {
      const invoice =
        invoiceTotals.find((inv) => inv._id === po._id) || {
          invoiceTotal: 0,
        };
      return {
        vendor: po._id,
        poTotal: po.poTotal,
        invoiceTotal: invoice.invoiceTotal,
      };
    });

    res.json(report);
  } catch (err) {
    res.status(500).json({ message: "Error fetching report", error: err });
  }
});

app.listen(3001, () => console.log("Assignment2 running on port 3001"));
