import React from 'react'
import { BsChevronDoubleDown } from 'react-icons/bs';
import '../styles/components/Scroll.css';

export default function Scroll({title, top}) {
  return (
    <div className="scroll">
        <div
          onClick={() =>
            window.scroll({
              top: top,
              behavior: "smooth",
            })
          }
        >
          <p>{title}</p>
          <BsChevronDoubleDown />
        </div>
      </div>
  )
}
