import React, { PureComponent } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

const data = [   //this is the data that shows up on the charts
  {
    name: 'Q1',
    ordersCancelled: 4000,
    ordersFullfiled: 2400,
    ordersLost: 2400,
  },
  {
    name: 'Q2',
    ordersCancelled: 3000,
    ordersFullfiled: 1398,
    ordersLost: 2210,
  },
  {
    name: 'Q3',
    ordersCancelled: 2000,
    ordersFullfiled: 9800,
    ordersLost: 2290,
  },
  {
    name: 'Q4',
    ordersCancelled: 2780,
    ordersFullfiled: 3908,
    ordersLost: 2000,
  }
]

export default class LineCharty extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v'

  render() {
    return (

      //This here is what sets the size and x/y axis and the legend
        <LineChart
            width={1590}
            height={590}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="ordersCancelled" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="ordersFullfiled" stroke="#82ca9d" />
            <Line type="monotone" dataKey="ordersLost" stroke="#FF0000" />
        </LineChart>
    )
  }
}
