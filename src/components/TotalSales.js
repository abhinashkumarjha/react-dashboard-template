import React, { Component } from 'react';
import { VictoryChart, VictoryStack, VictoryArea, VictoryVoronoiContainer, VictoryTooltip } from 'victory';


export default function TotalSales(props){
  return(
      <div>
        <VictoryChart scale={{ x: "time" }} width={600} height={200} containerComponent={
          <VictoryVoronoiContainer
            voronoiDimension="x"
            labels={(d) => `y: ${d.y}`}
            labelComponent={
              <VictoryTooltip
                cornerRadius={0}
                flyoutStyle={{ fill: "white" }}
              />}
          />}>
          <VictoryStack colorScale="cool">
            <VictoryArea
              data={props.totalSalesData[0]}
            />
            <VictoryArea
              data={props.totalSalesData[1]}
            />
            <VictoryArea
              data={props.totalSalesData[2]}
            />
          </VictoryStack>
        </VictoryChart>
      </div>
    );
}
