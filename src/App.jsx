import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Carts from "./components/Carts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import { useState } from "react";

const App = () => {
  const [carts, setCarts] = useState([]);
  const [currentlycooking, setCurrentlycooking] = useState([]);

  const handleWantToCook = (recipe) => {
    const isExist = carts.find((cart) => cart.recipe_id === recipe.recipe_id);
    if (isExist) {
      toast.warn("Recipe already selected!");
    } else {
      setCarts([...carts, recipe]);
      toast.success("Recipe Successfully Add");
    }
  };

  const handleCurrentlyCooking = (recipe) => {
    const remainingCart = carts.filter(
      (cart) => cart.recipe_id !== recipe.recipe_id
    );

    setCarts(remainingCart);

    setCurrentlycooking([...currentlycooking, recipe]);

    toast("Recipe moved to Currently Cooking");
  };

  return (
    <div>
      <div className="container mx-auto p-7 lg:px-12 xl:px-16 mb-24">
        <Header />
        <section>
          <div className=" w-2/3 mx-auto text-center space-y-6 mb-12">
            <h2 className="text-[#150B2B] text-4xl font-semibold">
              Our Recipes
            </h2>
            <p className="text-[#150B2B99]">
              Welcome to Our Recipes corner, where culinary creativity takes
              center stage. Dive into a treasure trove of gastronomic delights,
              each recipe crafted with care to inspire and tantalize your taste
              buds. From comforting classics to innovative creations, explore a
              diverse palette of dishes curated to cater to every craving and
              dietary need.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 xl:gap-6">
            <Recipes handleWantToCook={handleWantToCook} />
            <Carts
              carts={carts}
              handleCurrentlyCooking={handleCurrentlyCooking}
              currentlycooking={currentlycooking}
            />
          </div>
        </section>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
