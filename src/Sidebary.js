import React from 'react';
// import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';
import useFetch from 'use-http'
import { Routes, Route, Outlet, Link, BrowserRouter as Router } from "react-router-dom";
import BarCharty from './barChart';
import LineCharty from './lineChartBasic';
import PieCharty from './pieChart';
console.log("work1");
// export default props => {
//   return (
//     <Menu>
//       <a className="menu-item" href="/">
//         Home

//       </a>
//       <a className="menu-item" href="/stats1">
//         Efficiency over each quarter
//       </a>
//       <a className="menu-item" href="/stats2">
//         Some more stats "Line chart"
//       </a>
//       <a className="menu-item" href="/stats3">
//         Even more of some other stats "Pie chart"
//       </a>
//     </Menu>
//   );
// };
console.log("work2");
export default props => {
  return (
    console.log("work3"),
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
    
  );
};
console.log("work4");






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

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <h1 style={{ textAlign: "center" }}> Hi ShipStation!</h1>
    </div>
  );
}

function Bar() {
  return (
    <div>
      <h2>Stats1</h2>
      <BarCharty/>
    </div>
  );
}

function Line() {
  return (
    <div>
      <h2>Stats2</h2>
      <LineCharty/>
    </div>
  );
}

function Pie() {
  return (
    <div>
      <h2>Stats3</h2>
      <PieCharty/>
    </div>
  );
}


