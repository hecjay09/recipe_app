import React, { useState } from "react";
import "../App.css";

function AddRecipe() {
    //date
    const date = new Date();
    var today = date.toLocaleString("en-US");
    const [info, setInfo] = useState({
        recipeName: "",
        ingredients: "",
        directions: "",
        lastModified: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setInfo({ ...info, lastModified: today });
        try {
            const response = await fetch("http://localhost:8080/recipes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(info),
            });
            console.log(response);
        } catch (err) {
            console.error(err.message);
        }
        console.log(info);
        setInfo({
            recipeName: "",
            ingredients: "",
            directions: "",
        });
    };

    return (
        <div>
            <form className="ingrForm" onSubmit={handleSubmit}>
                <h3>New Recipe</h3>
                <label>Recipe Name</label>
                <input
                    type="text"
                    name="recipe"
                    value={info.recipeName}
                    onChange={(e) =>
                        setInfo({ ...info, recipeName: e.target.value })
                    }
                    required
                ></input>
                <label>Ingredients</label>
                <textarea
                    required
                    name="ingredients"
                    value={info.ingredients}
                    onChange={(e) =>
                        setInfo({ ...info, ingredients: e.target.value })
                    }
                ></textarea>
                <label>Directions</label>
                <textarea
                    required
                    name="directions"
                    value={info.directions}
                    onChange={(e) =>
                        setInfo({ ...info, directions: e.target.value })
                    }
                ></textarea>
                <button className="submit-btn">Submit</button>
            </form>
        </div>
    );
}
export default AddRecipe;
