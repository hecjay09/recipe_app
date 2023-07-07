import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddRecipe from "./components/AddRecipe";
import RecipeInfo from "./components/RecipeInfo";
import Home from "./components/Home";
import Header from "./components/Header";
import EditRecipe from "./components/EditRecipe";

function App() {
    return (
        <HashRouter>
            <div className="App">
                <header className="App-header">
                    <Header />
                </header>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/add-recipe" element={<AddRecipe />}/>
                    <Route path="/recipes/:id" element={<RecipeInfo />}/>
                    <Route path="/edit/:id" element={<EditRecipe />}/>
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;
