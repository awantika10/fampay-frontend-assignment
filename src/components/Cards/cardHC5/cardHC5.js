import React, { useEffect, useState } from "react";
import "./cardHC5.css";

const HC5 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/4d8db890-5327-4c69-a3ef-b4f5f5225d17")
      .then((res) => res.json())
      .then((data) => setData(data.card_groups[5].cards))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);

  return (
    <>
      {data.map((data) => (
        <>
          <div className="cardHC5">
            <div className="imgHC5">
              <a href={data.url} target="_blank">
                <img
                  src={data.bg_image.image_url}
                  alt="data.name"
                  className="imgHC5main"
                  itemType= {data.bg_image.image_type}
                />
              </a>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default HC5;
