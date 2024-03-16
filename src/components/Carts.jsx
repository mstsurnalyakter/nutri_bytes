import React from 'react'
import PropTypes from 'prop-types'

const Carts = props => {
  return (
    <div className="lg:col-span-2">
      <div className="bg-base-100 shadow-xl text-center py-8 rounded-3xl border-2 border-[#2828281A] ">
        <h2 className="text-[#282828] text-2xl font-semibold mb-4">
          Want to cook: 01
        </h2>
        <div className="px-20 mb-8">
          <div className="border-b-2 border-[#2828281A] "></div>
        </div>

        {/* <div className=" bg-slate-50">
          <table className="table-auto border w-full text-center">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>price</th>
                <th></th>
              </tr>
            </thead>
            <tbody className='space-y-3'>
              <tr className=''>
                <td>1</td>
                <td>name</td>
                <td>price</td>
                <td className=''>
                  <button className="btn rounded-full">Delete</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>name</td>
                <td>price</td>
                <td>
                  <button className="btn">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}

        <div className=" bg-slate-50">
          <div className="overflow-x-auto fira-sans">
            <table className="table">
              {/* <!-- head --> */}
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
                {/* row 1  */}
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Quality Control Specialist</td>
                  <td>
                    <button className="btn bg-[#0BE58A] hover:bg-[#03d47d] text-[#150B2B] font-medium rounded-full">
                      Preparing
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

Carts.propTypes = {}

export default Carts