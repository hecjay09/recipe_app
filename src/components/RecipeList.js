import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function RecipeList(props) {
    return (
        <div className="recipe-list">
            <h2>Saved Recipes</h2>
            {props.recipes.map((recipe) => (
                <div className="aRecipe" key={recipe.id}>
                    <ul>
                        <Link className="recipeLink" to={`/recipes/${recipe.id}`}>
                            <li>{recipe.recipeName}</li>
                        </Link>
                    </ul>
                </div>
            ))}        <main>

        </main>
        </div>

    );
}
