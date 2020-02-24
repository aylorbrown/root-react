import React, { useContext } from 'react';
import { 
  VictoryBar, 
  VictoryAxis, 
  VictoryContainer, 
  VictoryChart, 
  VictoryLabel } from "victory";
import UserContext from './UserContext';

export default function ProgressChart() {
  const {value} = useContext(UserContext);

    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>

        <VictoryChart
        style={{ 
          parent: { maxWidth: "100%" }
        }}
        domain={{y: [0, 10]}}
        height={600}
        width={600}
        containerComponent={<VictoryContainer responsive={false}/>}
        >

        <VictoryAxis
        style={{
          axis: {stroke: '#fc715e'}, 
          tickLabels: {stroke: '#1c1aa9', fontSize: 24}
        }}
        tickValues={[1, 2, 3, 4, 5, 6, 7]}
        tickFormat={['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']}
      
        />

        <VictoryBar 
        data={value}
        barWidth={40}
        style={{ 
          data: { fill: "#1c1aa9" },
          labels: { fill: "white"}
        }}
        labelComponent={<VictoryLabel dy={-10}/>}

      
        x={'day'}
        y={'minutes'}
        />

        </VictoryChart>
      </div>
    );
}


