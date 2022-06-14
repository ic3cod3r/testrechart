import React, { useEffect, useState } from 'react'
import "./App.css"
import Modal from './Modal';

const SidebarItem = ({ item, setItemOn, setItem}) => {
  
  
  return (
    <>
      <div className='sideBar-item' id={`sidebar-item${item.id}`} onClick={() => {
        setItem(item);
        setItemOn(true);
      }}>
        <p>{item.title}</p>
      </div>
    </>
  )
}

function Sidebar() {
  const sidebarItems = [
    {title: "Title 1", desc: "Description 1",  id: 0},
    {title: "Title 2", desc: "Description 2",  id: 1},
    {title: "Title 3", desc: "Description 3",  id: 2},
    {title: "Title 4", desc: "Description 4",  id: 3},
    {title: "Title 5", desc: "Description 5",  id: 4},
  ]

  const [itemActive, setItemActive] = useState(false);
  const [item, setItem] = useState();

  useEffect(() => {
    if (item) {
      const sidebar = document.getElementById("sideBar-item");
      sidebar.addEventListener("click", () => document.getElementById(`sidebar-item${item.id}`).style.backgroundColor = "red")
    } else {

    }
  }, [])

  return (
    <div className='sidebar-container'>
      <div className='sideBar'>
        {
          sidebarItems.map(i => {
            return <SidebarItem item={i} setItemOn={setItemActive} setItem={setItem} />
          })
        }
      </div>
      { itemActive && <Modal open={itemActive} setModalOpen={setItemActive} item={item} itemArr={sidebarItems} setItem={setItem}/> }
    </div>
  )
}

export default Sidebar