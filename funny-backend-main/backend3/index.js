const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Organization = require('./models/Organization');
const Opportunity = require('./models/Opportunity');
require('dotenv').config();

const authRoutes = require('./auth');  // Import the router

const app = express();
app.use(cors({
  origin: "http://localhost:5173"
}))
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(1000, () => {
  console.log('Server is running on port 1000');
});

// User Register route
app.post('/user_register', async (req, res) => {
  const { name, password } = req.body;
  try {
    const existingUser = await User.findOne({ name });
    if (existingUser) {
      return res.send("Taken");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, password: hashedPassword });
    await user.save();
    res.send("Success");
  } catch (error) {
    console.log(error);
    res.send("Error");
  }
});

// User Login route
app.post('/user_login', async (req, res) => {
  const { name, password } = req.body;
  try {
    const user = await User.findOne({ name });
    if (!user) {
      return res.send("None");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.send("Wrong");
    }
    res.send("Success")
  } catch (error) {
    res.send("Error");
  }
});

// Organization Register route
app.post('/org_register', async (req, res) => {
  const { name, password } = req.body;
  try {
    const existingOrg = await Organization.findOne({ name });
    if (existingOrg) {
      return res.send("Taken");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const organization = new Organization({ name, password: hashedPassword});
    await organization.save();
    res.send("Success");
  } catch (error) {
    res.send("Error");
  }
});

// Organization Login route
app.post('/org_login', async (req, res) => {
  const { name, password } = req.body;
  try {
    const org = await Organization.findOne({ name });
    if (!org) {
      return res.send("None");
    }
    const isMatch = await bcrypt.compare(password, org.password);
    if (!isMatch) {
      return res.send("Wrong");
    }
    res.send("Success");
  } catch (error) {
    res.send("Error");
  }
});

// Create Opportunity route
app.post('/create_opportunity', async (req, res) => {
  const { title, description, organization } = req.body;
  try {
    const opportunity = new Opportunity({ title, description, organization});
    await opportunity.save();
    res.send("Success");
  } catch (error) {
    res.send("Error");
  }
});

app.post('/filter_opportunity', async (req, res) => {
  const filter = req.body;
  try {
    const opportunities = await Opportunity.find(filter);
    res.json(opportunities);
  } catch (error) {
    console.log(error);
    res.send("Error");
  }
});
