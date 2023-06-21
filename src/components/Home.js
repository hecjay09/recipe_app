import RecipeList from "./RecipeList";
import { useEffect, useState } from "react";
export default function Home() {
    const [data, setData] = useState([]);

    useEffect( () => {
        const items = JSON.parse(localStorage.getItem("formValues"));
        if(items) {
            setData(items);
        }
    }, [])

    //fetch data
    return (
        <div className="recipelist-wrapper">
            <div className="recipe-list">
                {data && <RecipeList recipes={data} />}
            </div>
        </div>
    );
}
