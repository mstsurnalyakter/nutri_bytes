import React from 'react'
import PropTypes from 'prop-types'
import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";

const Recipe = ({ recipe, handleWantToCook }) => {
  const {
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
    recipe_image,
  } = recipe;
  // console.log(recipe);
  return (
    <div>
      <div className="card bg-base-100 shadow-xl  p-6 border-2 border-[#2828281A] ">
        <figure>
          <img
            className="w-full h-[300px] object-cover rounded-2xl"
            src={recipe_image}
            alt={`Picture ot the ${recipe_name}`}
          />
        </figure>
        <div className="card-body space-y-3">
          <h2 className="text-[#282828] text-2xl font-bold">{recipe_name}</h2>
          <p className="text-[#878787] fira-sans">{short_description}</p>
          <div className="border-b-2 border-[#2828281A]"></div>
          <div className="space-y-4">
            <h3 className="text-[#282828] font-medium text-lg">
              Ingredients: {ingredients.length}
            </h3>
            <ol className="list-disc ml-7 text-[#878787] fira-sans space-y-3">
              {ingredients.map((ingredient, index) => {
                return <li key={index}>{ingredient}</li>;
              })}
            </ol>
          </div>
          <div className="border-b-2 border-[#2828281A]"></div>
          <div className="flex gap-4 items-center">
            <div className="flex gap-2 items-center">
              <IoTimeOutline />
              <span>{preparing_time} minutes</span>
            </div>
            <div className="flex gap-2 items-center">
              <AiOutlineFire />
              <span>{calories} calories</span>
            </div>
          </div>
          <div className="border-b-2 border-[#2828281A]"></div>
          <div className="card-actions">
            <button
              onClick={() => handleWantToCook(recipe)}
              className="btn bg-[#0BE58A] hover:bg-[#03d47d] text-[#150B2B] text-xl font-semibold rounded-full"
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleWantToCook: PropTypes.func.isRequired,
};

export default Recipe