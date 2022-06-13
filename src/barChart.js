import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [   // this is where I would change the name and stuff
  {
    name: 'Q1',
    Labels: 4000,
    Picked: 2400,
    Packed: 2400,
  },
  {
    name: 'Q2',
    Labels: 3000,
    Picked: 2210,
    Packed: 1398,
  },
  {
    name: 'Q3',
    Labels: 9800,
    Picked: 2290,
    Packed: 2000,
  },
  {
    name: 'Q4',
    Labels: 8420,
    Picked: 1913,
    Packed: 1877,
  }
];

export default class BarCharty extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';  // this is where I would change the api call to do with something involving ShipStation

  render() {
    return (

      <BarChart
        width={1590}
        height={590}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Labels" fill="#82ca9d" />
        <Bar dataKey="Picked" fill="#8884d8" />
        <Bar dataKey="Packed" fill="#958f2a" />
      </BarChart>
    );
  }
}
