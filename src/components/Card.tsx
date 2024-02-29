import "./card.css";

const Card = () => {
  return (
    <div className="bg-White rounded-2xl max-w-[450px] flex items-center justify-center flex-col card-shadow">
      <img
        src="./illustration-hero.svg"
        alt="ilustration of a person listening"
        className="w-full h-[220px] bg-no-repeat object-cover rounded-t-2xl mb-12"
      />
      <h1 className="text-[28px] font-red-hat-display font-black mb-[15px] text-center text-DarlBlue">
        Order Summary
      </h1>
      <p className="text-center font-red-hat-display mx-10 md:mx-16 mb-[18px] font-medium line-text text-DesaturatedBlue">
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>

      <div className="bg-VeryPaleBlue w-[85%] md:w-[80%] px-4 md:px-6 py-[24px] rounded-2xl flex items-center justify-between mb-8">
        <span className="flex items-center gap-4 md:gap-[22px]">
          <img src="./icon-music.svg" alt="" />
          <span className="flex flex-col gap-1"> 
            <p className="font-black text-DarlBlue font-red-hat-display ">Annual Plan</p>
            <p className="font-bold text-DesaturatedBlue font-red-hat-display">$59.99/year</p>
          </span>
        </span>
        <span>
          <a href="#" className="text-sm tracking-wide font-bold underline text-Brightblue font-red-hat-display duration-300 ease-out hover:text-Brightblue/50">
            Change
          </a>
        </span>
      </div>
      <button className="w-[85%] md:w-[80%] p-3 rounded-xl bg-Brightblue text-White text-base font-bold border-none cursor-pointer mb-[30px] card-btn-shadow duration-300 ease-out hover:bg-Brightblue/50">Proceed to Payment</button>
      <a href="#" className="text-DesaturatedBlue font-black text-base duration-300 ease-out mb-12 hover:text-DarlBlue">Cancel Order</a>
    </div>
  );
};

export default Card;
