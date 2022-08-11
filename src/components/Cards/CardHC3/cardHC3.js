import { useState, useEffect, useRef } from "react";
import "./CardHC3.css";
import icon3 from "../../../assets/icon3.png"
import icon4 from "../../../assets/icon4.png"

const HC3 = (props) => {
  const [style, setStyle] = useState("cont");

  const changeStyle = () => {
    console.log("you just clicked");

    setStyle("cont2");
  };

  // fetch api data
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://run.mocky.io/v3/4d8db890-5327-4c69-a3ef-b4f5f5225d17")
      .then((res) => res.json())
      .then((data) => setData(data.card_groups[6].cards))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);

  // Handles the Remind Me button
  const [showResults, setShowResults] = useState(true)
  const onClick = () => setShowResults(false)

  // remove an element
  const [remove, setRemove] = useState(true)
  const onRemove = () => setRemove(false)

  return (
    <>
    {remove ?
      <div className="cardHC3">
        <div className="cardHC3-header">
          <div className={style}>
            <div className="App-header" onClick={changeStyle}>
              {data.map((data) => (
                <div className="txt">
                  <img
                    src={data.bg_image.image_url}
                    alt="Banner"
                    className="banner"
                  />
                  <div className="content">
                    <h1>{data.title || data.formatted_title}</h1>
                    <h5>{data.description || data.formatted_description}</h5>
                    <br />
                    <input
                      type="button"
                      value={data.name + " +"}
                      className="btn"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="App-into">
            <div className="buttonBack">
              <div className="btn-back">
              <img src={icon3} alt="Remind" className="icon3" />
              <input type="button" value="Remind Me" onClick={onRemove}/>
              </div>
              <div className="btn-back">
              <img src={icon4} alt="Dismiss" className="icon4" />
              <input type="button" value="Dismiss Now" onClick={onRemove}/>

              </div>
            </div>
          </div>
        </div>
      </div>
     : null }
    </>
  );
};

export default HC3;
