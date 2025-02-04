import express from 'express';
import fs from 'fs';
import path from 'path';
import authMiddleware from '../middleware/authMiddleware.js';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, '../db/db.json');

// שליפת כל המתכונים
router.get('/', (req, res) => {
    const db = JSON.parse(fs.readFileSync(dbPath));
    res.json(db.recipes);
});

// הוספת מתכון (רק למשתמש מחובר)
router.post('/', authMiddleware, (req, res) => {
    const { title, description, ingredients, instructions } = req.body;
    //////
    console.log(title + "pppppppppppppppppppppp");
    console.log(description);
    console.log(ingredients);
    console.log(instructions);
    /////////////////
    const db = JSON.parse(fs.readFileSync(dbPath));
    const newRecipe = {
        id: Date.now(), title, description, authorId: Number(req.header('user-id')), ingredients, instructions,
    };
    db.recipes.push(newRecipe);
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
    return res.status(201).json({ message: "Recipe added", recipe: newRecipe });
});

export default router;
