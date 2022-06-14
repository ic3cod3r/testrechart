import React, { useEffect, useState } from 'react'

function Modal({ open, setModalOpen, item, setItem, itemArr }) {
  const items = itemArr;
  var { title, desc, id } = item;

  const msg = `${title} \n ${desc}`

  useEffect(() => {
    const interval = setTimeout(() => setItem(items[id >= (items.length - 1) ? 0 : id + 1]), 1000)
    return () => clearInterval(interval)
  }, [item])

  return (
    <div className='sideBar-item-modal'>
      <span className='line'>{msg}</span>
      <button onClick={() => setModalOpen(false)}>Close</button>
    </div>
  )
}

export default Modal