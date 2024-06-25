import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import pkg from "@prisma/client";
import morgan from "morgan";
import cors from "cors";
import { auth } from "express-oauth2-jwt-bearer";

// this is a middleware that will validate the access token sent by the client
const requireAuth = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER,
  tokenSigningAlg: "RS256",
});

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

// this is a public endpoint because it doesn't have the requireAuth middleware
app.get("/ping", (req, res) => {
  res.send("pong");
});

// // add your endpoints below this line
// app.post("/verify-user", requireAuth, async (req, res) => {
//   const auth0Id = req.auth.payload.sub;
//   const email = req.auth.payload[`${process.env.AUTH0_AUDIENCE}/email`];
//   const name = req.auth.payload[`${process.env.AUTH0_AUDIENCE}/password`];

//   const user = await prisma.user.findUnique({
//     where: {
//       auth0Id,
//     },
//   });

//   if (user) {
//     res.json(user);
//   } else {
//     const newUser = await prisma.user.create({
//       data: {
//         email,
//         auth0Id,
//         password,
//       },
//     });

//     res.json(newUser);
//   }
// });
// app.post("/verify-user", requireAuth, async (req, res) => {
//   const auth0Id = req.auth.payload.sub;
//   const email = req.auth.payload[`${process.env.AUTH0_AUDIENCE}/email`];
//   const name = req.auth.payload[`${process.env.AUTH0_AUDIENCE}/name`];

//   const user = await prisma.user.findUnique({
//     where: {
//       auth0Id,
//     },
//   });

//   if (user) {
//     res.json(user);
//   } else {
//     const newUser = await prisma.user.create({
//       data: {
//         email,
//         auth0Id,
//         name,
//       },
//     });

//     res.json(newUser);
//   }
// });
// Endpoint to fetch user profile
app.post("/verify-user", requireAuth, async (req, res) => {
  const auth0Id = req.auth.payload.sub;
  const email = req.auth.payload[`${process.env.AUTH0_AUDIENCE}/email`];

  let user = await prisma.user.findUnique({
    where: { auth0Id },
  });

  if (!user) {
    user = await prisma.user.create({
      data: { email, auth0Id },
    });
  }

  res.json({ id: user.id, email: user.email, auth0Id: user.auth0Id, name: user.name });
});

app.get("/api/user-profile/:id", requireAuth, async (req, res) => {
  const { id } = req.params;
  try {
    const userProfile = await prisma.user.findUnique({
      where: { auth0Id: id },
    });
    if (userProfile) {
      res.json(userProfile);
    } else {
      res.status(404).json({ error: "User profile not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user profile" });
  }
});

// Endpoint to update user profile
app.post("/api/user-profile/:id", requireAuth, async (req, res) => {
  const { id } = req.params;
  const { name, address, dateOfBirth, country } = req.body;

  try {
    const updatedUserProfile = await prisma.user.upsert({
      where: { auth0Id: id },
      update: { name, address, dateOfBirth, country },
      create: { auth0Id: id, email: req.auth.payload.email, name, address, dateOfBirth, country },
    });

    res.json(updatedUserProfile);
  } catch (error) {
    res.status(500).json({ error: "Failed to update user profile" });
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  // Validate user credentials
  const token = generateTokenForUser(user); // Implement this function to generate a JWT or session token
  res.cookie('authToken', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Ensure the cookie is only sent over HTTPS
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });
  res.status(200).send('Login successful');
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
    const Festival = await prisma.Festival.findUnique({
      where: { id: parseInt(req.params.id) },
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
  console.log(req.params.id, "id")
  try {
    const Cafe = await prisma.Cafe.findUnique({
      where: { id: parseInt(req.params.id) },
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


app.listen(8000, () => {
  console.log("Server running on http://localhost:8000 🎉 🚀");
});