import React from 'react'
import PropTypes from 'prop-types'

const Carts = ({ carts, handleRemoveCart }) => {
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

          <div className=" bg-slate-50">
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
                            onClick={() =>handleRemoveCart(recipe_id)}
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
        {/* <div>
          <h2 className="text-[#282828] text-2xl font-semibold mb-4">
            Currently cooking:{" "}
            {carts.length <= 9
              ? carts.length === 0
                ? "0"
                : `0${carts.length}`
              : carts.length}
          </h2>
          <div className="px-20 mb-8">
            <div className="border-b-2 border-[#2828281A] "></div>
          </div>

          <div className=" bg-slate-50">
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
                          <button className="btn bg-[#0BE58A] hover:bg-[#03d47d] text-[#150B2B] font-medium rounded-full">
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
        </div> */}
      </div>
    </div>
  );
};

Carts.propTypes = {
  carts: PropTypes.array.isRequired,
  handleRemoveCart: PropTypes.func.isRequired,
};

export default Carts