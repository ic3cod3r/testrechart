import React from 'react';
import { PieChart } from 'recharts';
import BarCharty from './barChart';
import StockChart from './stockChart';
import PieCharty from './pieChart';

function App() {
  return (
    <div>
      <div>
        <BarCharty />
      </div>
      <div>
        <StockChart/>
      </div>
      <div>
        <PieCharty/>
      </div>
    </div>

  )
}
export default App
