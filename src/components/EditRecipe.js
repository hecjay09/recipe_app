import React, { useState } from "react";
import Home from "./Home";
import { Link, useParams } from "react-router-dom";
import "../App.css";

function EditRecipe() {
    const date = new Date();
    var today = date.toLocaleString("en-US");
    const [recipe, setRecipe] = useState({
        recipeName: "",
        ingredients: "",
        directions: "",
        lastModified: today,
    });
    const id = useParams();
    const editRecipe = async (e) => {
        e.preventDefault();
        setRecipe({ ...recipe, lastModified: today });
        console.log(recipe);
        try {
            const response = await fetch(
                `http://localhost:8080/recipes/` + id.id,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(recipe),
                }
            );
            console.log(id.id);
        } catch (err) {
            console.error(err);
        }
        setRecipe({
            recipeName: "",
            ingredients: "",
            directions: "",
        });
    };

    return (
        <div className="container">
            <div className="popup">
                <div className="close-div">
                    <Link className="close" to="/">
                        X
                    </Link>
                </div>
                <div className="popup-content">
                    <form onSubmit={editRecipe}>
                        <h3>Title:</h3>
                        <input
                            type="text"
                            value={recipe.recipeName}
                            onChange={(e) =>
                                setRecipe({
                                    ...recipe,
                                    recipeName: e.target.value,
                                })
                            }
                            required
                        ></input>
                        <h4>Ingredients:</h4>
                        <textarea
                            required
                            value={recipe.ingredients}
                            onChange={(e) =>
                                setRecipe({
                                    ...recipe,
                                    ingredients: e.target.value,
                                })
                            }
                        ></textarea>
                        <h4>Directions:</h4>
                        <textarea
                            required
                            value={recipe.directions}
                            onChange={(e) =>
                                setRecipe({
                                    ...recipe,
                                    directions: e.target.value,
                                })
                            }
                        ></textarea>
                        <button className="submit-btn">Submit</button>
                    </form>
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

export default EditRecipe;
