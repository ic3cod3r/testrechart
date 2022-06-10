import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';
import useFetch from 'use-http'
import { Link } from 'react-router-dom'


export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/stats2">
        Efficiency over each quarter
      </a>
      <a className="menu-item" href="/stats3">
        Some more stats "Line chart"
      </a>
      <a className="menu-item" href="/stats4">
        Even more of some other stats "Pie chart"
      </a>
    </Menu>
  );
};