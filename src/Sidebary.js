import React from 'react'
import './Sidebar.css'
import { slide as Menu } from 'react-burger-menu'
import useFetch from 'use-http'
import { Routes, Route, Outlet, Link, BrowserRouter as Router } from "react-router-dom"
import BarCharty from './barChart'
import LineCharty from './lineChartBasic'
import PieCharty from './pieChart'
import Gear from './Gear'

export default props => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="stats1" element={<Bar />} />
          <Route path="stats2" element={<Line />} />
          <Route path="stats3" element={<Pie />} />
        </Route>
      </Routes>
    </Router>
  )
}

// export default props => {
//   return (
//     <Menu>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="stats1" element={<Bar />} />
//             <Route path="stats2" element={<Line />} />
//             <Route path="stats3" element={<Pie />} />
//           </Route>
//         </Routes>
//       </Router>
//     </Menu>

//   )
// }







function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/stats1">Stats1</Link>
          </li>
          <li>
            <Link to="/stats2">Stats2</Link>
          </li>
          <li>
            <Link to="/stats3">Stats3</Link>
          </li>
        </ul>
      </nav>

      

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  )
}

function Home() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <h1 style={{ textAlign: "center" }}> Hi ShipStation!</h1>
      <Gear/>
    </div>
  )
}

function Bar() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Efficiency over each quarter</h1>
      <BarCharty/>
    </div>
  )
}

function Line() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Efficiency over each quarter</h1>
      <LineCharty/>
    </div>
  )
}

function Pie() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}> Sales over each quarter </h1>
      <PieCharty/>
    </div>
  )
}


