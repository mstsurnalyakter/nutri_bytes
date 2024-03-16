import React from "react";
import PropTypes from "prop-types";

const Carts = ({ carts, handleCurrentlyCooking, currentlycooking }) => {
  // console.log(carts);
  return (
    <div className="lg:col-span-2">
      <div className="bg-base-100 shadow-xl text-center py-8 rounded-3xl border-2 border-[#2828281A] ">
        <div className="mb-8">
          <h2 className="text-[#282828] text-2xl font-semibold mb-4">
            Want to cook:{" "}
            {carts.length <= 9
              ? carts.length === 0
                ? "0"
                : `0${carts.length}`
              : carts.length}
          </h2>
          <div className="px-20 mb-8">
            <div className="border-b-2 border-[#2828281A] "></div>
          </div>

          <div className=" bg-slate-100">
            <div className="fira-sans  overflow-x-auto ">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((recipe, index) => {
                    const { recipe_id, recipe_name, preparing_time, calories } =
                      recipe;
                    return (
                      <tr key={recipe_id}>
                        <th>{index + 1}</th>
                        <td>{recipe_name}</td>
                        <td>{preparing_time} minutes</td>
                        <td>{calories} calories</td>
                        <td>
                          <button
                            onClick={() => handleCurrentlyCooking(recipe)}
                            className="btn bg-[#0BE58A] hover:bg-[#03d47d] text-[#150B2B] font-medium rounded-full"
                          >
                            Preparing
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* ************* */}
        <div>
          <h2 className="text-[#282828] text-2xl font-semibold mb-4">
            Currently cooking:{" "}
            {currentlycooking.length <= 9
              ? currentlycooking.length === 0
                ? "0"
                : `0${currentlycooking.length}`
              : currentlycooking.length}
          </h2>
          <div className="px-20 mb-8">
            <div className="border-b-2 border-[#2828281A] "></div>
          </div>

          <div className=" bg-slate-100">
            <div className="fira-sans  overflow-x-auto ">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                  </tr>
                </thead>
                <tbody>
                  {currentlycooking.map((recipe, index) => {
                    const { recipe_id, recipe_name, preparing_time, calories } =
                      recipe;
                    return (
                      <tr key={recipe_id}>
                        <th>{index + 1}</th>
                        <td>{recipe_name}</td>
                        <td>{preparing_time} minutes</td>
                        <td>{calories} calories</td>
                      </tr>
                    );
                  })}
                  <tr className="bg-white">
                    <th></th>
                    <td></td>
                    <td>
                      Total Time = {currentlycooking.reduce(
                        (prev, curr) => prev + curr.preparing_time,
                        0
                      )}{" "}
                      minutes
                    </td>
                    <td>
                      Total Calories = {currentlycooking.reduce(
                        (prev, curr) => prev + curr.calories,
                        0
                      )}{" "}
                      calories
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Carts.propTypes = {
  carts: PropTypes.array.isRequired,
  currentlycooking: PropTypes.array.isRequired,
  handleCurrentlyCooking: PropTypes.func.isRequired,
};

export default Carts;
