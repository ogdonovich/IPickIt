import React, { Component  } from 'react'

class MyLeaderBoardAd extends Component {

  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
   }

   render() {
  
  return(
    <div>
      
    <ins className = "adsbygoogle"
     style={{display: "inline-block", width: "70vw", height: "9rem"}}
     data-ad-client="ca-pub-3731794806745440"
     data-ad-slot="9217940858"
    
     ></ins>
    </div>
    )
  }
}

export default MyLeaderBoardAd
