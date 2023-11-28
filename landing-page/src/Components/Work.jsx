import React from "react";
import PickMeals from "../assets/pick-meals-image.png"
// import PickMeals from "../assets/pick-meals-image.png";
import ChooseMeals from "../assets/choose-image.png";
import Delivery from "../assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      Title: "Pick Meals",
      Text: "Lorem",
    },
    {
      image: ChooseMeals,
      Title: "Choose How Often",
      Text: "Lorem",
    },
    {
      image: Delivery,
      Title: "Fast delivery",
      Text: "Lorem",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How it Works</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.Title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.Title}</h2>
            <p>{data.Text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
