require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "amca",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define schema (structure of data)

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String },
});
const Event = mongoose.model("Festivo", eventSchema);

module.exports = Event;

// API endpoints

app.post("/api/amca", async (req, res) => {
  const { title, date, description, imageUrl } = req.body;
  try {
    const event = new Event({ title, date, description, imageUrl });
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: "Failed to create event" });
  }
});

app.get("/api/amca", async (req, res) => {
  try {
    const events = await Event.find({});
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch events" });
  }
});

app.put("/api/amca/:id", async (req, res) => {
  const { title, date, description, imageUrl } = req.body;
  try {
    const event = await Event.findByIdAndUpdate(
      req.params.id,
      { title, date, description, imageUrl },
      { new: true }
    );
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: "Failed to update event" });
  }
});

app.delete("/api/amca/:id", async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Event deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete event" });
  }
});

// Command server to listen on port

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
