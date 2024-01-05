import React from "react";
import UncontrolledExample from "../components/Carousels";
import Features from "../components/Features";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <div>
      <UncontrolledExample />
      <div className="md:mx-8 lg:mx-16 xl:mx-24">
        {/* Section about copper products */}
        <p className="text-4xl font-medium text-gray-900 dark:text-white text-center py-5 px-4 md:px-8 lg:px-12 xl:px-20 leading-snug">
          Explore Timeless Craftsmanship, Unparalleled Quality, and Radiant
          Beauty
        </p>
        <div className="container overflow-hidden text-center">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-slate-300 md:ml-8 md:py-10 text-justify px-5 mt-4">
              <div className="text-2xl text-left font-bold pb-2 ">
                WHY COPPER PRODUCT?
              </div>
              <p>
                {/* Content about the benefits of copper */}
                Minimally processed during production but naturally hygienic,
                copper has antibacterial qualities in that it is free from
                microorganisms which could get into your food. Not only is it
                clean, but copper is also an essential trace mineral; a mineral
                which is a crucial part of a healthy human diet. By boiling
                water and cooking food in copper cookware, meals can become ever
                so slightly infused with the mineral, the health benefits of
                which are endless.
              </p>
              <p className="text-left">
                {/* More content about the benefits of copper */}
              </p>
              Copper pots, saucepans and pans are widely recognised as being the
              most luxury type of cooking utensils available on the market,
              regardless of the cuisine you are cooking or the type of chef you
              consider yourself to be. However, as we have shown, they have many
              other benefits in addition to their grandeur that makes them an
              incredible type of luxury homeware one that will make cooking that
              much easier for you and your family. Explore our range of copper
              cookware to experience these benefits first hand to see just how
              favourable copper pans and pots can be to your cooking.
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <div>
                {/* Image related to copper products */}

                <img
                  className="w-full h-auto"
                  src="https://firebasestorage.googleapis.com/v0/b/e-commerce-8b8a2.appspot.com/o/copper-utensils-coffee-bazaar-istanbul-181550530.webp?alt=media&token=581617ca-5a41-4714-83b7-653f1928ef5e"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separator lines */}
      <div>
        <p className="text-center pt-5 pb-2">
          _________________________________________________________________
        </p>
        <p className="text-6xl bold text-center">Our Services</p>
        <p className="text-center pt-2">
          _________________________________________________________________
        </p>
      </div>
      {/* Featured products section */}
      <Features />
      <div>
        <p className="text-center pb-2">
          _________________________________________________________________
        </p>
        <p className="text-6xl bold text-center">Featured Products</p>
        <p className="text-center pt-2">
          _________________________________________________________________
        </p>
      </div>
      <div>
        <ProductList productQuantity={6} />
      </div>
    </div>
  );
};

export default Home;
