import React, { useState } from 'react'
import HC3 from './Cards/CardHC3/cardHC3'
import HC6 from './Cards/CardHC6/cardHC6'
import HC5 from "./Cards/cardHC5/cardHC5"
import HC1 from "./Cards/CardHC1/cardHC1"
import HC1A from "./Cards/CardHC1/cardHC1"
import HC9 from "./Cards/CardHC9/cardHC9"
import "./Pages.css"
import PullToRefresh from "react-simple-pull-to-refresh";
import { BrowserView, MobileView } from "react-device-detect";

function Pages() {
  const refreshHandler = () => {
    const currentValue = boolToRefresh;
    setBoolToRefresh(!currentValue);
  };
  const [boolToRefresh, setBoolToRefresh] = useState(false);
  return (
    <>
        <div className='pages'>
          <BrowserView>
          <h3 style={{"text-align" : "center", "paddingTop": "1rem"}}>This site can only be viewed through mobile version only <br />
          <a href='https://www.linkedin.com/in/awantika-nigam' target = "blank">
          <button className='devBtn'>Developed with 💝 By Awantika</button>
          </a>
          </h3>
          </BrowserView>
          <MobileView>
          <PullToRefresh onRefresh={refreshHandler}>
            <HC3 />
            <HC6 />
            <HC5 />
            <HC9 />
            <HC1 />
            <HC1A />
          </PullToRefresh>
          </MobileView>
        </div>
    </>
  )
}

export default Pages