import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Trịnh Đình Tài",
      url:
        "https://scontent.fhan5-3.fna.fbcdn.net/v/t1.0-9/118766065_776988396456296_941545205344507778_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=YqG7kgMCh-MAX8iD6rb&_nc_ht=scontent.fhan5-3.fna&oh=4b4fc5584e1c87cfb7a21b15916229b9&oe=5F8EF997",
    },
    {
      name: "Trịnh Thị Quỳnh Trang",
      url:
        "https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-9/119489947_2611976779065930_8499612048812975462_o.jpg?_nc_cat=105&_nc_sid=a4a2d7&_nc_ohc=KxYhxuwEQ7EAX_NufKG&_nc_ht=scontent.fhan5-6.fna&oh=2a1e61318e1737bd6357ddb17bb71404&oe=5F8B6ED4",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left to the screen!");
  };


  return (
    <div className="tinderCards">
      <div className="tinderCards_cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key="{person.name}"
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{
                backgroundImage: `url(${person.url})`
              }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
