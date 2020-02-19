import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis
} from 'recharts';



const data = [
    {
      name: 'Mon', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Tues', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Wed', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Thur', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Fri', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: 'Sat', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: 'Sun', uv: 3490, pv: 4300, amt: 2100,
    },
  ];
  
  export default class ProgressChart extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9kd8rssL/';
  
    render() {
      return (
        <BarChart width={450} height={120} data={data}>
          <Bar dataKey="uv" fill="#1c1aa9" />
          <XAxis dataKey="name" />
        </BarChart>
      );
    }
  }


  