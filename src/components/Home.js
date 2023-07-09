import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EditRecipe from "./EditRecipe";
import "../App.css";
export default function Home() {
    const [data, setData] = useState([]);
    const getRecipes = async () => {
        try {
            const res = await fetch("http://localhost:8080/recipes");
            const resJson = await res.json();
            setData(resJson);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getRecipes();
    }, []);
    //delete a recipe
    const deleteRecipeInfo = async (rid) => {
        try {
            const res = await fetch(`http://localhost:8080/recipes/` + rid, {
                method: "DELETE",
            });
            setData(data.filter((recipe) => recipe.rid !== rid));
        } catch (err) {
            console.error(err);
        }
    };
    //fetch data
    return (
        <div className="recipelist-wrapper">
            <div className="recipe-list">
                {/* {data && <RecipeList recipes={data}/>} */}
                <h2>Saved Recipes</h2>
                {data.map((recipe) => (
                    <div className="aRecipe" key={recipe.rid}>
                        <ul>
                            <Link
                                className="recipeLink"
                                to={`/recipes/${recipe.rid}`}
                            >
                                <li>{recipe.title}</li>
                            </Link>
                            <button
                                className="delete-btn"
                                onClick={() => deleteRecipeInfo(recipe.rid)}
                            >
                                Delete
                            </button>
                            <Link className="editLink" to={`/edit/${recipe.rid}`}>Edit</Link>
                        </ul>
                    </div>
                ))}{" "}
            </div>
        </div>
    );
}
