import React from 'react'
import banner from '../assets/banner.png'

const Banner = () => {
  return (
    <>
      {/* <!-- banner section --> */}
      <div
        className={`hero min-h-[600px] rounded-3xl w-full bg-center  bg-cover  object-cover`}
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className=""></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" w-3/5">
            <h1 className="mb-5 text-5xl font-bold text-white leading-[76px]">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5 text-white leading-[30px]">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className=" space-x-4">
              <button className="btn bg-[#0BE58A] hover:bg-[#03d47d] text-[#150B2B] text-xl font-semibold rounded-full">
                Explore Now
              </button>
              <button className="btn btn-outline text-xl font-semibold rounded-full text-white hover:border-white hover:bg-transparent">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner