const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./server/postgres");

//middleware
app.use(cors());
app.use(express.json());

var recipeList = [];

//post route
app.post("/recipes", async (req, res) => {
    recipeList.push(req.body);
    const rid = Date.now() % 10000000;
    const rtitle = req.body.recipeName;
    const ringredients = req.body.ingredients;
    const rdirections = req.body.directions;
    const lastModified = req.body.lastModified;
    const iid = Date.now() % 1000000;
    try {
        const addRecipeQuery = "INSERT INTO recipes VALUES ($1, $2, $3, $4)";
        const addIngredients = "INSERT INTO ingredients VALUES ($1, $2, $3)";
        const resultR = await pool.query(addRecipeQuery, [
            rid,
            rtitle,
            rdirections,
            lastModified,
        ]);
        const resultI = await pool.query(addIngredients, [
            iid,
            rid,
            ringredients,
        ]);
        res.json(resultR.rows[0]);
        res.json(resultI.rows[0]);
        res.redirect("/recipes");
    } catch (err) {
        console.error(err.message);
    }
});

//get all recipe titles route
app.get("/recipes", async (req, res) => {
    try {
        const allTitles = await pool.query("SELECT * FROM recipes");
        res.json(allTitles.rows);
    } catch (err) {
        console.error(err);
    }
});

//get the recipe based on a specific id
app.get("/recipes/:id", async (req, res) => {
    try {
        var pid = req.params.id;
        const info = await pool.query(
            "select * from ingredients i inner join recipes r on i.rid = r.rid where r.rid = $1",
            [pid]
        );
        res.json(info.rows[0]);
    } catch (err) {
        console.error(err);
    }
});

//delete a recipe by id
app.delete("/recipes/:id", async (req, res) => {
    try {
        var pid = req.params.id;
        const deleteRecipe = await pool.query(
            "DELETE FROM recipes WHERE rid = $1",
            [pid]
        );
        console.log(deleteRecipe);
        res.json("deleted");
    } catch (err) {
        console.error(err);
    }
});

app.put("/recipes/:id", async (req, res) => {
    try {
        var pid = req.params.id;
        const rtitle = req.body.recipeName;
        const ringredients = req.body.ingredients;
        const rdirections = req.body.directions;
        const lastModified = req.body.lastModified;
        const queryRecipe =
            "UPDATE recipes SET title = $1, recipeinstructions = $2, timelastmodified = $3 WHERE rid = $4";
        const queryIngredients =
            "UPDATE ingredients SET ingredients = $1 WHERE rid = $2";
        const updateQueryRecipe = await pool.query(queryRecipe, [
            rtitle,
            rdirections,
            lastModified,
            pid,
        ]);
        const updateQueryIngredients = await pool.query(queryIngredients, [
            ringredients,
            pid,
        ]);
        res.json("updated");
    } catch (err) {
        console.error(err);
    }
});

app.listen(8080, () => {
    console.log("listening on port 8080");
});
