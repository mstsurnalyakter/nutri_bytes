import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Recipe from './Recipe';

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

  // console.log(recipes);

  return (
    <div className="lg:col-span-3">
      {/* <h2>Recipes</h2> */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
  handleWantToCook:PropTypes.func.isRequired
};

export default Recipes