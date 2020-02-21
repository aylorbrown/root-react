import React, { useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryAxis, VictoryContainer, VictoryChart } from "victory";
import UserContext from './UserContext';



// static version - create a default 
// move static data pass default value in app
// look at output component 

// get date with if/else aka switch
// const dayNumber = dayNumber.getDay();

// switch (dayNumber) {
//   case 0:
//     //Monday
//     data['Mon'] += 1
//     break;
//   case 1:
//     //Tuesday
//     data['Tues'] += 1
//     break;
//   case 2:
//     data['Wed'] += 1
//     break;
//   case 3:
//     data['Thurs'] += 1
//     break;
//   case 4:
//     data['Fri'] += 1
//     break;
//   case 5:
//     data['Sat'] += 1
//     break;
//   case 6:
//     data['Sun'] += 1
//     break;
// }




export default function ProgressChart() {
  const {value} = useContext(UserContext);

    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>

        <VictoryChart
        style={{ parent: { maxWidth: "100%" } }}
        domain={{y: [0, 10]}}
        height={600}
        width={600}
        containerComponent={<VictoryContainer responsive={false}/>}
        >

        <VictoryAxis
        tickValues={[1, 2, 3, 4, 5, 6, 7]}
        tickFormat={['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']}
        />
        {/* </VictoryChart> */}

        {/* <VictoryChart
        style={{ parent: { maxWidth: "100%" } }}
        width={900} height={900}
        > */}
        <VictoryBar 
        style={{ data: { fill: "#1c1aa9" } }}
        data={value}
        x={'day'}
        y={'time'}
        
        />

        </VictoryChart>
      </div>
    );
}


