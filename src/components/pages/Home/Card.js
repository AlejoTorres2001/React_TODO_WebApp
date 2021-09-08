import React from "react";
import PropTypes from "prop-types";
import "../../../styles/Cards.css";
const Card = ({ title, imageSource, url, text }) => {
  const validator = () => {
    if (text !== undefined) {
      return text;
    } else {
      return "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam ea aut, assumenda quos tempora voluptate ex omnis dolorem velit eveniet quae quaerat deleniti ab ipsum amet atque, expedita magni facere.";
    }
  }
  return (
    <div className="card text-center bg-dark animate__animated animate__backInDown mt-1 mb-5 mx-3 ">
      <div className="overflow ">
        <img src={imageSource} alt="" className="card-img-top" />
      </div>
      <div className="card-body text-light ">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-white">{validator.call()}</p>
        <a
          href={url}
          className="btn btn-outline-secondary rounded-0"
          target="_blank"
          rel="noreferrer"
        >
          Go to Website
        </a>
      </div>
    </div>
  );
};
Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;
