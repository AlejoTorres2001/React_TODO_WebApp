import React from "react";
import Card from "./Card";
import img1 from "../../../image1.jpg";
import img2 from "../../../image2.jpg";

const cards = [
  {
    titulo: "title1",
    id: 1,
    Image: img1,
    url:'https://reactjs.org/',
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis consequatur"
  },

  {
    titulo: "title2",
    id: 2,
    Image: img2,
    url:'/',
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis consequatur" 
  },
  

];

function Cards() {
  return (
  
      <div className="d-flex align-items-center justify-content-center h-80">
        {cards.map((card) => (
          <div className="col-md-4" key={card.id}>
            <Card imageSource={card.Image}title={card.titulo} url={card.url} text={card.text}></Card>
          </div>
        ))}
      </div>
 
  );
}

export default Cards;
