import React, { Component } from 'react'

export default function Promotions(props){
  return(
    <div className="ui grid">
      <div className="eight wide column">
        <div className="Infobox-perfromance">
          <h1>{props.promotionData.withPromotions}</h1>
          <h6> Some Extra text</h6>
        </div>
      </div>
      <div className="eight wide column">
        <div className="Infobox-perfromance">
          <h1>{props.promotionData.withoutPromotions}</h1>
          <h6> Some Extra text</h6>
        </div>
      </div>
    </div>
  )
}
