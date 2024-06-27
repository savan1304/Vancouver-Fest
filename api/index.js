import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import pkg from "@prisma/client";
import morgan from "morgan";
import cors from "cors";
import { auth } from "express-oauth2-jwt-bearer";
import axios from 'axios';

const requireAuth = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER,
  tokenSigningAlg: "RS256",
});

const app = express();

app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
axios.defaults.baseURL = process.env.REACT_APP_API_URL;


const { PrismaClient } = pkg;
const prisma = new PrismaClient();

// this is a public endpoint because it doesn't have the requireAuth middleware
app.get("/ping", (req, res) => {
  res.send("pong");
});

app.post("/verify-user", requireAuth, async (req, res) => {
  const auth0Id = req.auth.payload.sub; 
  const email = req.auth.payload[`${process.env.AUTH0_AUDIENCE}/email`];
  let { name, address, dateOfBirth, country } = req.body;
  dateOfBirth = new Date(dateOfBirth +  "T00:00:00Z")

  let user = await prisma.user.findUnique({
    where: { auth0Id },
  });
  console.log("name:", name)
  console.log("address:", address)
  console.log("dateOfBirth:", dateOfBirth)
  console.log("country:", country)


  if (!user) {
    user = await prisma.user.create({
      data: { email, auth0Id, name, address, dateOfBirth, country },
    });
  }else {
    // Update the existing user
    user = await prisma.user.update({
      where: { auth0Id },
      data: { name, address, dateOfBirth, country },
    });
  }

  res.json({ id: user.id, email: user.email, auth0Id: user.auth0Id, name: user.name });
});

app.get("/api/user-profile", requireAuth, async (req, res) => {
  const auth0Id = req.auth.payload.sub;
  console.log(req.auth.payload)
  try {
    const user = await prisma.user.findUnique({
      where: { auth0Id },
    });

    const userProfile = await prisma.user.findUnique({
      where:{
        id : user.id,
      }
    })

    if (userProfile) {
      res.json(userProfile);
    } else {
      res.status(404).json({ error: "User profile not found" });
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Failed to fetch user profile" });
  }
});

app.post("/api/user-profile/:id", requireAuth, async (req, res) => {
  const { id } = req.params;
  const { name, address, dateOfBirth, country } = req.body;

  try {
    const updatedUserProfile = await prisma.user.upsert({
      where: { id: parseInt(id) },
      update: { name, address, dateOfBirth, country },
      create: { id: parseInt(id), email: req.auth.payload.email, name, address, dateOfBirth, country },
    });

    res.json(updatedUserProfile);
  } catch (error) {
    res.status(500).json({ error: "Failed to update user profile" });
  }
});


app.get('/api/Festivals', async (req, res) => {
  try {
    const Festivals = await prisma.Festival.findMany();
    res.json(Festivals);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Festivals' });
  }
});

app.get('/api/Festival/:id', async (req, res) => {
  console.log(req.params.id, "id")
  try {
    const Festival = await prisma.festival.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        cafes: true, // Include related cafes
      },
    });
    if (Festival) {
      res.json(Festival);
    } else {
      res.status(404).json({ error: 'Festival not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Festival' });
  }
});

app.get('/api/Cafes', async (req, res) => {
  try {
    const Cafes = await prisma.Cafe.findMany();
    res.json(Cafes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Cafes' });
  }
});

app.get('/api/Cafe/:id', async (req, res) => {
  try {
    const Cafe = await prisma.cafe.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        foodItems: true,
        comments: true,
      },
    });
    if (Cafe) {
      res.json(Cafe);
    } else {
      res.status(404).json({ error: 'Cafe not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Cafe' });
  }
});

app.post('/api/comments', async (req, res) => {
  const { name, message, cafeId } = req.body;

  try {
      const newComment = await prisma.comment.create({
          data: {
              name,
              message,
              cafeId : parseInt(cafeId),  
          },
      });
      res.status(201).json(newComment);
  } catch (error) {
    console.error(error);
      res.status(500).json({ error: 'Failed to save comment' });
  }
});


app.listen(8000, () => {
  console.log("Server running on http://localhost:8000 🎉 🚀");
});