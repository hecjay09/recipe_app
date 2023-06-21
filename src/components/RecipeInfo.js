import React, {useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";
import Home from "./Home";

export default function RecipeInfo() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect( () => {
        const items = JSON.parse(localStorage.getItem("formValues"));

        const rightRecipe = items.find((element) => {
            return element.id === id;
        })
        if(items) {
            setRecipe(rightRecipe);
        }

    }, [])

    return (
        <div className="container">
            <div className="popup">
                <div className="close-div">
                    <Link className="close" to="/">
                        Close
                    </Link>
                </div>
                <div className="popup-content">
                    {recipe && (
                        <div>
                            <h2>{recipe.recipeName}</h2>
                            <h4>Ingredients:</h4>
                            <p>{recipe.ingredients}</p>
                            <h4>Directions:</h4>
                            <p>{recipe.directions}</p>
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
