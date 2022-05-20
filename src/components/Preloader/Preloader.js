import React from 'react'
import './Preloader.css'

export default function Preloader() {
  return (
    <div>
        <div style={{height: "100vh", backgroundColor:"#171717", color: "#fff"}} className="loader-wrapper absolute d-flex justify-content-center align-items-center flex-column">
            <p className="loader-title">PLEASE WAIT A MOMENT</p>
            <h1 className="top-text-loader">The Portfolio is Loading</h1>
            <h2 className="bottom-text-loader">Have some snacks while you wait🍵🍿🥜🍫</h2>
        </div>
  </div>
  )
}
