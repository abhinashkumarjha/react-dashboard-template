import React, { Component } from 'react'

export default function Promotions(props){
  return(
    <div>
      <div className="Infobox-perfromance">
        <h3>{props.promotionData.withPromotions}</h3>
      </div>
      <div className="Infobox-perfromance">
        <h3>{props.promotionData.withoutPromotions}</h3>
      </div>
    </div>
  )
}
