import React from "react";

const Features = () => {
  return (
    <div class="container mx-auto py-5 px-24">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="max-w-sm mx-auto rounded overflow-hidden flex flex-col justify-center items-center">
          <img
            class="h-40 w-40"
            src="https://cdn-icons-png.flaticon.com/256/11946/11946388.png"
            alt="Card 1"></img>
          <div class="px-6 py-4 text-center">
            <div class="font-bold text-xl mb-2">World Wide Shipping</div>
            <p class="text-gray-700 text-base">Some text for Card 1.</p>
          </div>
        </div>

        <div class="max-w-sm mx-auto rounded overflow-hidden flex flex-col justify-center items-center">
          <img
            class="h-40 w-40"
            src="https://cdn-icons-png.flaticon.com/256/7470/7470466.png"
            alt="Card 2"></img>
          <div class="px-6 py-4 text-center">
            <div class="font-bold text-xl mb-2">Best Quality</div>
            <p class="text-gray-700 text-base">Some text for Card 2.</p>
          </div>
        </div>
        <div class="max-w-sm mx-auto rounded overflow-hidden flex flex-col justify-center items-center">
          <img
            class="h-40 w-40"
            src="https://cdn-icons-png.flaticon.com/256/6133/6133398.png"
            alt="Card 2"></img>
          <div class="px-6 py-4 text-center">
            <div class="font-bold text-xl mb-2">Best Offer</div>
            <p class="text-gray-700 text-base">Some text for Card 3.</p>
          </div>
        </div>
        <div class="max-w-sm mx-auto rounded overflow-hidden flex flex-col justify-center items-center">
          <img
            class="h-40 w-40l"
            src="https://cdn-icons-png.flaticon.com/256/8662/8662245.png"
            alt="Card 2"></img>
          <div class="px-6 py-4 text-center">
            <div class="font-bold text-xl mb-2">Secure Payment</div>
            <p class="text-gray-700 text-base">Some text for Card 4.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
