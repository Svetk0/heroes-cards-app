import { data } from "./Data-main";
import "./HeroesCards.css";

function HeroCards(props) {
  
  return (
    <>
        {props.data.map((el) => (
            <div className="card">
                <h2 className="name"> {el.name}</h2>
            <div className="container-item">
              <div className="containerImageRating">
                <img src={el.url} className="image-hero" alt="logo" />
              </div>
              <div className="item-properties">
                

                <div className="universe">
                  <strong>Вселенная: </strong> {el.universe}
                </div>
                <div className="alterego">
                  {" "}
                  <strong>Альтерэго: </strong> {el.alterego}
                </div>
                <div className="occupation">
                  <strong>Род деятельности: </strong> {el.occupation}
                </div>
                <div className="friends">
                  <strong>Союзники: </strong>
                  {el.friends}
                </div>
                <div className="superpowers">
                  <strong>Суперсила: </strong>
                  {el.superpowers}
                </div>
                <div className="info">
                  <strong>Досье: </strong>
                  {el.info}
                </div>
              </div>
            </div>
          </div>
        ))}
     
    </>

    //console.log(data);
  );
}
console.log(data);
export default HeroCards;
