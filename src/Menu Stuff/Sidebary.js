import React from 'react'
import '../CSS/Sidebar.css'
import { Routes, Route, Outlet, Link, BrowserRouter as Router, unstable_HistoryRouter as HistoryRouter } from "react-router-dom"
import BarCharty from '../charts/barChart'
import LineCharty from '../charts/lineChartBasic'
import PieCharty from '../charts/pieChart'
import Gear from '../image/Gear'


//these are the routes that are seen on the sidebar
export default props => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}  />
          <Route path="stats1" element={<Bar />} />
          <Route path="stats2" element={<Line />} />
          <Route path="stats3" element={<Pie />} />
        </Route>
      </Routes>
    </Router>
  )
}




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

//down below is what each route will take you to, so when you click on one of them, it will take you to a certain chart or image
function Home() {
  return (
    <div>
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


