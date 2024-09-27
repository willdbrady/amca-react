require("dotenv").config();
const userRoutes = require("./auth/userRoutes");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
const User = require("./auth/userModel");

// Register User (example route)
app.post("/api/users", async (req, res) => {
  const { email, password, username } = req.body;
  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create and save user
    user = new User({ email, password: hashedPassword, username });
    await user.save();

    res.json({ msg: "User registered successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

const jwt = require("jsonwebtoken");

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if the user exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Compare the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Generate JWT (JSON Web Token)
    const payload = { userId: user._id };
    const token = jwt.sign(payload, "secretKey", { expiresIn: "1h" });

    res.json({ token });
  } catch (err) {
    res.status(500).send("Server error");
  }
});

const authMiddleware = (req, res, next) => {
  const token = req.header("x-auth-token");
  console.log("Token received:", token);
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }
  try {
    const decoded = jwt.verify(token, "secretKey"); // Use the same secret key used for signing the token
    req.user = decoded.userId;
    next();
  } catch (err) {
    return res.status(401).json({ msg: "Token is not valid" });
  }
};

// Example of a protected route
app.get("/protected", authMiddleware, (req, res) => {
  res.json({ msg: "Welcome to the protected route!" });
});
// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "amca",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define schema for events/festivos

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String },
});
const Event = mongoose.model("Festivo", eventSchema);

module.exports = Event;

// API endpoints for Home component

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
