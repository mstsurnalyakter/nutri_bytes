import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Recipe from './Recipe';

const Recipes = () => {
        const [recipes, setRecipes] = useState([]);


        useEffect(()=>{
            const fetchRecipesData = async () =>{
                const res = await fetch("recipes.json");
                const objData = await res.json()
                const arrData = objData.recipes;
                setRecipes(arrData)
            }

            fetchRecipesData()
        },[])

        // console.log(recipes);

  return (
    <div className="lg:col-span-3">
      <h2>Recipes</h2>
      <section>
        {recipes.map((recipe) => (
          <Recipe key={recipe.recipe_id} recipe={recipe} />
        ))}
      </section>
    </div>
  );
}

Recipes.propTypes = {}

export default Recipes