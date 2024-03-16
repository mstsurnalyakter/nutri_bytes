import PropTypes from "prop-types";
import Recipe from "./Recipe";
import { useEffect, useState } from "react";

const Recipes = ({ handleWantToCook }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipesData = async () => {
      const res = await fetch("recipes.json");
      const objData = await res.json();
      const arrData = objData.recipes;
      setRecipes(arrData);
    };

    fetchRecipesData();
  }, []);

  return (
    <div className="lg:col-span-3">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-2 xl:gap-6">
        {recipes.map((recipe) => (
          <Recipe
            handleWantToCook={handleWantToCook}
            key={recipe.recipe_id}
            recipe={recipe}
          />
        ))}
      </section>
    </div>
  );
};

Recipes.propTypes = {
  handleWantToCook: PropTypes.func.isRequired,
};

export default Recipes;
