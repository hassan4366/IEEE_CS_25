import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [card, setCard] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=30");
        const data = await response.json();
        setCard(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="container mx-auto py-8 bg-[#151f35]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-9">
          {card.map((card: any) => (
            <div
              key={card.id}
              className="bg-[#1d2839] rounded-xl p-5 shadow-sm flex flex-col "
            >
              <img
                src={card.images[0]}
                className="w-30 h-29 mx-auto object-cover mb-5"
              />
              <h5 className="text-white text-xl font-bold mb-2">
                {card.title}
              </h5>
              <p className="text-gray-400 mb-4 text-sm">
                {(() => {
                  const words = card.description.split(" ");
                  return words.length > 10
                    ? words.slice(0, 10).join(" ") + ".."
                    : card.description;
                })()}
              </p>
              <div className="flex items-center w-full justify-between mt-auto">
                <span className="text-green-500 font-semibold text-lg">
                  ${card.price}
                </span>
                <button className="bg-[#a771ce] text-white rounded-md px-4 py-1 font-medium hover:bg-[#6700b1] transition">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default App;
