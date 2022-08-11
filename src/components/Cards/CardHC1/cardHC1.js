import React, { useEffect, useState, useRef } from "react";
import "./cardHC1.css";
import { motion } from "framer-motion";

const HC1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/4d8db890-5327-4c69-a3ef-b4f5f5225d17")
      .then((res) => res.json())
      .then((data) => setData(data.card_groups[2].cards))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);

  const [width, setWidth] = useState(0);
  const corousel = useRef();

  useEffect(() => {
    console.log(corousel.current.scrollWidth, corousel.current.offsetWidth);
    setWidth(corousel.current.scrollWidth - corousel.current.offsetWidth);
  }, []);

  return (
    <>
      <div className="cardHC1">
        <motion.div className="corousel" ref={corousel}>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-corousel"
          >
            {data.map((data) => (
                <>
                <h3>
                <img src = {data.icon.image_url} alt = {data.title} className = "iconHC1"/>
                  <span>{data.title}<br /><span style = {{"fontSize" : "small"}}>{data.name}</span></span></h3>
                </>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};
export default HC1;
