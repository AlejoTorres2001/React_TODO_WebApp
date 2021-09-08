import React from "react";
import Card from "./Card";
import img1 from "../../../logo.svg";
import img2 from "../../../logo.svg";
import img3 from "../../../logo.svg";
const cards = [
  {
    titulo: "web1",
    id: 1,
    Image: img1,
    url:'https://www.youtube.com/watch?v=1_DXtP0XyDw',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore ducimus omnis, ea dolorum et voluptatem minus ex perspiciatis molestias veniam, quidem, iusto asperiores officia? Magni quis harum aspernatur fuga quae.'
  },

  {
    titulo: "web1",
    id: 2,
    Image: img1,
    url:'https://www.youtube.com/watch?v=1_DXtP0XyDw',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore ducimus omnis, ea dolorum et voluptatem minus ex perspiciatis molestias veniam, quidem, iusto asperiores officia? Magni quis harum aspernatur fuga quae.'
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
