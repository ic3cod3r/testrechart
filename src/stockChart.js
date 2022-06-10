import React from 'react';
import { useEffect, useState } from "react";
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';

export default function StockChart() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const data = [];
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=" + process.env.REACT_API)
        .then(res => res.json())
        .then(
            (result) => {
                for (var instance in result["Weekly Time Series"] ) {
                var mydata = (result["Weekly Time Series"][instance])
                mydata.date= instance
                data.push(mydata)
                }
                setItems(data.reverse())
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])
    return (
    <div>
      
        <LineChart width={500} height={250} margin={{ top: 150, right: 30, left: 20, bottom: 5 }} data={items}>
        <Line dot={false}  type="monotone" dataKey="1. open" stroke="rgb(0,200,5)" yAxisId="100" />
        <Tooltip content={<CustomTooltip data={items} />} />
        </LineChart>

    </div>
    )
}

function CustomTooltip(props) {
  var price = ""
  var date = ""
  console.log(props)
  if (props.data[props.label]) {
    price = props.data[props.label]["1. open"]
    date = props.data[props.label]["date"]
  }
  return (
    <div>
      <div >{date} </div>
      <div style={{ color: "rgb(0,200,5)"}}> $ {price}</div>
    </div>
  )
  }
  