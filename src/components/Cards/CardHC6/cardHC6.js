import React, {useState , useEffect} from 'react';
import "./cardHC6.css"

const HC6 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/4d8db890-5327-4c69-a3ef-b4f5f5225d17")
      .then((res) => res.json())
      .then((data) => setData(data.card_groups[0].cards))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);

  return (
    <>
    {data.map((data) => (
        <div className='cardHC6'>
            <div className='card'>
            <img src = {data.icon.image_url} alt = "icon" className='iconOne'/>
            <a href = {data.url} target = "_blank">
            <h5 className = "card">
                {data.title || data.formatted_title}
            </h5>
            </a>
            </div>
        </div>
    ))}
    </>
  )
}

export default HC6;