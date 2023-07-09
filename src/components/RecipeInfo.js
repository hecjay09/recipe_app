import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Home from "./Home";

export default function RecipeInfo() {
    const [recipe, setRecipe] = useState({});
    const id = useParams();
    const getRecipeInfo = async () => {
        try {
            const res = await fetch(`http://localhost:8080/recipes/` + id.id);
            const resJson = await res.json();
            setRecipe(resJson);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getRecipeInfo();
    }, []);



    return (
        <div className="container">
            <div className="popup">
                <div className="close-div">
                    <Link className="close" to="/">
                        X
                    </Link>
                </div>
                <div className="popup-content">
                    {recipe && (
                        <div>
                            <h2>{recipe.title}</h2>
                            <h4>Ingredients:</h4>
                            <p>{recipe.ingredients}</p>
                            <h4>Directions:</h4>
                            <p>{recipe.recipeinstructions}</p>
                            <h5>Time Last Modified:</h5>
                            <p>{recipe.timelastmodified}</p>
                        </div>
                    )}
                </div>

            </div>{" "}
            <div className="bg-container">
                <div className="bg">
                    <Home />
                </div>
            </div>
        </div>
    );
}
