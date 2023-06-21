import React, { useEffect, useState} from "react";
import uuid from 'react-uuid';
import "../App.css";

function AddRecipe() {
    const [info, setInfo] = useState({
        recipeName: "",
        ingredients: "",
        directions: "",
        id: uuid(),
    });
    const items = JSON.parse(localStorage.getItem("formValues")) || [];
    const [formValues, setFormValues] = useState(items || []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setInfo({ ...info, id : uuid()});
        setFormValues((prev) => [...prev, info]);
        setInfo({
            recipeName: "",
            ingredients: "",
            directions: "",
            id : uuid()
        });
    };

  useEffect(() => {
    localStorage.setItem("formValues", JSON.stringify(formValues));
  }, [formValues]);

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
                <button>Submit</button>
            </form>
        </div>
    );
}
export default AddRecipe;
